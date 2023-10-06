// video -- (86,87,88,89,90,91,92,93,94,95,96,97,98,99,100),, anisul islam (35),,

// dom বা document object model যার মাধ্যমে javascript html এর ওপর access নেয় ।  dom হল একটি  interface যার দ্বারা javascript html এর সবকিছু পরিবর্তন করতে পারে । 


                                // dom methods

// html এর কোন tag কে control করার জন্য প্রথমে সেই tag কে select  করতে হয় । কোন tag  কে select করার  জন্য javascipt এ কিছু  method  ও property  রয়েছে । যেমন ঃ 

document.getElementById("example1").innerHTML = 'hello world !';

const example2 = document.getElementById("example2").innerHTML = ' hello worlds !'

// এখানে  getElementById হল  method এবং innerHTML হল property ।  getElementById  method এর মাধ্যমে  html এর মধ্যে থাকা  tag কে তার id দ্বারা access করা যায় ।  innerHTML property দ্বারা html এর মধ্যে থাকা tag এর মধ্যের  text কে পরিবর্তন করা যায় । 



                              // dom elements

//  javascript দিয়ে  html elemnts গুলোকে  manipulate করা যায় ।   javascript এ অনেক ভাবে  html elements গুলোকে  access করা যায় । যেমন ঃ 

      //* finding HTML element by ID --
      
document.getElementById('element by id').innerHTML = " html element can be access by id ";

const doc = document.getElementById('element by ids')
doc.innerHTML = "element in html can be access by ids" ;
//  যদি elements  টি  খুঁজে  পাওয়া  যায় ,তাহলে method টি elements কে object আকারে return করবে । আর যদি elements টি খুঁজে পাওয়া না যায়  তাহলে null দেখাবে ।   



          //* finding HTML elements by Tag  name --
      
document.getElementsByTagName('p')[0].innerHTML = "javascript can manipulate html by tag name but first you have to input index number .  " ;

const tagName = document.getElementsByTagName("div")[4]
tagName.innerHTML = 'manupulating html by tag name'

// tag name দ্বারা html access করতে হলে tag name এর পর  index number দিতে হবে । যদি সেই tag html এ ১  টা  থাকুক বা ১০০ টা । 



           //* finding HTML elements by Class  name --
           
document.getElementsByClassName('elementsbyclass')[0].innerHTML = " accessing html by dom, tag name and class name are same . you need to inter index number to acces them .   "

const className =  document.getElementsByClassName('elementsbyclass')[1]
className.innerHTML =  "  tag name and class name are same for accessing html by dom, . you need to inter index number to acces them .   "

// class name দ্বারা  html access করতে হলে class name এর পর  index number দিতে হবে  ।  এটা ঠিক tag name এর মতই । class name ও tag name দুটোতেই index number দিতে হয় না হলে কাজ করবে না  । 



           //* finding HTML elements by  CSS selector --

document.querySelector('#cssCelectorByid').innerHTML = "by javascipt you not only can manipulate html  but also change CSS ";

const cssSelector = document.querySelector(".cssCelectorByclass")
cssSelector.innerHTML = 'changing css by his class name';


document.querySelectorAll('.cssSelectorallByclass')[1].innerHTML = " when you use query selector all you have to input index number too. its mandetory .  "

document.querySelectorAll('.cssSelectorallByclass')[0].innerHTML = " when you use query selector all you have to input index number too. its mandetory .  "

//  querySelector ও  querySelectorAll  দিয়ে css selector কে access করা যায় । querySelector দিয়ে css access করতে হলে  class কে dot (.) এবং  id কে  (#) দ্বারা select করতে হবে  ।  querySelector ব্যবহার করলে index number ব্যবহার করতে হয় না কিন্তু  querySelectorAll ব্যবহার করলে অবশ্যই index number ব্যবহার করতে হবে । 




                    //  HTML dom ::  changing HTML

      //* changing value of an attribute

