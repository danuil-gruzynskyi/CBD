/// burger

let burgMenu = document.querySelector('.burger__menu');
let burgBtn = document.querySelector('.burger__btn');
let iconClose = document.querySelector('.svg__close');
let iconMenu = document.querySelector('.svg__menu');

burgBtn.addEventListener("click", toggleMenu)

function toggleMenu() {
    if (burgMenu.classList.contains('burger__showMenu')) {
        burgMenu.classList.remove('burger__showMenu');
        iconClose.style.display = 'none';
        iconMenu.style.display = 'block';
    } else {
        burgMenu.classList.add('burger__showMenu');
        iconClose.style.display = "block";
        iconMenu.style.display = "none";
    }
}

//// скрол вниз

let scrBtn = document.querySelector('.header__scroll');
let scrPlace = document.querySelector('#footer');

scrBtn.addEventListener('click', e => {
    e.preventDefault();
    scrPlace.scrollIntoView({
        block: 'start',
    })
})

//// окна

let logBtn = document.querySelector('.login__btn');
let logForm = document.querySelector('.login__form');
let header = document.querySelector('.header');

document.addEventListener("click", function (e) {
    if (e.target == logBtn) {
        logForm.style.visibility = "visible"
    }
})

window.onclick = function (e) {
    if (e.target == header) {
        logForm.style.visibility = "hidden"
    }
}

let btnSearch = document.querySelector('.search');
let searchForm = document.querySelector('.search__form')

document.addEventListener("click", function (e) {
    if (e.target == btnSearch) {
        searchForm.style.visibility = "visible"
    }
})

document.addEventListener("click", function (e) {
    if (e.target == header) {
        searchForm.style.visibility = "hidden"
    }
})


///// tabs

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs__nav__item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') :
                item.classList.remove('active');
        })
    }
};
tab();

//// slider

$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
        ]
    });
});



//// acordion

document.querySelectorAll('.acordion__item__triger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('acordion__item_active')

    })
)

///// slider_2

$(document).ready(function () {
    $('.reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                }
            },
        ]
    });
});
