const text=document.getElementById("text_area");
const btn=document.getElementById("bts");


btn.addEventListener('click', function(){
    const speechsynth=window.speechSynthesis;
    const enteredtext=text.value;
    const error=document.querySelector('.error');
    if(!speechsynth.speaking && !enteredtext.trim().length){
        error.textContent="nothing to convert ! enter text in the text area."

    }
    if(!speechsynth.speaking && enteredtext.trim().length){
        error.textContent ="";
        const newUtter=new SpeechSynthesisUtterance(enteredtext);
        speechsynth.speak(newUtter);
        btn.textContent="sound is playing..."  
        // btn.textContent=stop(newUtter);
        // btn.textContent=pause(newUtter);
    }

    setTimeout(() => {
        btn.textContent="play converter sound"  ;
    }, 5000);

} )


