const button = document.querySelector('.scroll-to-top');

let isFloating = false

window.addEventListener("scroll", () => {
    button.classList.add("show");

    if ( window.scrollY > 100 ) {
        if ( !isFloating ) {
            gsap.to(button, { y: -10, duration: 1, scale: 1, ease: "sine.out", yoyo: true, repeat: -1 });
            isFloating = true
        }
    } else {
        button.classList.remove("show");
    }
})
button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})