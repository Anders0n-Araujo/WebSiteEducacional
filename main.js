window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    document.querySelector('nav').classList.toggle('window-scroll-home', window.scrollY < 100)
})