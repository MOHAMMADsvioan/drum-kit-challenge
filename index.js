var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrums; i++){


document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
    var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);

});


}


document.addEventListener("keypress", function(event){

    makeSound(event.key);

    
});


function makeSound(key){
    
         switch (key) {
            case "w":
                     var audioOne = new Audio("sounds/tom-1.mp3")
                     audioOne.play();
                     break;

            case "a":

                    var audioTwo = new Audio("sounds/tom-2.mp3");
                    audioTwo.play();
                    break;

            case "s":

                    var audioThree = new Audio("sounds/tom-3.mp3");
                    audioThree.play();
                    break;

            case "d":

                   var audioFour = new Audio("sounds/tom-4.mp3");
                   audioFour.play();
                   break;

            case "j":
                   var audioFive = new Audio("sounds/snare.mp3");
                   audioFive.play();
                   break;

            case "k":
                  var audioSix = new Audio("sounds/crash.mp3");
                  audioSix.play();
                  break;

            case "l":
                var audioSeven = new Audio("sounds/kick-bass.mp3")
                audioSeven.play();
                break;
        default: alert(buttomInnerHTML);
      }

}



