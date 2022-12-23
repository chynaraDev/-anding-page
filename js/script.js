const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    loop:true,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});