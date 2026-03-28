document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('La página está visible')
    } else {
        console.log('La página está oculta')
    }
})