const attributeChage = document.getElementById("image")
attributeChage.src = "/DOM/dom img javascript.png"
// কোন tag এর attribute এর  value change করতে হতে ওপরের পদ্ধতি অবলম্বন করতে হবে ।  এখানে html tag এর মধ্যে আগে থেকেই একটি ছবি দেওয়া ছিল । কিন্তু dom এর কারণে সেই ছবির location ও নাম পালটিয়ে দেওয়া হয়েছে । 

         //*  dynamic HTML content

const dynamicContent = document.getElementById("dynamicContent")
dynamicContent.innerHTML = Date()

const dynamicContent2 = document.getElementById("dynamicContent2")
dynamicContent2.innerHTML = `Your Number is : ${Math.random()}`;
// dynamic content বলতে বোঝাচ্ছে যে innerHTML এর মধ্যে dynamic value  ও দেওয়া যায় যেমন math(), date() ইত্যাদি । 

// document.write('hello world !')
// web page এ document load হয়ে যাওয়ার পর document.write ব্যবহার করা  যাবে না এতে document overwrite হয়ে যাবে ... 




                            // javascript form

     //* javascript form validation 
     
     function formValidation(){
      const form = document.forms['fullText']
      const value = form ["fullTexts"].value

      if(value === ""){
            alert("You Must Fill Your Form")
            return false
      }
}
//  এইখানে দেখানো হয়েছে user যদি form এর মধ্যে কোন value না দেয় না  বা  form ফাকা রেখে submit button এ click করে তাহলে সেটা হবে না । user কে অবশ্যই form এর মধ্যে data input দিতে হবে । 


    //* javascript form number validation 

    function formNumber(){
      let form = document.getElementById("numberInput").value
      let text;
      if(isNaN(form) || form <= 0 || form >= 100 ){
            text = "input number not valid"
      }
      else{
            text = "valid number"
      }
      document.getElementById("numpInput").innerHTML = text
    }
    // এখানে user form এর মধ্যে শুধু number input দিতে পারবে । যদি text input দায় তাহলে সেটা invalid দেখাবে ।  এছাড়াও নাম্বার শুধু ১ থেকে ১০০ পর্যন্ত দিতে পারবে । 



           //* automatic html form validation 
/* <div>
  <form action="text.php" method="post">
  Input Anything : <input type="text" required>
  <input type="submit" value="submit">
  </form>
</div>
*/
// ওপরের এই পদ্ধতি html document এ গিয়ে লিখতে হবে  ।  javascript form validation এ যেভাবে লেখা হয়েছে যে ফাকা form submit করা যাবে না । ঠিক  এইখানেও   javascript form validation এর মতো code লিখতে হবে না  শুধু html input এর মধ্যে  required attribut লিখলেই হবে ।  


        //* automatic html number form validation 
/* <div>
<form action="text.php" method="post">
  Input Number : <input type="number" max="100" min="10">
  <input type="submit" value="submit">
</form>
</div>
*/
//  ওপরের এই পদ্ধতি html document এ গিয়ে লিখতে হবে  ।  javascript form number validation  এ যেভাবে লেখা হয়েছে যে শুধু ১ থেকে ১০০ পর্যন্ত সংখ্যা দিতে পারবে form এর মধ্যে ।  ঠিক  এইখানেও   javascript form number validation এর মতো code লিখতে হবে না  শুধু html এর মধ্যে max ="" ও  min= "" attribute লিখলেই হবে  এবং input type number দিতে হবে ।। 




                               //  javascript  dom  CSS
