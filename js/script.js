let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

const menuItem = document.querySelectorAll('header nav a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    })
    // console.log(current);
    menuItem.forEach(a => {
        a.classList.remove('activeNAV');
        if (a.classList.contains(current)) {
            a.classList.add('activeNAV');
        }
    })

})



function activeItemNav() {
    menuItem.forEach((item) =>
        item.classList.remove('activeNAV'));
    this.classList.add('activeNAV');
}


menuItem.forEach((item) =>
    item.addEventListener('click', activeItemNav));

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


})

ex__btn_2.addEventListener('click', () => {
    ex__skill_2.classList.toggle('active')

})

ex__btn_3.addEventListener('click', () => {
    ex__skill_3.classList.toggle('active')


})


// pic
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

// lable
const labels = document.querySelectorAll('.form__control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 40}ms"> ${letter} </span>`)
        .join('')
})


// checkbox dark mode
var checkboxDarkMode = document.getElementById('checkbox');
// console.log(checkboxDarkMode);
checkboxDarkMode.addEventListener('click', () => {
    if (checkboxDarkMode.checked == true) {
        document.body.classList.add("dark_theme");


        // logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652457922/My-portfolio/logo__white_xpnszp.png"

        // clound
        document.querySelector('.clound').innerHTML = ` <img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652513746/My-portfolio/clound-moon-left_jaocus.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652513746/My-portfolio/clound-moon_peb6rn.png" alt="">`

        // inmg home
        document.querySelector('#home .image').innerHTML = ` <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652851267/My-portfolio/me_attdm8_jjqfny_optimized_isuewp.png" alt="" class="front-img">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652448395/My-portfolio/dc1-dark_wzz4e6.png" alt="" class="dc1">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652448395/My-portfolio/dc2-dark_yxecil.png" alt="" class="dc2">
        <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652448395/My-portfolio/dc2-dark_yxecil.png" alt="" class="dc3">`

        // circle
        document.querySelector('.skill .skill-container img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652458965/My-portfolio/picVAP-dark_qeqodg.png";

        // imgage about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652851269/My-portfolio/img_about_ucs7pd_optimized_rjusfe.jpg";

        // about taget
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652448395/My-portfolio/dc2-dark_yxecil.png";

        // project-border-left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652450175/My-portfolio/project-dark_uq99k2.png";

        // bg__fav__cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652458479/My-portfolio/bg_fav_cover-dark_q0xovc.png";

    }
    else if (checkboxDarkMode.checked == false) {
        document.body.classList.remove("dark_theme");

        // logo
        document.querySelector('.logo img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300899/My-portfolio/logo__black_n1pscg.png"

        // clound
        document.querySelector('.clound').innerHTML = `  <img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852065/My-portfolio/clound-moon-left_jaocus_optimized_dmjzjr.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852066/My-portfolio/clound-moon_peb6rn_optimized_hzeqz3.png" alt="">
`

        // inmg home
        document.querySelector('#home .image').innerHTML = ` <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802935/My-portfolio/ava2_optimized_n9hxyi.png" alt="" class="front-img">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300890/My-portfolio/dc1_stlq7p.png" alt="" class="dc1">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc2">
         <img src="https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png" alt="" class="dc3">
`

        // circle
        document.querySelector('.skill .skill-container img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300903/My-portfolio/picVAP_m0q8ij.png";

        // imgage about me
        document.querySelector('.about .row-1 .image img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652851269/My-portfolio/img__infor_optimized_optimized_optimized_iqzszn.jpg";

        // about taget
        document.querySelector('.about .row-1 .content img').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300891/My-portfolio/dc2_wquo4x.png";


        // project-border-left
        document.querySelector('.project__border__left').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300902/My-portfolio/project_border_ofqone.png";

        // bg__fav__cover
        document.querySelector('.bg__fav__cover').src = "https://res.cloudinary.com/dvzingci9/image/upload/v1652300886/My-portfolio/bg_fav_cover_lic1zw.png";

    }
})