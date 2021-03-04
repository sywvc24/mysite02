class SpanWrap {
    constructor() {
        this.settings = {
            target: ".js-span-wrap-text"
        }
        this.targets = "";
        this.targetLength = 0;
        this.nodes = [];
        this.convertContents = [];
    }

    init(options) {
        this.setup(options);
        this.getNodes();
        this.convert();
        this.set();
    }

    setup(options) {
        this.settings = Object.assign({
            target: this.settings.target
        }, options || {});
        this.targets = document.querySelectorAll(this.settings.target);
        this.targetLength = this.targets.length;
    }

    getNodes() {
        for (let target of this.targets) {
            let nodes = target.childNodes;
            this.nodes.push(nodes);
        }
    }

    convert() {
        for (let i = 0; i < this.targetLength; i++) {
            this.convertContents.push([]);
            for (let node of this.nodes[i]) {
                if (node.nodeType == 3) {
                    let text = node.textContent.replace(/\s+/g, '');
                    text.split('').forEach((v) => {
                        this.convertContents[i].push("<span>" + v + "</span>");
                    });

                } else {
                    this.convertContents[i].push(node.outerHTML);
                }
            }
        }
    }

    set() {
        for (let i = 0; i < this.targetLength; i++) {
            this.targets[i].innerHTML = this.convertContents[i].join("");
        }
    }

}

const spanWrap = new SpanWrap();
spanWrap.init();


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


const loader = document.getElementById('js-loader');
window.addEventListener('load', () => {
    const ms = 300;
    const stopT = 500;
    loader.style.transitionDuration = ms + 'ms';

    const loaderOpacity = () => loader.style.opacity = 0;
    const loaderDisplay = () => loader.style.display = 'none';

    setTimeout(loaderOpacity, stopT);
    setTimeout(loaderDisplay, stopT + ms);
});


const iSObservers = document.querySelectorAll('.waypoint');
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
};

const inView = (target) => {
    if (target.classList.contains('cont-img')) {
        target.classList.add('fadeIn');
    } else if (target.classList.contains('letter')) {
        target.classList.add('typing');
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


const mySwiper = new Swiper('.mv-slide', {
    loop: true,
    speed: 2000,
    effect: 'fade',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
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
