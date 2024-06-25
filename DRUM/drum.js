var buttonhtml;
const buttons=document.querySelectorAll("button");
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        this.style.color="purple";
        var buttonhtml=this.innerHTML;
        makesound(buttonhtml);
        buttonAnimation(buttonhtml);
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch(key){
        case 'w':
            var audio = new Audio('mixkit-drum-bass-hit-2294.wav');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('mixkit-drum-joke-accent-579.wav');
            audio.play();
            break;

        case 's':
            var audio = new Audio('mixkit-bass-guitar-single-note-2331.wav');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('mixkit-chord-swell-short-692.wav');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('mixkit-guitar-notification-alert-2320.wav');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('mixkit-negative-guitar-tone-2324.wav');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('mixkit-relaxing-bell-chime-3109.wav');
            audio.play();
            break;
        case 'n':
            var audio = new Audio('mixkit-happy-guitar-chords-2319.wav');
            audio.play();
            break;
        case 'm':
            var audio = new Audio('mixkit-short-guitar-strum-2318.wav');
            audio.play();
            break;
        case 'r':
            var audio = new Audio('mixkit-toy-guitar-stroke-up-2330.wav');
            audio.play();
            break;
        default:
            console.log(buttonhtml);
    }
}

function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);

}
  
