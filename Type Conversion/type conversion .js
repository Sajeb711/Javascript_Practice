// video -- learn with sumit -- (44);;;

/* type conversion হচ্ছে এক datatype কে অন্য datatype এ convert করা । যেমন- string to number , number to boolean etc. 
দুই ভাবে type convert করা যায় । 
১. নিজে থেকে করা । 
২. javascript নিজে নিজে automatically করবে। 
*/

                        `Converting String to Number`

/*  string কে number এ convert করার জন্য কয়েকটি method আছে । 
1. Number();
2. parseint();
3. parseflot();
*/
document.write(Number('52.32') + `&nbsp&nbsp&nbsp&nbsp`);
document.write(Number('') + `&nbsp&nbsp&nbsp&nbsp`); // empty string return 0 ;
document.write(Number('  ') + `&nbsp&nbsp&nbsp&nbsp`); // empty string with space also return 0 ;
document.write(Number("45  65") + `&nbsp&nbsp&nbsp&nbsp`); // string with space return Nan ;
document.write(parseInt("85.32") + `&nbsp&nbsp&nbsp&nbsp`); 
document.write(parseFloat("020.195") + `&nbsp&nbsp&nbsp&nbsp`); 

let hey = '41'; // hey is string
let x = +hey;  // x is number
document.write(typeof x + '&nbsp&nbsp&nbsp&nbsp');


let str = 'sajeb'; // str is string
let type = +str;  // type is number
document.write(typeof type + '<br>');

// string to number বিষয়ে ভালভাবে জানতে হলে Number এর chapter দেখতে হবে। 


                    `Converting Number to String`


document.write(typeof Number('sajeb') +'&nbsp;&nbsp;&nbsp;');
document.write(typeof Number(41) +'&nbsp;&nbsp;&nbsp;');
document.write(typeof Number(500+55+10*5) +'<br>');

let string_1 = 451;
string_2 = toString(string_1)
document.write(typeof string_2 + '<br>');

// Number to string বিষয়ে ভালভাবে জানতে হলে Number এর chapter দেখতে হবে। 



                           `Converting Dates to Number`
                           
let date = new Date();
document.write(Number(date) + '<br>'); 
document.write(date.getTime() + '<br>');
// Number(date) ও date.gettime() একই উত্তর দেখাবে এবং দুটোই একই। 


                        `Converting Dates to String`

let date_string = new Date();
document.write(String(date_string) + '<br>')
document.write(date_string.toString() + '<br>')
// string(date_string) ও tostring(date_string) একই উত্তর দেখাবে এবং দুটোই একই। 


                    // Converting Boolean to Number

document.write(Number(true) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
document.write(Number(false) + '<br>');

document.write(String(true) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
document.write(String(false) + '<br>');