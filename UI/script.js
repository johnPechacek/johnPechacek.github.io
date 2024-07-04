LottieInteractivity.create({
    mode: 'chain',
    player: '#lottie-chest',
    actions: [
        {
            state: 'loop',
            transition: 'click',
            frames: 'rewards-chest-idle',
        },
        {
            state: 'autoplay',
            transition: 'onComplete',
            frames: 'rewards-chest-clicked-4',
            reset: true
        },
    ],
});

LottieInteractivity.create({
    mode: 'chain',
    player: '#lottie-trophy',
    actions: [
        {
            state: 'loop',
            transition: 'click',
            frames: 'trophy-empty',
        },
        {
            state: 'autoplay',
            transition: 'onComplete',
            frames: 'trophy-animate',
        },
        {
            state: 'loop',
            transition: 'click',
            frames: 'trophy-filled',
            reset: true
        },
    ],
});

LottieInteractivity.create({
    mode: 'chain',
    player: '#lottie-waveform',
    actions: [
        {
            state: 'loop',
            transition: 'click',
            frames: 'waveform-idle',
        },
        {
            state: 'loop',
            transition: 'click',
            frames: 'waveform-loop',
            reset: true
        },
    ],
});

LottieInteractivity.create({
    mode: 'chain',
    player: '#lottie-heart',
    actions: [
        {
            state: 'autoplay',
            transition: 'click',
            frames: 'idle',
        },
        {
            state: 'autoplay',
            transition: 'click',
            frames: 'active',
            reset: true
        },
    ],
});

const burgerMenuBtn = document.querySelector('.hamburger-menu-btn');
const burgerMenuIcon = document.querySelector('.hamburger-menu-icon');
const burgerMenu = document.querySelector('.hamburger-menu');

let menuOpen = false;

burgerMenuBtn.addEventListener('click', () => {
    if (menuOpen) {
        burgerMenuIcon.classList.remove('hamburger-menu-icon-x');
        burgerMenu.classList.remove('hamburger-menu-down');
        menuOpen = false;
    } else {
        burgerMenuIcon.classList.add('hamburger-menu-icon-x');
        burgerMenu.classList.add('hamburger-menu-down');
        menuOpen = true;
    }
});