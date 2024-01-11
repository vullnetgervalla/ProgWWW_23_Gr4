const textDisplayed = {
    buttonOverview: 'divOverview',
    buttonImpact: 'divImpact',
    buttonWhatYouGet: 'divWhatYouGet',
};
document.querySelectorAll('.buttons').forEach((button) => {
    button.addEventListener('click', (e) => {
        document.querySelectorAll('.buttons').forEach((btn) => {
            btn.classList.toggle('highlighted', btn === e.target);
            document.getElementById(textDisplayed[btn.id]).style.display = btn === e.target ? 'block' : 'none';
        });
    });
});