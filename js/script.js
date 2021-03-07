const body = document.body;
const hamburger = document.getElementById('js-hamburger');
const blackBg = document.getElementById('js-black-bg');
const menuList = document.getElementById('indexList');

hamburger.addEventListener('click', (e) => {
    body.classList.toggle('nav-open');
});

blackBg.addEventListener('click', (e) => {
    body.classList.remove('nav-open');
});

menuList.addEventListener('click', (e) => {
    if (body.classList.contains('nav-open')) {
        body.classList.remove('nav-open');
    }
});


const iSObservers = document.querySelectorAll('.waypoint');
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
};

const inView = (target) => {
    if (target.classList.contains('cont-img')) {
        target.classList.add('fadeIn');
    } else if (target.classList.contains('matrix')) {
        target.classList.add('is-animated');
    }
};

const observeUse = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            inView(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observeUse, options);
iSObservers.forEach(iSObserver => {
    observer.observe(iSObserver);
});


const scroll = new SmoothScroll('a[href*="#"]', {
    speedAsDuration: true,
    speed: 1500,
    easing: 'easeInOutQuint'
});

window.addEventListener('load', () => {
    const mySwiper = new Swiper('.mv-slide', {
        loop: true,
        speed: 2000,
        effect: 'fade',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
});


const galleryThumbs = new Swiper('.tab-menu', {
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slideActiveClass: 'swiper-slide-active'
});
const galleryTop = new Swiper('.tab-contents', {
    autoHeight: true,
    slidesPerView: 1,
    thumbs: {
        swiper: galleryThumbs
    }
});


gsap.registerPlugin(TextPlugin);
const tl = gsap.timeline();
window.addEventListener('load', () => {
    tl.to('.loading-inner', {
            opacity: 0,
            duration: 0.3,
            delay: 0.6,
            ease: 'power3.out'
        })
        .to('.loader', {
            display: 'none',
        })
        .to(".letter span", {
            duration: 2,
            text: "Always choose happiness"
        })
});


const touch = 'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

if (touch) {
    try {
        for (let si in document.styleSheets) {
            const styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (let ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
