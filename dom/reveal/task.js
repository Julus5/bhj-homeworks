const reveals = document.querySelectorAll('.reveal');
reveals.forEach(element => {
    document.addEventListener('scroll', ()=>{
        const {top, bottom} = element.getBoundingClientRect();
        if (top < window.innerHeight) {
            element.classList.add('reveal_active');
        }
        if (bottom < 0 || top > window.innerHeight) {
            element.classList.remove('reveal_active');
        }
    });
});

