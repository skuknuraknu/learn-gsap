const animation = gsap.to(".card", {
    scale: 1.25,
    x: -100,
    opacity: 1,
    duration: 2,
    rotation: 360,
    borderRadius: "50%",
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
})
const playButton = document.getElementById("Play");
const pauseButton = document.getElementById("Pause");
const resumeButton = document.getElementById("Resume");
const reverseButton = document.getElementById("Reverse");
const restartButton = document.getElementById("Restart");
const killButton = document.getElementById("Kill");
const yoyoButton = document.getElementById("Yoyo");

pauseButton.onclick = () => animation.pause();
playButton.onclick = () => animation.play();
resumeButton.onclick = () => animation.resume();
reverseButton.onclick = () => animation.reverse();
restartButton.onclick = () => animation.restart();
killButton.onclick = () => animation.kill();
yoyoButton.onclick = () => animation.yoyo(true);