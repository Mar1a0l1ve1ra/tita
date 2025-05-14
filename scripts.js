// Reveal Function
function reveal(part) {
    const element = document.getElementById(part);
    element.classList.remove('hidden');
    element.classList.add('visible');
    
    const nextButton = document.getElementById(`btn-${part}`);
    if (nextButton) nextButton.classList.remove('hidden');
}

// Create Interactive Confetti
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confetti.style.setProperty('--i', Math.random());
        confetti.onclick = () => confetti.remove();
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
        }, 5000);
    }
}