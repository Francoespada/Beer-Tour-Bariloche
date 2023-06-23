let menu = document.querySelector('.menu-icon');
const menuActive = document.querySelector('.menu-activo-list');
const nav = document.querySelector('nav');
const toggleImg = document.querySelectorAll('.toggle-img');
const cardsTour = document.querySelectorAll('.card-text');
const arrowUp = document.querySelector('.arrowU')

cardsTour.forEach(i => {
    i.onclick = () => {
        i.classList.toggle('card-active');

    };
});

menu.onclick = () => {
    menu.classList.toggle('mover');
    menuActive.classList.toggle('visible');
    nav.classList.toggle('nav-heigth');
};

const imgsInicio = toggleImg.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('toggle-img-active');
    } );
} );



