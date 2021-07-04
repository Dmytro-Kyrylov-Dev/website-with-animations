// Анимация toggle button

const togglePlaceBtn = document.getElementById("place-toggle-btn");
const toggleBtnTextHome = document.getElementById("toggle-btn-text-home");
const toggleBtnTextOffice = document.getElementById("toggle-btn-text-office");

function home() {
    togglePlaceBtn.style.left = "2px";
    toggleBtnTextHome.style.color = "white";
    toggleBtnTextOffice.style.color = "#404040";
}

function office() {
    togglePlaceBtn.style.left = "64px";
    toggleBtnTextOffice.style.color = "white";
    toggleBtnTextHome.style.color = "#404040";
}

// Анимация липкий курсор

const magneticBtns = document.querySelectorAll('#order-btn');

const magneticEffect = function (e) {
    const { offsetX: x, offsetY: y } = e
    const { offsetWidth: width, offsetHeight: height } = this

    const moveArea = 10;
    const xMove = (x / width) * (moveArea * 2) - moveArea;
    const yMove = (y / height) * (moveArea * 2) - moveArea;

    this.style.transform = `translate(${xMove}px, ${yMove}px)`

    if (e.type === 'mouseleave') this.style.transform = ''
};

magneticBtns.forEach((magneticBtn) => magneticBtn.addEventListener('mousemove', magneticEffect));


// Анимация для элементов

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-not-again'))
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300)
}

// Слайды

let slideIndex = 1;
showImg(slideIndex);
function currentImg(n) {
    showImg(slideIndex = n);
}
function showImg(n) {
    const x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";
}

// Спрятать кнопку внизу страницы

document.onscroll = function() {
    if (window.innerHeight + window.scrollY > document.body.clientHeight / 1.5) {
        document.getElementById('order-btn').style.display='none';
    } else {
        document.getElementById('order-btn').style.display='flex';
    }
}