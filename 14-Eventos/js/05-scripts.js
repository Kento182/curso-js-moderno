window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 600)
        console.log('el elemento ya esta visible');
    else
        console.log('Aun no, da mas scroll')
});