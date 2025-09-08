gsap.to(".card", {
    scale: 1,
    opacity: 1,
    duration: 2,
    onComplete: () => {
        gsap.to(".card", { y: -50, repeat: -1, yoyo: true, duration: 0.2});
    }
})