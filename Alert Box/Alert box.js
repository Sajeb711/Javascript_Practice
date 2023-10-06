
// alert box  এর মাধ্যমে মূলত কোন message display page এ দেখানো হয় । কোন জরুরী তথ্য দেখানোর জন্য Alert box ব্যবহার করা হয়। এছাড়াও alert box এর মধ্যে আলাদা আলাদা value ও দেখানো যায়। যেমন ঃ 

// সব browser এ alert box একইভাবে দেখা যায় না। প্রতিতা browser এ alert box আলাদা আলাদা ভাবে দেখায়। 


// alert(45);
// alert("hello Sajeb Chakraborty");

// alert box এর মধ্যে কোন condition ও দেখানে যায় । যেমন ঃ 
/*
let n = 405;
let m = 54;
if(n > m){
  alert("n is greater than m")
}
else{
  alert("m is greater than n")
}
*/

const b = prompt('Input Your 1st Number Here ---');
const c = prompt('Input Your 2nd Number Here --- ');
if(b >= c){
alert("B is Greater");
}
else if(c >= b) {
  alert('C is Greater');
}
else{
  alert(" All is Equal");
}