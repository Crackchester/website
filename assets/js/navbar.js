const hamburger = document.getElementById('hamburger');
const navbarRight = document.querySelector('.navbar-right');
hamburger.addEventListener('click', () => {
    navbarRight.classList.toggle('active');
});