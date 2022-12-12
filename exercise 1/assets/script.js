let main = document.querySelector("main");

let wordToDisplay = "prout";

let i = 0;
let timeout = 1000;
function wouhou(){
   
    if ( i < wordToDisplay.length){
      main.innerHTML += wordToDisplay.charAt(i);  
      i++; 
      setTimeout(wouhou, timeout);
      clearTimeout(timeout);
    }
    }

    
    wouhou();



