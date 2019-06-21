let hidden = document.querySelector('.popup-container');

document.getElementById('open').addEventListener('click', function () {
    hidden.classList.toggle('hide');
    document.getElementById('body').style.overflowY = 'hidden';
});

document.getElementById('closeBtn').addEventListener('click', function () {
    hidden.classList.toggle('hide');
    document.getElementById('body').style.overflowY = 'visible';
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
        console.log(parent);
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