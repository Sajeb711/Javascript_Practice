// video-- learn with sumit(48)

/* 
আমরা যে variable declare করি এবং define করি , সেই variable কে কোথায় বা কতটুকু থেকে access করা যায় বা যাবে সেটা scope concept এর মাধ্যমে জানা যায় ।  
javascript এ ৩ ধরণের Scope আছে । যেমন ঃ
   1.Block scope;
  
  2.Function Scope;
  
  3. Global scope;
*/

                        // Block Scope

// let এবং const keyword দ্বারা block scope provide করা যায়। দ্বিতীয় বন্ধনির মধ্যে কোন variable declare করলে সেই variable কে বন্ধনির বাহিরে থেকে access করা যায় না । 

{
  let f = 'let keyword only can used in this block scope <br>' ;
  const h = 'const keyword only can used in this block scope <br>' ;
  document.write(f,h);
}
// এখানে দ্বিতীয় বন্ধনি কে block scope বলা হয় । এই দ্বিতীয় বন্ধনির মধ্যে কোন কিছু লিখলে সেটা বন্ধনির বাহিরে থেকে access করা যায় না । বন্ধনির মধ্যেই সেটাকে access করা যাবে বা যায় । যেমন - বন্ধনির মধ্যে document.write দিলে লেখা হুল print করতেছে। কিন্তু বন্ধনির বাহিরে document.write দিলে সেটা print করতেছে না । এটাই হল block scope . 

{
  var pen = 'Pen is a strong weapon in the world <br> <br>' ;
}
document.write(pen);

// var keyword দিয়ে variable declare করলে সেটা block scope হবে না । কারন var keyword দিয়ে সেই variable declare করলে সেটা block scope এর বাহিরে থেকেও access করা যায় । তাই var keyword block scope এ ব্যবহার করা হয় না । যেমন - ওপরের টা উধাহরন । 


               // Local Scope / Function Scope : 

  function myFunction(){
    var u   = 'this is function / local scope with var keyword <br>' ;
    let v   = 'this is function / local scope with let keyword <br>' ;
    const x = 'this is function / local scope with const keyword <br>' ;
    document.write(u,v,x + '<br>');
  } 
  myFunction() ;

  // function scope ও block অনেকটা প্রায় একই। function scope এর মধ্যেও কোন variable declare করলে সেটা function scope এর বাহিরে থেকে access করা যায় না । তবে block scope এর মধ্যে let ও const keyword ব্যবহার করা যায় ,var keyword ব্যবহার করা যায় না । কিন্তু function scope এর মধ্যে var let const সব keyword ব্যবহার করা যায় এবং সেগুলো বাহিতে থেকে access করা যায় না । অর্থাৎ function scope এর মধ্যে যে variable declare করা হয় সেগুলো শুধু function scope এর মধ্যেই তাকে function scope এর বাইরে হয় ।  



                    // Global Scope :

let global = 'This is Global Scope <br>';
const gloScope = 'this is global scope in const keyword <br>';
{
  document.write(global);
}
function man(){
  document.write(gloScope);
}
man();

// যখন কোন বন্ধনির বাহিরে এবং function এর বাহিরে কোন variable declare করা হয় এবং সেই variable কে সকল জায়গা থেকে access করা যায় তখন তাকে Global Scope বলে। যেমন ঃ global ও  gloScope নামে দুইটা variable আছে । সেই variable গুলোকে function এর মধ্যেও access করা যায় আবার কোন সাধারন block এর মধ্যেও access করা যায় । এই দুইটা variable হল Global Scope .  
