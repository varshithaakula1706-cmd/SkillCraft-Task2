let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function formatTime(time){

    let milliseconds = time % 1000;
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let hours = Math.floor(time / (1000 * 60 * 60));

    return (
        String(hours).padStart(2,"0") + ":" +
        String(minutes).padStart(2,"0") + ":" +
        String(seconds).padStart(2,"0") + ":" +
        String(milliseconds).padStart(3,"0")
    );
}

function updateDisplay(){
    display.textContent = formatTime(elapsedTime);
}

document.getElementById("start").addEventListener("click",function(){

    if(timerInterval) return;

    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(function(){

        elapsedTime = Date.now() - startTime;

        updateDisplay();

    },10);

});

document.getElementById("pause").addEventListener("click",function(){

    clearInterval(timerInterval);

    timerInterval = null;

});

document.getElementById("reset").addEventListener("click",function(){

    clearInterval(timerInterval);

    timerInterval = null;

    elapsedTime = 0;

    updateDisplay();

    laps.innerHTML = "";

});

document.getElementById("lap").addEventListener("click",function(){

    if(elapsedTime===0) return;

    let li = document.createElement("li");

    li.textContent = formatTime(elapsedTime);

    laps.appendChild(li);

});

updateDisplay();