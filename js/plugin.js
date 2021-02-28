const scroll = new SmoothScroll('a[href*="#"]', {
    speedAsDuration: true,
    speed: 1500,
    easing: 'easeInOutQuint'
});


const mySwiper = new Swiper('.mv-slide', {
    loop: true,
    effect: 'fade',
    preloadImages: false,
    lazy: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 2000
});

const tab = new Swiper('.tab-contents', {
    slidesPerView: 1,
    slideActiveClass: 'swiper-slide-active',
    autoHeight: true,
    speed: 500,
    thumbs: {
        swiper: {
            el: '.tab-menu',
            slidesPerView: 3,
        }
    },
});
