`use strict`;
const randomInt = function (max = 0){
    return Math.floor(Math.random() * max);
}
const backgroundChanger = function(){
    const element =document.querySelector('.container--div');
    element.style.background = `rgb(${randomInt(256)},
    ${randomInt(256)},
    ${randomInt(256)})`
}
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');

let interval;
btnStart.addEventListener('click',function (evt){
    interval = setInterval(backgroundChanger,1000);
})
btnStop.addEventListener('click',function (ev) {
    interval && clearInterval(interval);
})