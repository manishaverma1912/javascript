function per(){
    let x =parseInt(document.forms["myform"]["physics"].value);
    let y =parseInt(document.forms["myform"]["maths"].value);
    let z =parseInt(document.forms["myform"]["chemistry"].value);
    let a=(x+y+z)/3
    
    
if(a>=90){
      document.getElementById("demo").innerHTML= '<br> <p  style="font-size: 40px;"> Percentage : </p>' +a+  '<p style="font-size: 40px;" > Congratulation  your score <b> First Division  </b>   in the class. <br>  </p> <img src="1medal.jpg" alt="" style="width:400px">'
      return false;

}
else if(a>=80  && a<90){
 document.getElementById("demo").innerHTML=  '<br> <p  style="font-size: 40px;"> Percentage : </p>' +a+  '<p style="font-size: 50px;">Congratulation  your score <b> Second Division  </b> in the class. <br> </p> <img src="2medal.jpg" alt="" style="width:350px">'
 return false;
}
else if(a>=70 && a<80){
document.getElementById("demo").innerHTML=  '<br> <p  style="font-size: 40px;"> Percentage : </p>' +a+'<p  style="font-size: 50px;">Congratulation  your score <b>  Third  Division </b>   in the class. <br>  </p>  <img src="3 medal.jpg" alt="" style="width:350px">'
return false;
}
else{
document.getElementById("demo").innerHTML= '<br> <p  style="font-size: 40px;"> Percentage : </p>'+a+'<br> <p  style="font-size: 50px;">Improve  your score  not good  in the class. <br>  </p>  <img src="hardwork.jpeg" alt="" style="width:350px">'
return false;
}


}