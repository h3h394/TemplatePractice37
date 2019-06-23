let hidden = document.querySelector('.popup-container');

document.getElementById('open').addEventListener('click', function () {
    hidden.classList.toggle('hide');
});

document.getElementById('closeBtn').addEventListener('click', function () {
    hidden.classList.toggle('hide');
});

let module = document.querySelector('.module');

document.getElementById('circleBot').addEventListener('click', function () {
    module.classList.toggle('showModule');
    document.getElementById('body').style.overflowY = 'hidden';
});

document.getElementById('closeModule').addEventListener('click', function () {
    module.classList.toggle('showModule');
    document.getElementById('body').style.overflowY = 'visible';
});

let clicked = true;
let slide = document.querySelectorAll('.slideUp');

slide.forEach(function (el) {
    el.addEventListener('click', function () {
        let parent = el.parentElement;
        let links = parent.querySelectorAll('.link');
        if (!clicked) {
            el.style.transform = 'rotate(45deg)';
            clicked = true
        } else {
            el.style.transform = 'rotate(0deg)';
            clicked = false
        }
        links.forEach(function (link) {
            link.classList.toggle('hidden');
        });
    });
});

let topMenu = document.querySelector(".top-menu");
let days = topMenu.getElementsByClassName("day");
for (let i = 0; i < days.length; i++) {
    days[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$('.day').on('click', function () {
    $('.row').fadeOut('fast', function () {
        $('.row').fadeIn(500);
    });
});

const circles = document.querySelectorAll('.gallery .circle');

circles.forEach(function (circle) {
    circle.addEventListener('click', function (event) {
        let backgroundUrl = ''
        if (event.target.classList.contains('circle')) {
            backgroundUrl = window.getComputedStyle(event.target.parentNode, false).backgroundImage
        } else if (event.target.classList.contains('fas')) {
            backgroundUrl = window.getComputedStyle(event.target.parentNode.parentNode, false).backgroundImage
        }
        let galleryModule = document.querySelector('.gallery-module');
        let galleryPicture = document.querySelector('.gallery-module .picture');
        galleryPicture.style.backgroundImage = backgroundUrl
        galleryModule.classList.toggle('galleryHide');
        body.style.overflowY = 'hidden';
    })
})

document.getElementById('moduleOneClose').addEventListener('click', function () {
    document.querySelector('.gallery-module').classList.toggle('galleryHide');
    body.style.overflowY = 'visible';
});

let section = document.querySelector('.conference');
let arrow = document.getElementById('scrollUp');
const brochure = document.getElementById("brochure");

document.addEventListener('scroll', function () {
    let sectionPosition = section.getBoundingClientRect();
    console.log(sectionPosition);
    if (sectionPosition.y >= 0) {
        arrow.style.bottom = '-500px';
        brochure.style.left = "-50vw";
    } else if (sectionPosition.y < 0) {
        arrow.style.bottom = '180px';
        brochure.style.left = "-48px";
    }
});

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        900,
        'linear'
    )
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 700) {
        $("nav").css('position', 'fixed');
    }
    else {
        $("nav").css('position', 'absolute');
    }
});

let brochureModal = document.querySelector('.brochure-modal');
let brochureClose = document.getElementById('brochureClose');

document.getElementById('brochure').addEventListener('click', function () {
    brochureModal.classList.toggle('hide');
});

brochureClose.addEventListener('click', function () {
    brochureModal.classList.toggle('hide');
});

document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('nav .btn').classList.toggle('hide');
    document.querySelector('nav .container').classList.toggle('hide');
});