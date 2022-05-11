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
const luarboximgabout = document.querySelector('#luarbox-img-about');
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
io2.observe(luarboximgabout);

const luarboxketabout = document.querySelector('#luarbox-ket-about');
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
io3.observe(luarboxketabout);

const luarboxikonabout = document.querySelector('.luarbox-ikon-about1');
const ikon1 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ripiew');
        } else {
            entry.target.classList.remove('ripiew');
        }
    });
}
const ik = new IntersectionObserver(ikon1);
ik.observe(luarboxikonabout);

const luarboxikonabout2 = document.querySelector('.luarbox-ikon-about2');
const ikon2 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ripiew2');
        } else {
            entry.target.classList.remove('ripiew2');
        }
    });
}
const ik2 = new IntersectionObserver(ikon2);
ik2.observe(luarboxikonabout2);

const luarboxikonabout3 = document.querySelector('.luarbox-ikon-about3');
const ikon3 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ripiew3');
        } else {
            entry.target.classList.remove('ripiew3');
        }
    });
}
const ik3 = new IntersectionObserver(ikon3);
ik3.observe(luarboxikonabout3);

const luarboxikonabout4 = document.querySelector('.luarbox-ikon-about4');
const ikon4 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ripiew4');
        } else {
            entry.target.classList.remove('ripiew4');
        }
    });
}
const ik4 = new IntersectionObserver(ikon4);
ik4.observe(luarboxikonabout4);

const luarboxikonabout5 = document.querySelector('.luarbox-ikon-about5');
const ikon5 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ripiew5');
        } else {
            entry.target.classList.remove('ripiew5');
        }
    });
}
const ik5 = new IntersectionObserver(ikon5);
ik5.observe(luarboxikonabout5);

const luarboxikonabout6 = document.querySelector('.luarbox-ikon-about6');
const ikon6 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('ripiew6');
        } else {
            entry.target.classList.remove('ripiew6');
        }
    });
}
const ik6 = new IntersectionObserver(ikon6);
ik6.observe(luarboxikonabout6);
// END ABOUT SECTION



// EDUCATION SECTION
const cardBx = document.querySelector('#cardBx1');
const card1 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview4');
        } else {
            entry.target.classList.remove('inview4');
        }
    });
}
const crd = new IntersectionObserver(card1);
crd.observe(cardBx);

const cardBx2 = document.querySelector('#cardBx2');
const card2 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview5');
        } else {
            entry.target.classList.remove('inview5');
        }
    });
}
const crd2 = new IntersectionObserver(card2);
crd2.observe(cardBx2);

const cardBx3 = document.querySelector('#cardBx3');
const card3 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview6');
        } else {
            entry.target.classList.remove('inview6');
        }
    });
}
const crd3 = new IntersectionObserver(card3);
crd3.observe(cardBx3);
// END EDUCATION SECTION



// EXPERIENCE SECTION
const luarboxexp1 = document.querySelector('.luar-box-exp1');
const boxexp1 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview7');
        } else {
            entry.target.classList.remove('inview7');
        }
    });
}
const exp1 = new IntersectionObserver(boxexp1);
exp1.observe(luarboxexp1);

const luarboxexp2 = document.querySelector('.luar-box-exp2');
const boxexp2 = function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('inview8');
        } else {
            entry.target.classList.remove('inview8');
        }
    });
}
const exp2 = new IntersectionObserver(boxexp2);
exp2.observe(luarboxexp2);
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