const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('click en nav');
});

nav.addEventListener('mouseenter', () => {
    console.log('entando en la navegacion');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    nav.style.backgroundColor = 'white';
});