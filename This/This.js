//  video ..........    learn with sumit (51) ,   stack learner (108)
 'use strict';

 //  object এর ক্ষেত্রে this ব্যবহার করা হয় ।  যেকোনো object এর নিজস্ব Properties কে বোঝানোর জন্য This Keyword ব্যবহার করা হয় ।  যদি normal একটা function এ this ব্যবহার করা হয় তাহলে সেটা window object কে  refer করবে আর কোন Method এর মধ্যে this ব্যবহার করা হলে  সে ওই object টাকে refer বা mention করবে ।  strict mode এ this কখনো কখনো undefine দেখায় ।  তাই this ব্যাবহারের জন্য strict mode ব্যবহার করা যাবে না ।  


const Person = {
  F_Name : 'Sajeb',
  L_Name : 'Chakraborty',
  Age : 23,
  Laptop :' HP Probook',
  Address : 'Rajshahi , Bangladesh',

 NameAdddress : function(){
  console.log('He is ' +  Person.F_Name + " "+this.L_Name);
  console.log('He Lived In ' +  this.Address);
  console.log('He is ' + this.Age + ' Years Old & he Used '+this.Laptop+' laptop');
},

}
Person.NameAdddress() ;
// এখানে একই object এর মধ্যে  তার  নিজস্ব properties গুলো ব্যবহার করা হয়েছে ।  নিজস্ব object এর properties গুলো ব্যবহার করার জন্য This ব্যবহার করা  হয়।  this এর পরিবর্তে object এর নাম দিলেও একই কাজ করবে ।


const favourite ={
  another : function other() {
    Person.NameAdddress
  }
}
console.log(favourite.other())