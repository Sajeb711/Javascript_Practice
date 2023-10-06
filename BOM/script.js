// video --   learn with sumit  (101,102,103,104,105,106,107,108,109)

//*  bom বা (browser object model)  এর কাজ হচ্ছে browser সকল কাজগুলো করা ।  bom ও dom  দুটো আলাদা বিষয় ।  dom আছে bom এর মধ্যে ।  bom হচ্ছে  পুরো একটা object আর  dom হচ্ছে সেই পুরো object এর single একটা object ।  window object হচ্ছে আসল একটা object . browser এ আমরা যা কিছু দেখি টা সব window object এর মধ্যে থাকে । আর সেই window object  এর মধ্যে অনেক কিছু থাকে । যেমন ঃ  history , location , navigation , screen , document ইত্যাদি ।  আমরা browser এ যা দেখি টা সবকিছু bom এর অন্তর্ভুক্ত । 


                                    // BOM window Object

//* bom এর official কোন standard নেই ।  প্রতিটা browser আলাদা আলাদা ভাবে তৈরি । প্রতিটা browser আলাদা হওয়াই সেগুলোতে আলাদা আলাদা না করে bom নিয়ে কাজ করলেই হবে । bom এর মধ্যে  global window object থাকে যা বর্তমানে সব browser support করে । তাই  bom এ   window Object সবচেয়ে জরুরী । 

                 //* window size properties
/*function showHeight(){
 const height =  document.getElementById("show_height");
 height.innerHTML = "the window inner height is : " + window.innerHeight
}
function showwidth(){
  const width =  document.getElementById("show_width");
 width.innerHTML = "the window inner width is : " + window.innerWidth
}*/

const sizeHeight =  document.getElementById("show_height");
const sizeWidth =  document.getElementById("show_width");
sizeWidth.innerHTML = "the window inner width is : " + window.innerWidth
sizeHeight.innerHTML = "the window inner height is : " + window.innerHeight
//  browser এর screen এর height ও width property দেখার জন্য  window.innerWidth ও  window.innerHeight property ব্যবহার করা হয় । 


               //* widnow open & close function

   let globalVariable;             
function openWindow(){
  globalVariable = window.open("/DOM/index.html" , "_blank");
  // globalVariable = window.open("/Arrow Function/index.html" , "_blank");  window.open এর মধ্যে একটিমাত্র link দেওয়া যায় তার বেশি দেওয়া যাবে না । 
}
// window.open এর parameter হিসেবে ( url , name , specs, replace ) দেওয়া যায় ।  url এর মধ্যে কোন কিছুর link দিতে হবে সেটা কোন webpage এর হতে পারে আবার নিজের কোন  file ও হতে পারে ।  window.open এর মধ্যে parameter হিসেবে html এর attrribute target="_blank অথবা_self অথবা_parent অথবা_top"  দেওয়া যায় । javascript এ default ভাবে target _blank দেওয়া থাকে ।   

function closeWindow(){
  globalVariable.close();
}
// window.open এর মধ্যে parameter দেওয়া যায় কিন্তু  close Window এর মধ্যে parameter দেওয়া যায় না । close Window এর কাজ হলে open কোন Window কে close করা । একটি browser অনেক গুলো window open করা  থাকতে পারে । তাহলে  close Window কোন window তাকে colse করবে ? এইজন্য window.open এর মধ্যে কোন reference দিতে হবে যাতে window টা যাতে close হয় । এর জন্য একটি  window.open যদি একটি global variable এর মধ্যে রেখে দেওয়া যায় তাহলে সেই variable এর মাধ্যমে open করা window কে close করা যাবে ।  এখানে  globalVariable নামে একটি global varibale দেওয়া হয়েছে । globalVariable এর মধ্যে window.open কে রাখা হয়েছে । তারপর globalVariable কে close করা হয়েছে । window.open যখন open হবে তারপর close Window এ  টিপ দিলে open হওয়া সেই window টা  close হয়ে যাবে ।  





                                              // BOM window Screen

const screenWidth = document.getElementById("screen_width");
const screenHeight = document.getElementById("screen_height");
const screenAvailableHeight = document.getElementById("screen_availableHeight");
const screenAvailableWidth = document.getElementById("screen_availablewidth");
const screenColorDepth = document.getElementById("screen_colorDepth");
const screenPixeDepth = document.getElementById("screen_pixeDepth");

