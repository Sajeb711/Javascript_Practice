// Video--  Learn With Sumit (15, 16, 17, 18)   Anisul Islam (7, 8)
/*
 Escape Character :
 
 আমরা জানি একটি string double quote দিয়ে শুরু হলে double quote দিতে শেষ করতে হয়  অথবা  single quote দিয়ে শুরু হলে single quote দিতে শেষ করতে হয় । double quote দিয়ে string শুরু করলে string আর ভেতরে আবার double quote ব্যবহার করলে code এর মধ্যে error দেখাবে । double quote দিয়ে string শুরু করে string আর ভেতরে আবার double quote বা special quote  ব্যবহার  করার জন্য Escape Character ব্যবহার করা হয় ।  যেমন ঃ  */

 let esCha = "Economic is \"very\" hard Subject .";
 document.write(esCha + '<br>');

let hAesa = `Bangladesh Is a \\development\\ Counry . `;
document.write(hAesa +'<br>');
                             

/* 

  Replacing String Content :-

কোন string এর মধ্যে নির্দিষ্ট কোন text পাল্টানোর জন্য replace ব্যবহার করা হয় ।  কোন একটা string এর মধ্যে নির্দিষ্ট কোন জায়গায় যে text আছে সেই text টা পাল্টে অন্য একটা text লিখতে চাইলে replace method ব্যবহার করা হয় । যেমন ঃ-   */


let girlFriend = 'I Love Anjelina Julie .';
let Ariana = girlFriend.replace('Anjelina Julie' ,'Ariana Grande');
document.write(Ariana + '<br>');
 
let oldCollege = 'I studied In Atrai Agrani Degree College .'
let newCollege = oldCollege.replace ('Atrai Agrani Degree College', 'Rajshshi Government City College ') ;
 document.write(newCollege + '<br>')
 
/*
  Length :-

 length দ্বারা variable এর মধ্যে কতগুলো সংখ্যা আছে তা দেখা যায়।
 যে variable এর length বের করা হবে সেই string এর মধ্যে space না দেওয়াই ভাল কারন space দিলে সেই space কেউ গণনা করা হয় । 
 */

var text = "functions"
document.write(text.length + '<br>');


var text1 =" length ";
var text2 = " of this text is ";
var texts = text1 + text2 ;
var text3 = "bangladesh";
document.write(texts + text3.length + '<br>');

 //এখানে text variable এর মধ্যে মোট ৯ টা সংখ্যা আছে । 


 

/*
var name = prompt(" Enter your name : ") ;
document.write(name.length);

var address = prompt(" Enter your address: ") ;
document.write(" the number of character " + address.length);
*/

//user এর কাছে থেকে কোন তথ্য নেওয়ার জন্য prompt ব্যবহার করা হয়। 

//এখানে user তার নাম বলবে এবং নাম এর lenght কত তা বলে দিবে। 


/*
    CharAt : 

 charAt দ্বারা অত তম সংখ্যায় কি আছে তা প্রকাশ করে। charAt গণনা শুরু করে প্রথম সংখ্যা থেকে। অর্থাৎ প্রথম অক্ষর হল ০ তারপরের অক্ষর হল ১ তারপরের অক্ষর হল ২ ইত্যাদি।  যে variable এর charAt বের করা হবে সেই string এর মধ্যে space না দেওয়াই  কারন space দিলে সেই space কেউ গণনা করা হয় । যেমন : এখানে s হল 0 number সংখ্যা এবং a হল  1 number সংখ্যা ২ number নয়।
*/
var mobile = "sajeb";
document.write(mobile.charAt(2) + '&nbsp; &nbsp;');

var mobile = "chakraborty";
document.write(mobile.charAt(5) + '<br>');


//charCodeAt :
// কোন string এর মধ্যের নির্দিষ্ট কোন character এর  unicode number দেখতে চাইলে Charcodeat() method ব্যবহার করা হয় । Charcodeat() method এ character গণনা শুরু হয় 0 number index থেকে ।  
let uniCod = 'Hello World !';
let unicod = uniCod.charCodeAt(8);
document.write(unicod + '&nbsp; &nbsp;');


const Let = 'Sajeb';
document.write(Let.charCodeAt(1));



// toUppercase :-

//toUpperCase দ্বারা লেখা সব বড় হাতের করা যায় বা হয়ে যায়। 
var up = "<br>man women ";
document.write(up.toUpperCase(up));


var up1 = "<br> toothless";
up1 = up1.toUpperCase();
document.write(up1.toUpperCase(up1));




//toLowerCase :-
// toLowerCase দ্বারা লেখা সব ছোট হাতের করা যায় বা হয়ে যায়। 

var up = "<br>man women ";
document.write(up.toLowerCase(up));


var up2 = "<br> toothless";
up1 = up2.toLowerCase();
document.write(up2.toLowerCase(up2) + '<br>');




var Slice = "Chakraborty ";
document.write(Slice.slice(2,6));


var slIce = " pornography";
var Slice =  slIce.slice(0,6)
document.write(Slice + '<Br>');

let start ='Apple ,Banana, Kiwi';
document.write(start.slice(7,13) + "<br>")

let starts ='Apple , Banana , Kiwi';
document.write(starts.slice(-13, -7) + "<br>")

