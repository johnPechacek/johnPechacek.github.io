let animContainer = document.getElementById("lottie-chest");

let anim = lottie.loadAnimation({
    container: animContainer,
    name: 'lottie-chest',
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: 'images/chest.json'
});

anim.addEventListener('DOMLoaded', () => {
    anim.goToAndPlay('rewards-chest-idle');

    let clickHandler = () => {
        anim.goToAndPlay('rewards-chest-clicked-4')
    }

    animContainer.addEventListener('click', clickHandler);
});