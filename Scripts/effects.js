let navbar = document.getElementById('navbar');
let scrolled = false;

window.onscroll = function () {

    if (window.scrollY > 100) {

        navbar.classList.remove('top');

        if (!scrolled) {

            navbar.style.transform = 'translateY(-70px)';
        }

        setTimeout(function () {

            navbar.style.transform = 'translateY(0px)';
            scrolled = true;
        }, 300)
    }

    else {

        navbar.classList.add('top');
        scrolled = false;
    }
}