screenWidth.innerHTML = "Screen Width is : " + screen.width;
screenHeight.innerHTML = "Screen Height is : " + screen.height;
screenAvailableWidth.innerHTML = "Screen Available Width  is : " + screen.availWidth;
screenAvailableHeight.innerHTML = "Screen Available Height  is : " + screen.availHeight;
screenColorDepth.innerHTML = "Screen Color Depth  is : " + screen.colorDepth;
screenPixeDepth.innerHTML = "Screen Pixe Depth is : " + screen.pixelDepth;

// window.screen এর মাধ্যমে user টা screen এর প্রধানত perfect height  ও  widrh জানতে পারে ।  screen হচ্ছে window object এর under এ তার একটি property। আর ওপরের  property।  আর screen property এর under এ রয়েছে অনেক property যেমন ওপরের   property গুলো ।  screen.width ও screen.height হল  user এর পুরো monitor এর screen আর height ও  witdth । screen.availWidth ও screen.availHeight  user এর মনিটর এর height ও  width দেয় pixel এ  এবং window এর যে taskbar থাকে সেটা বাদে দিবে ।  screen.colorDepth ও  screen.pixelDepth গুলো 32bit বা 24bit অনুযায়ী color দেয়। 





                                                  // BOM window Location 

const href = document.getElementById("href");
const HostName = document.getElementById("hostName");
const PathName = document.getElementById("pathName");
const Protocol = document.getElementById("protocol");
const Port = document.getElementById("port");

href.innerHTML = "Window HREF is : " + window.location.href;
HostName.innerHTML = "Window HostName is :" + window.location.hostname;
PathName.innerHTML = 'Window PathName is :' + window.location.pathname;
Protocol.innerHTML = 'Window Protocol is :' + window.location.protocol;
Port.innerHTML = 'Window Port is :' + window.location.port;

function loadPage(){
  location.assign("/Math/index.htm");
}

// location.href এর কাজ হচ্ছে  website পুরো যে address টা থাকে সেটাকে দেখানো । location.hostname এর কাজ হচ্ছে শুধুমাত্র hostname দেখানো । hostname বলতে বোঝায়,  https://www.google.com এর মধ্যে শুধু   www.google.com কে host name বোঝায়  ।  location.pathname বলতে বোঝায়  আমার webpage টা যে path এর মধ্যে আছে  সেটা ।  location.protocol দ্বারা বোঝায় আমি https:// ব্যবহার করছি না http://  ব্যবহার করছি ।  location.port বলতে বোঝায়  কোন webpage এর  port number দেখায় ।   location.assign function এর কাজ হচ্ছে  আমার বর্তমান page এই নতুন document load করে । location.assign function এর মধ্যে parameter হিসেবে link দিতে হবে যেটা আমি বর্তমান page এ load করতে চাই ।   অর্থাৎ location.assign function এর মাধ্যমে আমার বর্তমান page এর address টা parameter এ দেওয়া link তাকে শুধু replace করে দিবে । 





                                                   // BOM window History

function back(){
  window.history.back();
}

function forword(){
  window.history.forward();
}

//wndow.history object browser এর  history ধরে রাখে । windows.history তে দুইটা function রয়েছে । history.back() তে click করলে বর্তমান page থেকে পূর্বের page এ যাবে আর history.forword() তে click করলে বর্তমান page থেকে পরের page এ যাবে ।   




                                                   // BOM window Navigator

const appname = document.getElementById("appname")
const appCodeName = document.getElementById("appCodeName")
const platform = document.getElementById("platform")
const coockieEnable = document.getElementById("coockieEnable")
const product = document.getElementById("product")
const userAgent = document.getElementById("userAgent")
const Online = document.getElementById("Online")
const language = document.getElementById("language")
const javaEnable = document.getElementById("javaEnable")


