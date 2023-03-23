// if statement দুইটা condition থাকে। একটি condition True আরেকটি condition false . যদি condition true হয় তাহলে document print হবে আর যদি  condition false হয় তাহলে document print হবে না ।  


// if statement ব্যবহার করার জন্য condition তৈরি করার জন্য relational and logical operator গুলো ব্যবহার করা হয় । এবং statement তৈরি করার জন্য সাধারণত নাম্বার বেশি ব্যবহার করা হয় । যেমন ঃ-


let sa = 45;
let je = 78;
if (sa >= 10){
document.write('My Name Is Sajeb Chakraborty' + '<br>');
}

var ko = 32.45;
var mo = 98.78;
if (ko !== mo){
  document.write('print' + '<br>' )
}

const man = 1579;
const boy = 5644;
if (man === boy){
  document.write('same' + "<br>")
  // এই statement print হবে না কারণ এখানে variable গুলোর  data type সমান হলেও এদের value সমান নয় । 
}


const leTs = 57;
const itSa = '57';
if(leTs >! itSa){
document.write('IELTS' + "<br>")
}


let an = 48.658413487;
let ad = 48.658414387;
if (an >= 48 && ad >= an){
document.write("And iS right" + "<br>")
}
// এখানে  and operator এর মাধ্যমে condition তৈরি করা হয়েছে।  এখানে দুইটি condition true তাই document টি print হয়েছে । and operator এ সবগুলো condition ই true হতে হয়। 


const age = 35;
const height = 6.9;
if (age >= height || height >= age ){
document.write("he is more older and taller" + "<br>") 
}

// এখানে  or operator এর মাধ্যমে condition তৈরি করা হয়েছে। or operator এ একটি conditon true হলেই হয় । একটি condition true আর বাদবাকি condition false হলেও document print হয় । 

var kplMan = 984.554;
var vaR = 2;
 if (!kplMan <= 1145){
  console.log("true but false" + "<br>")
}