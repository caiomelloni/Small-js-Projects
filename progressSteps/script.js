const prev = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');
const circles = document.querySelectorAll('.circle');
const container = document.querySelector('.progress-container');

let stepCounter = 1;

prev.addEventListener('click', handlePrev);
next.addEventListener('click', handleNext);

function handlePrev() {
    stepCounter--;
    removeProgress();

    circles[stepCounter].classList.remove('active')

    console.log(stepCounter)
    if (stepCounter === 1) {
        prev.setAttribute('disabled','');
    }
    else if (stepCounter === 3)
        next.removeAttribute('disabled');
}

function handleNext() {
    stepCounter++
    addProgress();

    circles[stepCounter - 1].classList.add('active')

    if (stepCounter === 2) 
        prev.removeAttribute('disabled');
    
    else if (stepCounter === 4)
        next.setAttribute('disabled','');
}

function removeProgress() {
    let num = getPorcentagem();
    num = num - 33;
    setarPorcentagem(num);
}

function addProgress() {
    let num = getPorcentagem();
    num = num + 33;
    setarPorcentagem(num);
}

function setarPorcentagem(num) {
    const novaPorcentagem = `--porcentagem: ${num}%`
    container.setAttribute('style', novaPorcentagem);
}

function getPorcentagem() {
    return +container.getAttribute('style').replace('--porcentagem:','').replace('%','');
}