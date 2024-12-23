const pulseCircle = document.getElementById('pulse-circle');
const changeColorButton = document.getElementById('change-color');

const colors = ['#007BFF', '#28A745', '#DC3545', '#FFC107', '#17A2B8'];

changeColorButton.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    pulseCircle.style.backgroundColor = randomColor;
});