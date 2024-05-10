window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    document.querySelector('nav').classList.toggle('window-scroll-home', window.scrollY < 100)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        const icone = faq.querySelector('.icone__faq i');
        if(icone.className === 'uil uil-plus'){
            icone.className = "uil uil-minus";
        }
        else{
            icone.className = "uil uil-plus";
        }
    })
}) 