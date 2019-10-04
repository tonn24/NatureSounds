for(let i=0; i<document.querySelectorAll(".nature").length; i++){
   document.querySelectorAll(".nature")[i].addEventListener("click", function(){
       var buttonInnerHTML = this.innerHTML;
       playSound(buttonInnerHTML);

   });
};

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

function playSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/Earthquake.mp3");
            audio1.play();
            break;

         case "a":
            var audio2 = new Audio("sounds/forest_fire.mp3");
            audio2.play();
            break;

         case "s":
            var audio3 = new Audio("sounds/rainforestambience.mp3");
            audio3.play();
            break;

         case "d":
            var audio4 = new Audio("sounds/rain_start.mp3");
            audio4.play();
            break;

         case "j":
            var audio5 = new Audio("sounds/thunder_and_rain_loop.mp3");
            audio5.play(); 
            break;

         case "k":
            var audio6 = new Audio("sounds/rain-thunder.mp3");
            audio6.play();
            break;

         case "l":
            var audio7 = new Audio("sounds/tropical.mp3")
            audio7.play();
            break;
    
        default:
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
};

