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


const scroll = new SmoothScroll('a[href*="#"]', {
    speedAsDuration: true,
    speed: 1500,
    easing: 'easeInOutQuint'
});


const touch = 'ontouchstart' in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            const styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}


const loader = document.getElementById('js-loader');
window.addEventListener('load', () => {
    const ms = 300;
    const stopT = 1000;
    loader.style.transitionDuration = ms + 'ms';

    const loaderOpacity = function () {
        loader.style.opacity = 0;
    }
    const loaderDisplay = function () {
        loader.style.display = 'none';
    }

    setTimeout(loaderOpacity, stopT);
    setTimeout(loaderDisplay, stopT + ms);
});


window.addEventListener('load', () => {
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
    })
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


const iSObservers = document.querySelectorAll('.waypoint');
const options = {
    threshold: 0.1
};

const inView = (target) => {
    if (target.classList.contains('ttl')) {
        target.classList.add('typing');
    } else if (target.classList.contains('cont-img')) {
        target.classList.add('fadeIn');
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
