const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', handleClick);
})

function handleClick(e) {
    const activePanel = document.querySelector('.active');
    if (this !== activePanel) {
        activePanel.classList.remove('active');
        this.classList.add('active')
    }
}