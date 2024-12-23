function getMoonPhase() {
    const now = new Date();
    const newYear = new Date(now.getFullYear(), 0, 1);
    const daysInYear = (now - newYear) / (1000 * 60 * 60 * 24);
    const phase = (daysInYear + 1.5) % 29.53;

    let moonPhaseClass = '';
    let moonPhaseName = '';

    if (phase < 1) {
        moonPhaseClass = 'new-moon';
        moonPhaseName = 'New Moon';
    } else if (phase < 7.4) {
        moonPhaseClass = 'first-quarter';
        moonPhaseName = 'Waxing Crescent';
    } else if (phase < 14.8) {
        moonPhaseClass = 'full-moon';
        moonPhaseName = 'First Quarter';
    } else if (phase < 22.1) {
        moonPhaseClass = 'first-quarter';
        moonPhaseName = 'Waxing Gibbous';
    } else {
        moonPhaseClass = 'new-moon';
        moonPhaseName = 'Full Moon';
    }

    return { moonPhaseClass, moonPhaseName };
}

document.addEventListener('DOMContentLoaded', () => {
    const moonPhaseElement = document.getElementById('moon-phase');
    const moonPhaseText = document.getElementById('moon-phase-text');

    const { moonPhaseClass, moonPhaseName } = getMoonPhase();

    moonPhaseElement.classList.add(moonPhaseClass);
    moonPhaseText.textContent = moonPhaseName;
});