// javascipt দিয়ে css কেও সহজে পরিবর্তন করা যায় । 

  function styles(){
      const sty = document.querySelector("#cssStyle")
      sty.style.color = 'blue' ;
      sty.style.textTransform = ' uppercase' ;
      sty.style.fontSize = '40px' ;
      sty.style.fontWeight = 900 ;
      sty.style.fontFamily = 'monospace' ;
  };
  // এখানে একই কাজ css দিয়েও করা যায় আবার  javascript  দিয়েও করা যায় ।   css এ যেখানে  hyphen (-) দিতে হয় javascript এ সেখানে hyphen (-) না দিয়ে  বড় হাতের text দিতে হয় । 



                                        // dom animations
                     
 function myAnimation(){
      const animie = document.getElementById("animati");
      const animie2 = document.getElementById("animati2");
      let position = 0
      let position2 = 0

      const interval = setInterval(yellowBox , 5)
      const interval2 = setInterval(blackBox , 5)

      function yellowBox(){
            if(position < 350){
                  position++;
                  animie.style.top = position + 'px'
                  animie.style.left = position + 'px'
            }
            else{
                  clearInterval(interval)
            }
      }

      function blackBox(){
            if(position2 < 350){
                  position2++;
                  animie2.style.top = position2 + 'px'
                  animie2.style.right = position2 + 'px'
            }
            else{
                  clearInterval(interval2)
            }
      }
 }
 


                                         // js dom event
            //* আলাদা করে event js ফাইল করা আছে । 



                                //  dom Event Listener

//*  html এর মধ্যে  javascript লিখতে না চাইলে eventListener ব্যবহার করা হয় ।  html এর  event গুলো চাইলে আলাদা ভাবে আলাদা জায়গায় থেকে change করা যায় html এর মধ্যে না লিখেও ।  সাধারনত event গুলো লিখের জন্য html এ গিয়ে onclick attribute এর মধ্যে  event এর কাজ টা বলে দিতে হয় । কিন্তু eventListener এ javascript এর মধ্যেই বলে দেওয়া যায় event টা কি কাজ করবে  । html এ গিয়ে event লিখলে সেখানে event এর নাম গুলোর আগে on( onclick, onmouseover,onmousedown) লিখতে হয় কিন্তু eventListener এর মধ্যে একই ভাবে লিখতে হয় তবে শুধু on(click,mouseover,mousedoen,mouseout) বাদ দিতে হয় ।  যেমন ঃ 

const evelis = document.getElementById("eventlis");
evelis.addEventListener('click', function(){
      document.write(Math.random())
}); // সরাসরি function define করা হয়েছে । 


let myFunction = () =>{
      confirm('Are You Grate Sajeb chakraborty')
};
const eveliss = document.getElementById("eventliss");
eveliss.addEventListener('click', myFunction) // অন্য জায়গায় function define করে  এখানে শুধু না দেওয়া হয়েছে । 

// এখানে বলে দেওয়া  হয়েছে eventlis নাম যে id নামধারি যে button আছে তার ওপর click করলে math.random  event call হবে ।    এখানে  addEventListener এর মধ্যেও function সরাসরি দেওয়া যায় আবার অন্য জায়গায় function define করে addEventListener এর মধ্যে শুধু সেই function এর নাম দিলেই হবে ।  


               //* add many event handler to the same Elements

const manyhandler = document.querySelector("#manyhandler");
manyhandler.addEventListener('mouseover',function(){
      console.log('mouse on the text')
      manyhandler.style.display = 'inline'
});
manyhandler.addEventListener('mouseout',function(){
      console.log('mouse remove from text')
      manyhandler.style.display = 'inline'
});



                    //*   Passing Parameter
                    
const revpara = (Parameter1) =>{
      document.write(Parameter1)
}
const passingpara = document.querySelector("#passpara");
passingpara.addEventListener("click", function(){
      revpara('this is passing parameter by addeventlistener')
})



                         //*   event Bubbling and event capturing 

//*  bubbling  হচ্ছে  কোন  tag এর মধ্যে আরেকটি tag থাকে ভেতরের tag আগে  fire হবে আর বাহিরের টা পরে fire হবে ।  capture হচ্ছে বাহিরের tag টা আগে fire হবে আর ভেতরের টা পরে fire হবে ।  by default event সবসময় bubbling হয়ে থাকে ।  

const bubbcapdiv = document.getElementById("bubbling");
const bubbcaptu_p = document.getElementById("bubbling2");
bubbcapdiv.addEventListener('click',function(){
      console.log('this is div')
      bubbcapdiv.style.display = 'inline'
})
bubbcaptu_p.addEventListener('click',function(){
      console.log('this is paragraph')
      bubbcaptu_p.style.display = 'inline'
})

