let main = document.querySelector("main");

let wordToDisplay = "Hello there, how are you doing?";

let i = 0;
let timeout = 1000;
function slowType() {
  if (i < wordToDisplay.length) {
    main.innerHTML += wordToDisplay.charAt(i);
    i++;
    setTimeout(slowType, timeout);
    clearTimeout(timeout);
  }
}

slowType();
