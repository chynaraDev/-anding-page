const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 50,
        },
    },
});