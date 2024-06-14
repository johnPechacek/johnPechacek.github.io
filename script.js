LottieInteractivity.create({
    mode: 'chain',
    player: '#lottie-chest-homepage',
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