// function counter() {
//     var count = setInterval(function () {
//         var c = parseInt($('.counter').text());
//         $('.counter').text((++c).toString());
//         if (c == 100) {
//             clearInterval(count);
//             $('.counter').addClass('hide')
//             $('.preloader').addClass('active')
//         }
//     }, 60)
// }
// counter()
function counter() {
    var count = setInterval(function () {
        var c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if (c == 100) {
            clearInterval(count);
            $('.counter').addClass('hide')
            $('.circle').addClass('hide')
            $('#preload').addClass('active')
        }
    }, 60)
}
counter()


// mouse trail
const canva = document.querySelector("#canva");
const ctx = canva.getContext("2d");


let w, h, balls = [];
let mouse = {
    x: undefined,
    y: undefined
}
let rgb = [
    [26, 188, 156],
    [46, 204, 113],
    [52, 152, 219],
    [155, 89, 182],
    [241, 196, 15],
    [230, 126, 34],
    [231, 76, 60]
]

function init() {
    resizeReset();
    animationLoop();
}

function resizeReset() {
    w = canva.width = window.innerWidth;
    h = canva.height = window.innerHeight;
}

function animationLoop() {
    ctx.clearRect(0, 0, w, h);
    if (mouse.x !== undefined && mouse.y !== undefined) {
        balls.push(new Ball());
    }
    drawBalls();
    requestAnimationFrame(animationLoop);
}

function drawBalls() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();

    }
}

function mousemove(e) {
    mouse.x = e.x;
    mouse.y = e.y;
}

function mouseout() {
    mouse.x = undefined;
    mouse.y = undefined;
}


function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

class Ball {
    constructor() {
        this.x = mouse.x + getRandomInt(-20, 20);
        this.y = mouse.y + getRandomInt(-20, 20);
        this.size = getRandomInt(10, 20);
        this.rgb = rgb[getRandomInt(0, rgb.length - 1)];
        this.style = "rgba(" + this.rgb[0] + "," + this.rgb[1] + "," + this.rgb[2] + ",.5)";
    }
    draw() {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update() {
        if (this.size > 0) {
            let s = this.size - 0.3;
            this.size = (s <= 0) ? 0 : s;
        }
    }
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", resizeReset);
window.addEventListener("mousemove", mousemove);
window.addEventListener("mouseout", mouseout);
// end mouse trail


// Text Typing 
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Let's Started", "Welcome", "To My Personal Website"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 800);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, typingDelay + 50);
});


// Text Typing End





// HERO SECTION
const kethero = document.querySelector('.ket-hero');
const cb = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview');
        } else {}
    });
}
const io = new IntersectionObserver(cb);
io.observe(kethero);
// END HERO SECTION

// ABOUT SECTION
const aboutimg = document.querySelector('.about-img');
const cb2 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview2');
        } else {
            entry.target.classList.remove('inview2');
        }
    });
}
const io2 = new IntersectionObserver(cb2);
io2.observe(aboutimg);

const icons = document.querySelector('.icons');
const ic = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('review');
        } else {
            entry.target.classList.remove('review');
        }
    });
}
const ip = new IntersectionObserver(ic);
ip.observe(icons);

const ketpropil = document.querySelector('.ket-propil');
const cb3 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview3');
        } else {
            entry.target.classList.remove('inview3');
        }
    });
}
const io3 = new IntersectionObserver(cb3);
io3.observe(ketpropil);
// END ABOUT SECTION



// EDUCATION SECTION
const boks1 = document.querySelector('#boks1');
const cb4 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview4');
        } else {
            entry.target.classList.remove('inview4');
        }
    });
}
const io4 = new IntersectionObserver(cb4);
io4.observe(boks1);
const boks2 = document.querySelector('#boks2');
const cb5 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview5');
        } else {
            entry.target.classList.remove('inview5');
        }
    });
}
const io5 = new IntersectionObserver(cb5);
io5.observe(boks2);
const boks3 = document.querySelector('#boks3');
const cb6 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview6');
        } else {
            entry.target.classList.remove('inview6');
        }
    });
}
const io6 = new IntersectionObserver(cb6);
io6.observe(boks3);
// END EDUCATION SECTION



// EXPERIENCE SECTION
const cntexp1 = document.querySelector('#cntexp-1');
const cb7 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview7');
        } else {
            entry.target.classList.remove('inview7');
        }
    });
}
const io7 = new IntersectionObserver(cb7);
io7.observe(cntexp1);
const cntexp2 = document.querySelector('#cntexp-2');
const cb8 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview8');
        } else {
            entry.target.classList.remove('inview8');
        }
    });
}
const io8 = new IntersectionObserver(cb8);
io8.observe(cntexp2);
// END EXPERIENCE SECTIOn




// MY GOALS SECTION
const goals2 = document.querySelector('#goals-2');
const cb9 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview9');
        } else {
            entry.target.classList.remove('inview9');
        }
    });
}
const io9 = new IntersectionObserver(cb9);
io9.observe(goals2);
const goals3 = document.querySelector('#goals-3');
const cb10 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview10');
        } else {
            entry.target.classList.remove('inview10');
        }
    });
}
const io10 = new IntersectionObserver(cb10);
io10.observe(goals3);
const goals4 = document.querySelector('#goals-4');
const cb11 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview11');
        } else {
            entry.target.classList.remove('inview11');
        }
    });
}
const io11 = new IntersectionObserver(cb11);
io11.observe(goals4);
// MY GOALS SECTION END




// CONTACT SECTION
const kontak = document.querySelector('#kontak');
const cb12 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview12');
        } else {
            entry.target.classList.remove('inview12');
        }
    });
}
const io12 = new IntersectionObserver(cb12);
io12.observe(kontak);
// CONTACT SECTION END


// Back to Top

window.addEventListener('scroll', function () {
    const scroll = document.querySelector('#backtop');
    scroll.classList.toggle("hidup", window.scrollY > 500)
});