appname.innerHTML = "Navigator AppName is : " + navigator.appName
appCodeName.innerHTML = "Navigator appCodeName is : " + navigator.appCodeName
platform.innerHTML = "Navigator platform is : " + navigator.platform
coockieEnable.innerHTML = "Navigator coockieEnable is : " + navigator.cookieEnabled
product.innerHTML = "Navigator product is : " + navigator.product
userAgent.innerHTML = "Navigator userAgent is : " + navigator.userAgent
language.innerHTML = "Navigator language is : " + navigator.language
Online.innerHTML = "Navigator Online is : " + navigator.onLine
javaEnable.innerHTML = "Navigator javaEnable is : " + navigator.javaEnabled()

// browser এর আরেকটি নাম হচ্ছে navigator . navigate মানে একটি জায়গায় যাওয়া । browser সম্পর্কে বিভিন্ন তথ্য জানতে চাইলে navigator object ব্যবহার করতে হবে ।  Appname এর মাধ্যমে জানা যায় browser বা application এর নাম কি । appCodeName  এর  মাধ্যমে জানা যায় browser এর code name কি ।  platform এর মাধ্যমে জানা যায় browser টা কোন operator system এর মধ্যে আছে ।  cookieEnable এর কাজ হচ্ছে browser এ cookie enable করা আছে কি না বা browser এ cookie নিয়ে কাজ করতে পারব কি না ।  product এর মাধ্যমে জানা যায় browser এর  product এর নাম কি ।  appVersion এর মাধ্যমে জানা যায় browser এর version কত বা কি ।  userAgent এর মাধ্যমে জানা যায় user এর সম্পর্কে । language এর মাধ্যমে জানা যায় browser এর dafault language  কি ।  online এর মাধ্যমে জানা যায় internet on করা আছে না off করা আছে ।  javaEnable function এর মাধ্যমে জানা যায়  java নিয়ে browser এ কাজ করা যাবে কি না । 






                                            // BOM Popup Boxes

const ConfirM = document.getElementById("confirM")
const prompt = document.getElementById("proMpt")

function Alert(){
  window.alert('This is window alert box !')
}

function Confirm(){
  let checkUp;
  if(window.confirm("are you alright ? ")){
    checkUp = "thank God , You are Well !"
  }
  else{
    checkUp = "Get Well Soon !!!"
  }
  confirM.innerHTML = checkUp
}

function Prompt(){
  const PersonName =  window.prompt("What is your name ?",)
  let name = " ";

  if(PersonName === null || PersonName === ""){
    name = "Please Enter Your Name !!"
  }
  else{
    name = "Hello " + PersonName + " ..........."
  }

  prompt.innerHTML = name
}

// popup box এর মাধ্যমে web page এ কোন alert দেখানো যায় আবার user এর কাছে থেকে কোন তথ্য নেওয়া যায় । popUp box তিন ধরণের আছে ।   Alert Box , Confirm Box , Prompt Box ..  alert box এর মাদ্ধে web page এ কোন alert বা announce কোন important তথ্য ইত্যাদি দেখানো হয় । confirm box এর  মাধ্যমে কোন কিছু হ্যাঁ  বা না কি না তা জানা যায় । prompt box এর মাধ্যমে user এর কাছে থেকে  লিখিত ভাবে কোন information নেওয়া যায় । 




                                                                    // Timing Events

const SetTimeOut = document.getElementById("timeOut");
const TimeInterval = document.getElementById("interval");

let timeOutfunction;
let  timeIntervalFunction;

function startTImeout(){
  timeOutfunction = setTimeout(function(){
    SetTimeOut.innerHTML = " 4 Second Done ! "
  } , 4000)  
}

function endTimeout(){
  clearTimeout(timeOutfunction)
}

function startTimeInterval(){
  timeIntervalFunction = setInterval(function(){
    TimeInterval.innerHTML =  new Date().toLocaleTimeString()
  } , 1000) 
}

function endTimeInterval(){
  clearInterval(timeIntervalFunction)
}

// setTimeOut হচ্ছে কিছু নির্দিষ্ট সময় পর পর একটি function একবারই call হবে । setTimeOut বন্ধ করতে চাইলে  clearTimeout function ব্যবহার করতে হবে  আর setInterval হচ্ছে  একটি নির্দিষ্ট সময় পর পর function টি call হতেই  থাকবে । setInterval বন্ধ করতে চাইলে  clearInterval function ব্যবহার করতে হবে।




                                                             // BOM Cookies