//slice দ্বারা অক্ষর কেটে নেওয়া যায়। slice এ দুইটি মান দিতে হয়। একটি যেখান থেকে শুরু হবে আরেকটি যেখানে শেষ হবে।  slice গণনা শুরু করে প্রথম সংখ্যা থেকে। অর্থাৎ প্রথম অক্ষর হল ০ তারপরের অক্ষর হল ১ তারপরের অক্ষর হল ২ ইত্যাদি।  যেমন এখানে p হল 0 number সংখ্যা এবং o হল  1 number সংখ্যা ২ number নয়।   যে variable এর slice বের করা হবে সেই string এর মধ্যে space না দেওয়াই ভাল , কারন space দিলে slice সেই space কেউ গণনা করে । 


/*  Concat Method :- 


একটি string এর সাথে আরেকটি string যোগ করার জন্য concat method ব্যবহার করা হয়। concat দুই ভাবে লেখা যায় : 
1.concat keyword এর মাধ্যমে 
2.plus operator এর মাধ্যমে । 

*/
var con ="  Vikings Are very ";
var cat = "Brutal <br>";
document.write(con.concat(cat));

var con =" Thomas shealvy was ";
var cat = " famous Gangstar <br>";
var concat = con.concat(cat)
document.write(concat);
// concat keyword দ্বারা একটি string এর সাথে আরেকটি string concatinate বা যুক্ত করা যায়। 


// যোগ চিহ্ন দ্বারা এক বা একাধিক string যুক্ত করা হয়েছে। 

document.write('(Sajeb' + ' Chakraborty)<br>' );
document.write(" ( my" + " name"+" is" + " Sajeb" + " Chakraborty )<br>");



var firstName = " john"
var middleName = ' das'
var lastName = " doe <br>"
var fullname =firstName + middleName+ lastName  ;
document.write(fullname );


var work1 ="web developer <br>";
var work ="web developer";
document.write("i am a" + work1);
document.write("i am a " + work + " and also a student<br>");



var loerm = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta, asperiores necessitatibus libero perspiciatis. " ;

document.write(loerm + work + fullname);


// String Trim :

let tRi = '    Hello World !   ';
let Tri = tRi.trim()
document.write(Tri + '<br>')


 /*        
 
            string Search :


 javascript এ string এর মধ্যে কোন কিছু search বিশেষ ধরণের কিছু Method আছে । যেমন :

 1.String.indexOf();
 2.String.lastIndexOf();
 3.String.startsWith();
 4.String.endsWith();
 
 */
//  String.indexOf(): indexof রে index প্রথম থেকে গণনা শুরু হয়। এখানে ০ দ্বারা কোন কিছু নেই টা কিন্তু বোঝায় না । এখানে ০ হলে বুঝতে হবে এখানে প্রথন index কে বুঝানো হয়েছে । যদি document print করার পর মান -1 হয় তবে বুঝতে হবে string এর মধ্যে সেই sentence টি নেই ।   

let lap = 'The Of my laptop is hp';
document.write(lap.indexOf('hp') + '&nbsp; &nbsp;');

const bank = 'the name of central bank of bangladesh is "Banglasedh Bank" ';
document.write(bank.indexOf('bangladsh') + '&nbsp;&nbsp;');



// String.lastIndexOf() : lastindexof দ্বারা  sentent টি সবার শেষের কত number index এ আছে তা বোঝা যায়। এখানে একই শব্দ অনেক বার থাকতে পারে তবে lastindexof শুধু সেই শব্দ সবার শেষের তা দেখাবে । 

let water = 'give me a glass of water of';
document.write(water.lastIndexOf('of') +'&nbsp;&nbsp;') ;

let sjc = 'who are you? and you know who am i';
document.write(sjc.lastIndexOf('who')+'<br>');

// এখানে who দুই বার আছে। এখন সবার শেষে যে who আছে তা কোন number index এ আছে তা জানার জন্য lastindexof ব্যবহার করা হয় ।  


// string.Match() : কোন string এর মধ্যে অল্প কিছু সংখ্যক অক্ষর খোঁজার জন্য match() ব্যবহার করা হয় । 
let mah = 'Superman is by man of steel';
document.write(mah.match('man') + '&nbsp;&nbsp;');

let matCh = 'Spain is a rainy country in plain';
document.write(matCh.match('ain') + '<br>');


// string.includes() : একটি string আরেকটি string এর মধ্যে আছে কি না তা দেখার জন্য includes() ব্যবহার করা হয়। আমার দেওয়া value যদি string এর মধ্যে থাকে তাহলে result দেখাবে true । আর যদি না থাকে তাহলে result দেখাবে false ।  যেমন ঃ 

let ince = 'hello Sajeb, welcome to your house' ;
document.write(ince.includes('Sajeb') + '&nbsp;&nbsp;');

let inces = 'hello Sajeb, welcome to your house' ;
document.write(inces.includes('mouse') + '<br>');


//string.startwith() : কি দিয়ে string শুরু হয়েছে তা দেখার জন্য strthwith method ব্যবহার করা হয়। 

let strtwith = 'hello , how are you ?';
document.write(strtwith.startsWith('how') + '&nbsp;&nbsp;');


let strtth = 'hello , how are you ?';
document.write(strtth.startsWith('hello') + '<br>');


// string.endswith()  : string এর শেষের কি বাক্য আছে তা জানার জন্য endswith method ব্যবহার করা হয়।  

let ends = 'Sajeb Chakraborty';
document.write(ends.endsWith('Chakraborty') + '&nbsp;&nbsp;');

let endsWth = 'Sajeb Chakraborty';
document.write(endsWth.endsWith('chakraborty') + '<br>');