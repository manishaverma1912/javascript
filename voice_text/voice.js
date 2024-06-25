const click_convert=document.getElementById("click_to_convert")
const converttext=document.getElementById("convert_text")

click_convert.addEventListener('click',function(){
var speech=true;
window.SpeechRecognition=window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
recognition.interimPesults= true;

recognition.addEventListener('result',e=>{
   const transcript=Array.from(e.results)
   .map(result =>result[0])
   .map(result =>result.transcript)
   converttext.innerHTML=transcript;
   click_convert.innerHTML="This is your text."

   
})
if(speech==true){
   recognition.start();
   click_convert.innerHTML=" speak.."
}
 })

