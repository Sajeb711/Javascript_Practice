// video -- learn with sumit (11)

/*
কোন variable এর value কি প্রকার হবে সেটাকে data type বলা হয় । javascript এ অনেক ধরণের data type আছে । যেমন ঃ 

1. String
2. Number 
3. Array
4. Object
5.Boolean
6. Undefined
7. Null

*/


             // String --
// দুইটি বা একটি quote এর মধ্যে কোন variable এর যে value গুলো লেখা হয় তাকে string বলে। 

let example_1 = 'Single quote string in javascript';
document.write(example_1 + '<br>');  // sigle quote string

let example_2 = "doble quote string in javascript";
document.write(example_2 + '<br>');  // double quote string

let example_3 = 'use double "quote" into single quote, use single qoute ';
document.write(example_3 + '<br>');

let example_4 = "use single 'quote' into single quote, use double quote";
document.write(example_4 + '<br>');

let example_5 = "it's alright... You can't go ";
document.write(example_5 + '<br>');
// javascript এ single quote এর মধ্যে single quote ব্যবহার করা যাবে না double quote ব্যবহার করতে হবে। doble quote এর মধ্যে double quote ব্যবহার করা যাবে না single quote ব্যবহার করতে হবে। যেমন উধাহরন emample_3 , Emample_4.



                               // Numbers --
// number decimals সহ ও ছাড়া লেখা যায়। 

const example_6 = 9178;   // with decimals
const example_7 = 31.9547;  //without decimals. 
document.write(example_6 +"&nbsp;&nbsp;&nbsp;" + example_7 +'<br>');

const example_8 = 321e5;
const example_9 = 123e-5; // extra large or small number can use .
document.write(example_8 +"&nbsp;&nbsp;&nbsp;" + example_9 +'<br>');




                              // Booleans --
/* javascript booleans date type এ শুধুমাত্র দুইটি value রয়েছে । 
1. true
2.false
*/

let example_10 = 5511;
let example_11 = 1155;
document.write(example_10 == example_11 );

let example_12 = 81.80;
let example_13 = 81.80;
let total = example_12 == example_13
document.write('<br>' + total  + '<br>');



                          // Arrays --
// javascript array তৃতীয় বন্ধনি [] দিয়ে লেখা হয়। array এর element কমা , দিয়ে আলাদা করা হয় । array এর element গুলো index আকারে গণনা করা হয়। 

const mobile_name = ['vivo','oppo','iphone','samsung','oneplus','LG'];
document.write(mobile_name + '<br>'); 
document.write(mobile_name[3] + '<br>'); 
document.write(mobile_name[5] + '<br>'); // array can aceess by index
document.write(mobile_name[1] + '<br>'); 


const fruites = ['mango', 'banana','orange', 'watermelon','pineapple'];
fruites[4]= 'Berry';
fruites[3]= 'lotcon';
fruites[2]= 'Litchi'; // array element can change by array indexs 
document.write(fruites + '<br>');





                                   // Object --
// javascript এ object লিখা হয় দ্বিতীয় বন্ধনি {} দ্বারা । object দ্বারা বৈশিষ্ট্য প্রকাশ করা হয়। 

const person = {
  first_name : 'Sajeb',
  last_name : 'chakraborty',
  age : 23,
  home: 'Rajshshi',
  mobile : 1995046112,

}
console.log(person);
document.write(person.mobile);




                     // Typeof
// কোন variable এর data type কি সেটা জানার জন্য typeof keyword ব্যবহার করা হয়।
console.log(typeof(person)); 
console.log(typeof(mobile_name)); 
console.log(typeof(total)); 
console.log(typeof(example_7)); 
console.log(typeof(example_5)); 




                         // Undefined --
// undefined অর্থ কোন variable কে define করা হয় নি এমন । 

let intrenet;
console.log(typeof(intrenet));   


