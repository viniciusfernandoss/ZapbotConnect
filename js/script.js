//===================================================//
//                      Navbar                       //
//===================================================//
// window.onscroll = function() {
//     var containerH = document.getElementById('headerr');
//     if (window.scrollY > 1) { // Ajuste este valor conforme necessário
//         containerH.style.display = 'none';
//     } else {
//         containerH.style.display = 'block';
//     }
// };

const swiperOne = new Swiper('.swiper-chamado-mobile', {
    breakpoints: {
             0: {
                 slidesPerView: 1
             },
             992: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 3
             }
    },
    // navigation: {
    //         nextEl: '.swiper-case-sucesso-mobile .swiper-button-next',
    //         prevEl: '.swiper-case-sucesso-mobile .swiper-button-prev',
    // },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-chamado-mobile .swiper-pagination',
      clickable: true,
    },
});

const swiperTwo = new Swiper('.swiper-vantagens-mobile', {
    breakpoints: {
             0: {
                 slidesPerView: 1
             },
             992: {
                 slidesPerView: 2
             },
             1024: {
                 slidesPerView: 3
             }
    },
    // navigation: {
    //         nextEl: '.swiper-case-sucesso-mobile .swiper-button-next',
    //         prevEl: '.swiper-case-sucesso-mobile .swiper-button-prev',
    // },
    spaceBetween: 30, // Espaço entre os slides
    loop: true,
    pagination: {
      el: '.swiper-vantagens-mobile .swiper-pagination',
      clickable: true,
    },
});