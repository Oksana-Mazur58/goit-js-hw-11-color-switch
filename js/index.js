import colors from './colors'

const refs = {
    buttonStart: document.querySelector('[data-action=start]'),
    buttonStop: document.querySelector('[data-action="stop"]')
}

refs.buttonStart.addEventListener('click', onStartChangeBackg)
refs.buttonStop.addEventListener('click', onStopChangeBackg)

const PROMT_DELAY = 1000;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartChangeBackg() {
    intervalId = setInterval(onChangeBackgraund, PROMT_DELAY);
    refs.buttonStart.setAttribute('disabled', true);
}



function onStopChangeBackg() {
    clearInterval(intervalId);
    refs.buttonStart.removeAttribute('disabled');
    document.body.removeAttribute('style')
}

function onChangeBackgraund() {
    const indexOfColor = randomIntegerFromInterval(0, colors.length - 1);
    document.body.setAttribute('style', `background-color:${colors[indexOfColor]}`)
}
