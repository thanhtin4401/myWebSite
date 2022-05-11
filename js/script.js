let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

console.log(header);

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');


// mouse setting
window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});



// click explore

const ex__skill_1 = document.querySelector(".skill .skill__item_1");

const ex__skill_2 = document.querySelector(".skill .skill__item_2");

const ex__skill_3 = document.querySelector(".skill .skill__item_3");

const ex__btn_1 = document.querySelector(".skill .skill__item_1 .btn__explore");

const ex__btn_2 = document.querySelector(".skill .skill__item_2 .btn__explore");

const ex__btn_3 = document.querySelector(".skill .skill__item_3 .btn__explore");


ex__btn_1.addEventListener('click', () => {
    ex__skill_1.classList.toggle('active')
    // console.log(ex__btn);

})

ex__btn_2.addEventListener('click', () => {
    ex__skill_2.classList.toggle('active')
    // console.log(ex__btn);

})

ex__btn_3.addEventListener('click', () => {
    ex__skill_3.classList.toggle('active')
    // console.log(ex__btn);

})



$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,
        dots: false,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            },
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                infinite: false,
                dots: true,

            },
        },],
        // autoplay: true,
        // autoplaySpeed: 1000,
    });
});