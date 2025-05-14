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

    if (part === 'parte4') {
        createConfetti();
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.setProperty('--i', Math.random());
        document.body.appendChild(confetti);
    }
}

function createBalloons() {
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloons');
        balloon.style.left = Math.random() * window.innerWidth + 'px';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(balloon);
    }
}

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
    document.querySelectorAll('.confetti, .balloons').forEach((el) => el.remove());
    createBalloons();
    createConfetti();
}