// এখানে দেখা যাচ্ছে  text এর ওপর hover করলে প্রথমে p tag  দেখাচ্ছে  তারপর div tag দেখাচ্ছে । কিন্তু আগে তো div আরপর p দেখানোর কথা ? এটা না দেখানোর কারন  eventListener default ভাবে bubbling event fire করে ।  যদি প্রথমে div তারপর  p দেখাতে চাওয়া হয় তাহলে  capture event ব্যবহার করতে হবে । 

const capture = document.getElementById("capture");
const capture2 = document.getElementById("capture2");
capture.addEventListener('click',function(){
      console.log('this is div')
      capture.style.display = 'inline'
}, true)
capture2.addEventListener('click',function(){
      console.log('this is paragraph')
      capture2.style.display = 'inline'
}, true)

// capture event ব্যবহার করলে eventListener এর মধ্যে ৩ টা  parameter দিতে হয় ।  প্রথম টা  anyMouse event তারপর function তারপর true keyword . bubbling event default ভাবে false return করে আর capture event true return  করে ।  bubbling event default ভাবে false return করে তাই সেটা আর লিখতে হয় না কিন্তু capture event default ভাবে true return করে না তাই true তৃতীয় parameter হিসেবে দিতে হয় ।  capture event এর ক্ষেত্রে তৃতীয় parameter হিসেবে true  দিলে  তখন আগে  div দিবে তারপর p tag  দিবে ।  


              //*  Remove Event listener

document.getElementById("myDiv").addEventListener('mousemove',myFunctions);

function myFunctions(){
      document.getElementById("pdemo").innerHTML = Math.random();
}
function removeHandler(){
      document.getElementById("myDiv").removeEventListener('mousemove',myFunctions);
      
}




                                                           //   DOM  Navigation
//* node relation ব্যবহার করার উদ্দেশ্য হল html পেজ এর মধ্যে  যদি nested tag থাকে অর্থাৎ একটি  tag এর মধ্যে আরেকটি tag সেইই তাগ এর মধ্যে আরও ১০ টি tag এই ভাবে হলে  সবগুলো tag এর মধ্যে id দেওয়া কঠিন এবং id গুলোকে access করাও  কঠিন । তাই  node relation ব্যবহার করে  child,parent, ইত্যাদির মাধ্যমে tag গুলোকে access করা সহজ এবং তাদের value দেখাও সহজ ।   node এর value access করার উপায় হল ঃ 
/*
parentNode
childNodes[node index number]
firstChild
lastChild
nextSibling
previousSibling
*/

const parahedi = document.getElementById("parahed");
console.log(parahedi.innerHTML);
console.log(parahedi.firstChild.nodeValue);
console.log(parahedi.childNodes[0].nodeValue);


const p3ph1 = document.getElementById('pagh').innerHTML = document.getElementById('hed3').innerHTML;
const p3ph2 = document.getElementById('pagh').innerHTML = document.getElementById('hed3').firstChild.nodeValue;
const p3ph3 = document.getElementById('pagh').innerHTML = document.getElementById('hed3').childNodes[0].nodeValue;

console.log(p3ph1);
console.log(p3ph2);
console.log(p3ph3);

const new1 = document.getElementById("network")
console.log(new1.lastChild.nodeValue);

const new2 = document.getElementById("heading2")
console.log(new2.nextSibling.nodeValue);
const new3 = document.getElementById("heading2")
console.log(new3.parentNode.nodeValue);
//* বেশিরভাগ node কাজেই করে না । কিভাবে কাজ করে টাও জানি না । 




                                                // DOM Nodes
//* dom nodes এর মাধ্যমে html এ নতুন element তৈরি করতে পারি, element এর মধ্যে value add করতে পারি , element এর position পরিবর্তন করতে পারি  এবং কোন element delet করতে পারি  এবং element replace করতে পারি ।। 


                  // Creating New HTML Elements
