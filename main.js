`use strict`;
const randomInt = function (max = 0) {
    return Math.floor(Math.random() * max);
}
const backgroundChanger = function () {
    const element = document.querySelector('.container--div');
    element.style.background = `rgb(${randomInt(256)},
    ${randomInt(256)},
    ${randomInt(256)})`
}
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');

let intervalBackground;
let intervalPosition;
let isFun = false;
let randomSec;
btnStart.addEventListener('click', function () {
    if (!isFun){
        intervalBackground = setInterval(backgroundChanger, 1000)
        intervalPosition = setInterval(changePosition,300);
        btnStop.style.visibility = 'visible'
        randomSec = randomInt(10);
        setTimeout(() => btnStop.style.visibility = 'hidden',(randomSec - 0.1) * 1000)
        setTimeout(afterFun,randomSec*1000);
        isFun = true;
    }
})

function clearEnvironment(){
    clearInterval(intervalBackground);
    clearInterval(intervalPosition);
}
function changePosition() {
    const i = Math.floor(Math.random() * window.innerWidth) - Number(getComputedStyle(btnStart).width.split('px')[0]);
    const j = Math.floor(Math.random() * window.innerHeight) - Number(getComputedStyle(btnStart).height.split('px')[0]);
    btnStop.style.left = i + "px";
    btnStop.style.top = j + "px";
}
function afterFun(){
    alert('i think it is enough 😊')
    clearEnvironment();
    document.querySelector('.container--div').style.background = 'lightgoldenrodyellow';
    isFun = false;
    btnStop.removeEventListener('mouseover',changePosition);
}