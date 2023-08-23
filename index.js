
console.log('dsfdsfd')

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // modules: [Swiper.Pagination, Swiper.Keyboard],
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 0,
        }
    },
});

console.log(swiper)
// const swiper = new Swiper('.swiper-container', {
//     slidesPerView: 5,
//     spaceBetween: 0,
//     loop: true,
//     autoplay: {
//         delay: 3000,
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//             spaceBetween: 40,
//         },
//         500: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//         },
//         992: {
//             slidesPerView: 4,
//             spaceBetween: 60,
//         },
//         1400: {
//             slidesPerView: 5,
//             spaceBetween: 60,
//         }
//     },
//     modules: [Swiper.Pagination, Swiper.Keyboard]
// });