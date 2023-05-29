//  video ---   learn with sumit (08) 
/*
 
কোন variable কে নির্দিষ্ট কোন keyword দ্বারা ঘোষণা করাই হচ্ছে declare করা। আর কোন variable এর value থাকার পরেও সেটাকে পুনরাই নতুন value দেওয়াকে বা সমান চিহ্ন দিয়ে যা লেখা হয় সেটাকে reassign বলা হয়। 

 */

var word = ['a','b','c','d','e','f'];
let sound = ['g','h','i','j','k','l','s'];  // Declare
const sentence = ['m','n','o','p','q','r'];

// এখানে var, let , const হল variable declare করার জন্য keyword । আর এখানে word, sound, sentence হল variable declare করা value। অর্থাৎ var , let , const keyword এর মাধ্যমে যা লিখা হয় সেটাকে variable declare করা বলে। 


// Reassign
var name = 'Sakib';
name = 'Sajeb';
document.write(name + '<br>') ;  //reassign

let pc = 'Apple';
pc = 'ASUS';
document.write(pc + '<br>') ;

// const fruits = 'Banana';
// fruits = 'Mango';
// document.write(fruits + '<br>') ;

// এখানে প্রথমে name , pc , fruits এর value দেওয়া হয়ছে। কিন্তু name, pc, fruits কে আবাব নুতুন value দেওয়া হয়েছে জেতাকে reassign বলা হাওয় । অর্থাৎ কোন variable এর value থাকার পরেও সেটাকে নতুন করে value দেওয়াকে reassign বলা হয়। 



// বিঃ দ্রঃ var দ্বারা পুনরাই variable declare করা যায় আবার পুনরাই reassign করা যায়। let দ্বারা পুনরাই variable কে declare করা যায় না কিন্তু সেটাকে পুনরাই reassign করা যায়। const দ্বারা variable কে পুনরাই declare ও  করা যায় না  আবার সেটাকে reassign ও করা যায় না। তাই ওপরের const এর উধাহরন error দেখাচ্ছে।  




