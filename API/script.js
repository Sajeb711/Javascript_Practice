//  video   --   learn with sumit  (110,111,112,113,114,115,116) 





                                                           // Forms API


//* example -- 1 :
function validation() {
  const input = document.getElementById("inputForm")
  
  if(! input.checkValidity()){
    document.getElementById("showInput").innerHTML = input.validationMessage
  }
}


//* example -- 2 :
function validation2(){
  const input2 = document.getElementById("inputForm2");
  
  if(input2.validity.rangeOverflow){
    input2.setCustomValidity('Range over flow error')
  }
  else if(input2.validity.rangeUnderflow){
    input2.setCustomValidity('Range Under flow error')
  }
  else if(input2.validity.valueMissing){
    input2.setCustomValidity('value Missing')
  }
  
  document.getElementById("showInput2").innerHTML = input2.validationMessage
}
//*  No explaination . it hard to expaling . just watch the exmples and learn . 





                                               //  History API

function back(){
  window.history.back();
}

function forword(){
  window.history.forward();
}

function back(){
window.history.go(-2);
}

function getHistory(){
  alert(window.history.length);
}



                                                          // Stroage API

//* web browser  কোন তথ্য stroage করে রাখা যায় ।  web browser এ অনেক বড় কিছু  store করে রাখা যায়  না ।  web browser এ  text  stroage করে রাখা যায় ।  browser এর নিজস্ব একটি memory আছে  যেখানে  অনেক কিছু  store করে রাখা যায় ।  stroage দুই ধরণের  হয় । 
/*
1. localStorage
2. sessionStorage

//* 1.  localStorage বলতে  বোঝায় আমার text বা file আমার local Browser এ save  হয়ে থাকবে । আমি  চাইলে একটি text  আমার local browser এ  save করে রাখতে পারি  এবং তারপর browser বন্ধ করে দিয়ে pc বন্ধ করে দিয়ে  , pc কোন আকদিন open করি  তখনও browser এ সেই text থেকে যাবে ।   যদিনা browser এর cookie বা catche clear করার সময়  localStorage ও  delet  করে ফেলা হয় ।  localStorage এর text manually delet না করলে সেটা সারা জীবন থেকে যাবে । 

//*  2.  sessionStorage হচ্ছে ক্ষণস্থায়ী  ।  যখন কোন web page visit করা হয় তখন  সেই সময়কে session বলা হয় ।  যখন  browser  তা close করে  দেওয়া হবে তখন  session টাও শেষ হয়ে যাবে । আবার browser টা আবার open সেই web page এ গেলে  তখন আবার সেই session টি চালু হয়ে যাবে ।  sessionStorage হচ্ছে সেই  session ব্যাপী থাকবে , যা browser close করলে session টি চলে যাবে আবার browser open করলে session টি আবার চালু হয়ে যাবে । 

localStorage ও sessionStorage  প্রায় একই  ।  sessionStorage ও localStorage দুটোই "key" "value " pair নাম গ্রহন করে।   যেমন ঃঃ 
*/

function SetLocalStorage(key , value){
  localStorage.setItem(key , value) ;
}
function GetLocalStorage(key){
alert (localStorage.getItem(key ));
}
function RemoveLocalStorage(key){
localStorage.removeItem(key ) ;
}
function ClearLocalStorage(){
localStorage.clear;
}



function SetSessionStorage(key , value){
  sessionStorage.setItem(key , value) ;
}
function GetSessionStorage(key){
alert ( sessionStorage.getItem(key));
}
function RemoveSessionStorage(key){
  sessionStorage.removeItem(key ) ;
}
function SessionStorageKeylength(){
  alert ( sessionStorage.length);
  
}
function ClearSessionStorage(){
sessionStorage.clear;
}





                                                        //   Web Geolocation API

const  displayLocation = document.getElementById("displayLocation")

function getLocation(){
  if(navigator.geoLocation){
    navigator.getLocation.getCurrentPosition(showPosition , showLocationError)
  }
  else{
    displayLocation.innerHTML ='Geolocation Is not Available in your Browser'
  }
}

function showPosition(Position){
   displayLocation.innerHTML  = "Latitude :  " + Position.coords.latitude  + "longitute : " + Position.coords.longitude
}

function showLocationError(error){
  switch(error){
    case error.PERMISSION_DENIED :
      displayLocation.innerHTML = "User senied the Geolocation request"; 
      break;

    case error.POSITOPN_UNAVILABLE :
      displayLocation.innerHTML = "Location informaton is unvailable"; 
      break;

    case error.TIMEOUT :
      displayLocation.innerHTML = "the request of user location time out"; 
      break;

    case error.UNKOWN_ERROR :
      displayLocation.innerHTML = "An unlhown error occurred"; 
      break;
  }
}


//* location এটা দেখা যাবে না MB ছাড়া । আবার অনেক function করা হয়নি MB না থাকার কারণে ।   mobile browser এ geoLocation support করে নি আমার  টায়। 
