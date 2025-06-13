let _1 = Number(document.getElementById("1").innerText);
let _2 = Number(document.getElementById("1").innerText);
let _3 = Number(document.getElementById("1").innerText);
let _4 = Number(document.getElementById("1").innerText);
let _5 = Number(document.getElementById("1").innerText);
let _6 = Number(document.getElementById("1").innerText);
let _7 = Number(document.getElementById("1").innerText);
let _8 = Number(document.getElementById("1").innerText);
let _9 = Number(document.getElementById("1").innerText);
let _plus = Number(document.getElementById("1").innerText);
let _minus = Number(document.getElementById("1").innerText);
let _multiply = Number(document.getElementById("1").innerText);
let __divide = Number(document.getElementById("1").innerText);
let _modulo = Number(document.getElementById("1").innerText);
let _floor = Number(document.getElementById("1").innerText);


let display = document.getElementById("displaytext");
function clicked1(){
 display.innerText+=1;
 var x = document.getElementById("a1");
 x.currentTime = 0;
 x.play();
   
}
function clicked2(){
    display.innerText+=2;
    document.getElementById("a2").play();
}
function clicked3(){
    display.innerText+=3;
    document.getElementById("a3").play();
}
function clicked4(){
    display.innerText+=4;
    document.getElementById("a4").play();
}
function clicked5(){
    display.innerText+=5;
    document.getElementById("a5").play();
}
function clicked6(){
    display.innerText+=6;
    document.getElementById("a6").play();
}
function clicked7(){
    display.innerText+=7;
    document.getElementById("a7").play();
}
function clicked8(){
    display.innerText+=8;
    document.getElementById("a8").play();
}
function clicked9(){
    display.innerText+=9;
   //var x= document.getElementById("a9");
   //x.play();
   console.log("sensored");
}
function clickedplus(){
   display.innerText+= '+';
   // var x= document.getElementById("aplus");
   //x.play();
    console.log("sensored");
} 
function clickedminus(){
    display.innerText+='-';
  //   var x= document.getElementById("aminus");
  // x.play();
     console.log("sensored");
    
}
function clickedmultiply(){
    display.innerText+='*';
   // var x= document.getElementById("across");
    //x.play();
     console.log("sensored");
}
function clickeddivide(){
    display.innerText+='/';
}
function clicked0(){
    display.innerText+='.';
      document.getElementById("adot").play();
}
function clicked00(){
    display.innerText+="0";
    document.getElementById("a0").play();
}
function clickedequal(){

  try{
    let result = eval(display.innerText);
    if(result==Infinity){
             var x =document.getElementById("thappuney");
            x.style.display="block";
            var y = document.getElementById("asari");
            y.pause();
            y.currentTime=0;
          x.play();
          setTimeout(()=>clickedreset(true),1000);
    }
    
    else{
          if(display.innerText=="1+1"){
            var video = document.getElementById("thappuney");
            video.src="videos/0528.mp4"
            video.style.display="block";
            video.play()
            setTimeout(()=>clickedreset(true),6000);

          }
          else{
              document.getElementById("asari").play();
          }
    
    }
    display.innerText = result;
  }
  catch(error)
  {
    var x =document.getElementById("thappuney");
    x.style.display="block";
    var y = document.getElementById("asari");
    y.pause();
    y.currentTime=0;
    x.play();

    setTimeout(()=>clickedreset(true),1000);
  }
   
}
function clickedreset(flag){
  
  if(flag){
    console.log("oume illa")
  }
  else{
    var x =document.getElementById("athavaru").play();
  }
   
    display.innerText=""
    display.style.color="white";
    var x =document.getElementById("thappuney");
    x.src = "videos/thappuney.mp4"
    x.style.display="none";
    


}