const elecreat = document.createElement('button'); // createElement এর মাধ্যমে নতুন tag তৈরি করতে হবে । 
const enterText = document.createTextNode('Cick Here'); // createTextNode এর মাধ্যমে  tag এর value দিতে হবে । 
elecreat.appendChild(enterText); // appendChild এর মাধ্যমে  createElement এর মধ্যে createTextNode function pass করতে হবে । 
console.log(elecreat) // tag এর নাম print করলে  দেখা যাবে । 

const addElement = document.getElementById("divnode");
addElement.appendChild(elecreat); // নতুন যে tag তৈরি করেছি সেটা কোন একটি element এর মধ্যে  add করা হয়েছে । 

const p1 = document.getElementById("p1")
addElement.insertBefore(elecreat,p1)// নতুন যে element তৈরি করা হয়েছে  সেটা কোথাই কত  নাম্বার position বলে টা বলে দেওয়া হয়েছে । 

// এখানে  html এর মধ্যে নতুন একটি element 'button' তৈরি করা হয়েছে ।  এবং button এর মধ্যে value দেওয়া হয়েছে click me .  তারপর button এর মধ্যে value টি যোগ করা হয়েছে । তারপর button টি  অন্য একটি div এর মধ্যে যোগ করা হয়েছে ।  তারপর  নতুন তৈরি করা html element টিকে বলে দেওয়া হয়েছে element টি div এর কোথাই বসবে প্রথমে না শেষে না মধ্যে।। <button>click me</button> এই  কাজটি  html এর মাধ্যমে না করে javascript এর মাধ্যমে করা হয়েছে ।  এখানে createElement এর মাধ্যমে html যে tag তৈরি করতে  চাচ্ছি টা বলতে হবে ।  createTextNode এর দ্বারা  createElement এর মাধ্যমে নতুন যে html element তৈরি  করা  হয়েছে তার মধ্যে value দেওয়া হয়েছে ।  appendChild এর dot function  এর বা বাম  দিকে  বলে দিতে হবে createElement এর মাধ্যমে  তৈরি করা নতুন html element এর নাম এবং  appendChild এর parameter এর মধ্যে দিতে হবে  createTextNode এর মাধ্যমে যে  value দেওয়া হয়েছে সেটা ।  আবার  appendChild এর মাধ্যমে  নতুন তৈরি করা element টি অন্য কোন element এর দিয়ে দেওয়া যায় ।  insertBefore এর মাধ্যমে বলে দেওয়া যায় নতুন তৈরি করা element টি  অন্য কোন element এর মধ্যে কোথাই বসাব সেটা প্রথমে বা শেষে বা মধ্যে বসানো যেতে পারে । insertBefore এর parameter এর  প্রথমে দিতে হবে  কোন element টা অন্য element এর মধ্যে বসাব এবং শেষ parameter  এ বলে দিতে হবে  আমি যে element টা বসাবো তে অন্য element   এর কোথাই বসবে প্রথমে না মধ্যে না শেষে ।।



                      // Removing existing HTML  Elements

const h3 = document.querySelector("#h3")
h3.remove()


const h5parents = document.querySelector("#divnode")
const h5 = document.querySelector("#h5")
h5parents.removeChild(h5)

//  remove() ও  removeChild() এর কাজ একই । কিন্তু  remove সব পুরাতন browse এ support করে না  কিন্তু  removeChild সব browser এ  support করে . remove() ব্যবহার করতে চাইলে  প্রথমে  element টা ধরতে হবে তারপর remove() keyword ব্যবহার করলেই হবে ।  removeChild() ব্যবহার করতে হলে  প্রথমে child এর  parent কে ধরতে হবে । তারপর chold কে ধরতে হবে । তারপর removeChild() keyword ব্যবহার করতে হবে । div 'divnode ' এর দুটো element remove করা হয়েছে । 


             //  replacing HTML Element 

const h1 = document.createElement("h1");
const h1text = document.createTextNode('This is Heading 1');
h1.appendChild(h1text)

const h1parenet = document.getElementById("divnode")
const h2rep = document.getElementById("h2")
h1parenet.replaceChild(h1,h2)

// html এ h2 element ছিল । কিন্তু সেটা replacechild() করে h1 করে দেওয়া হয়েছে । 