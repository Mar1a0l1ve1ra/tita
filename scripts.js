// Reveal Function with Sound
function reveal(part, button) {
    const element = document.getElementById(part);
    element.classList.remove('hidden');
    element.classList.add('visible');

    if (button) {
        button.classList.add('clicked');
        button.disabled = true;
    }

    const nextButton = document.getElementById(`btn-${part}`);
    if (nextButton) nextButton.classList.remove('hidden');

    // Play sound effect on reveal
    const sound = document.getElementById('reveal-sound');
    sound.currentTime = 0;
    sound.play();

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

// Restart Experience
function restartExperience() {
    document.querySelectorAll('.visible').forEach((el) => {
        el.classList.remove('visible');
        el.classList.add('hidden');
    });

    document.querySelectorAll('.clicked').forEach((btn) => {
        btn.classList.remove('clicked');
        btn.disabled = false;
    });

    document.querySelector('.voucher button').classList.remove('hidden');
}
