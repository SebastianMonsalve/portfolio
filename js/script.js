let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')) {
        hideText_btn.innerHTML = 'Read Less';
    }
    else {
        hideText_btn.innerHTML = 'Read More';
    }
}




let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}




ScrollReveal({
    reset: true,
    distance: '5rem',
    duration: 2000,
    delay:100
    });

ScrollReveal().reveal('.info-content', { origin: 'top' });
ScrollReveal().reveal('.info-content-p', { origin: 'left' });
ScrollReveal().reveal('.social-media', { origin: 'right' });



document.addEventListener('DOMContentLoaded', function() {
    let menu = document.getElementById('menu');
    let toggle_open = document.getElementById('toggle_open');
    let toggle_close = document.getElementById('toggle_close');

    toggle_open.addEventListener('click', toggleMenu);
    toggle_close.addEventListener('click', toggleMenu);

    let menuItems = menu.getElementsByTagName('a');
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', closeMenu);
    }

    function toggleMenu() {
        menu.classList.toggle('show-menu');
        if (menu.classList.contains('show-menu')) {
            toggle_open.style.display = 'none';
            toggle_close.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            toggle_open.style.display = 'block';
            toggle_close.style.display = 'none';
            document.body.style.overflow = 'auto'; // Allow scrolling
        }
    }

    function closeMenu() {
        menu.classList.remove('show-menu');
        toggle_open.style.display = 'block';
        toggle_close.style.display = 'none';
        document.body.style.overflow = 'auto'; // Allow scrolling
    }
});


