
// যে variable কোন function এর বাহিরে থাকে function এর মধ্যে থাকে না সেটাকে global variable বলা হয় । আর যে variable কোন function এর মধ্যে থাকে function এর মধ্যে থাকে না সেটাকে Local variable বলা হয়। যেমন ঃ 
/* 
 let cd = 15 ;       Global variable

 
 function fullName(){
   const hllo = "not there";       local variable
   document.write(hllo);
 }
 fullName();

*/


let nam = "Harry Potter"+" Sajeb Chakraborty" ;

function name (){
  document.write(nam + "<br>");
}
name();
document.write(nam);

// এখানে nam variable টা হল global variable .  যা function এর মধ্যে বা function এর বাহিরেও ব্যবহার করা হয়।