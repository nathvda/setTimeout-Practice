let main = document.querySelector("main");
let secondblock = document.getElementById("seconds");
let minutesblock = document.getElementById("minutes");

let seconds = 0; 
let minutes = 0;

function displaySeconds(){ 
    secondblock.innerHTML = seconds;
    seconds++;
}

function displayMinutes(){ 
    minutes = Math.floor((seconds - 1) / 60);
    if (minutes < 1) {
        minutesblock.innerHTML = "";
    }
    else if (minutes < 2){
    minutesblock.innerHTML = minutes + " minutes has passed";
} else { minutesblock.innerHTML = minutes + " minutes have passed";
}

}

setInterval(displaySeconds, 1000);
setInterval(displayMinutes, 1000);

