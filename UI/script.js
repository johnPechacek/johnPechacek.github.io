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