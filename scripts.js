// Reveal Function with Sound
function reveal(part, button) {
    const element = document.getElementById(part);
    element.classList.remove('hidden');
    element.classList.add('visible');

    if (button) {
        button.classList.add('clicked');
    }

    const nextButton = document.getElementById(`btn-${part}`);
    if (nextButton) nextButton.classList.remove('hidden');

    // Play sound effect on reveal
    const sound = document.getElementById('reveal-sound');
    sound.currentTime = 0; // Restart the sound
    sound.play();

    // Confetti burst when the final part is revealed
    if (part === 'parte4') {
        createConfetti();
    }
}

// Create Confetti
function createConfetti() {
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.setProperty('--i', Math.random());
        document.body.appendChild(confetti);
    }
}

// Create Rising Balloons with Strings and Bounce
function createBalloons() {
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

        const string = document.createElement('div');
        string.classList.add('string');
        balloon.appendChild(string);

        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 10000);
    }
}
