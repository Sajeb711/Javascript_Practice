// video -- learn with sumit (46) ----

/*
আমরা যখন কোন কিছু search করি তখন মূলত regular expresssion ব্যবহার করা হয়। মূলত দুইটি কারণে 
regexp ব্যবহার করা হয়। 
১. কোন লেখা খুঁজে বের করর জন্য
২. কোন লেখা replace করার জন্য। 
যেমন - কোন একটি লাইন এর মধ্যে bangladesh লেখা আছে। এখন bangladesh লেখাটা লাইন এর মধ্যে আছে কি না টা খোঁজার জন্য regexp ব্যবহার করা হয়।  
regexp একটা character ও হতে পারে আবার অনেক complicated pattern ও হতে পারে। 


     regexp Syntax --
     /pattern/modifiers;

  / sajeb / i ;
এখানে sajeb হল pattern যা আমরা খুঁজে বের করতে চাই। এই pattern single character ও হতে পারে আবার complex pattern ও হতে পারে । 
 আর i হল modifire যা case-insentive . অর্থাৎ sajeb যে লেখা খুঁজে বের করতে চাই সেটা বড় হাতের বা ছোট হাতের হলেও সেটা খুঁজে পাওয়া যাবে।  
*/

                        
                        
let text = 'My name is Sajeb Chakraborty';
let sacha = text.search('Sajeb');
document.write(sacha + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');  //using string search() with a string 

// এটা সাধারন পদ্ধতি । এখানে শুধুমাত্র search() method ব্যবহার করা হয়েছে। এখানে যা লেখা আছে তাই লেখতে হবে। এখানে case-intensive কাজ করবে না । এখানে লেখা খুঁজে না পেলে -1 দেখাবে।


let myna = 'My name Sajeb Chakraborty';
let is = myna.search( /chakraborty/i);
document.write(is + '<br>'); // using string search() with a regular expression




let visit = 'Visit facebook';
let enter = visit.replace('facebook','youtube');
document.write(enter + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'); // string replace() with a string


let face = 'Visit facebook';
let apple = visit.replace(/facebook/i,'Apple.com');
document.write(apple + '<br>'); //string replace() with a regular expression. here 'i' means case-intensive

let m_flag = `hi, how are
you? are you
fine? `
let newline = m_flag.search(/fine/mi)
document.write(newline + '<br>'); //string replace() with a regular expression. here 'm' means new line.

let g_flag = 'wWw.youtube.com,  wwW.facebook.com,  wWw.website.com' ;
let globalmatch = g_flag.replace(/WwW./gi, 'Visit ');
document.write(globalmatch + '<br>')  //string replace() with a regular expression. here 'g' means global match . 





                    // `Some example`

const fruite =` manog banana 
pineapple watermelon 
jackfruit dragon Berry`;
const frusec = fruite.search(/dragon/igm);
const frurep = fruite.replace(/pineapple/gmi,'potato');
document.write(frusec + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
document.write(frurep + '<br>'); // igm means case-intensive, global match, new line. 



           // regular expression pattern

let text_1 = " this is a mouse.";
let text_2 = text_1.search(/[a]/gi);
let text_3 = text_1.match(/[this]/gi);
let text_4 = text_1.replace(/mouse/gi,'keybord');
document.write(text_2 +' '+ text_3 +' '+text_4+ '<br>');


let text_5 = '0,1,2,3,4,5,6,7,8,9,';
let text_6 = text_5.match(/[0-9]/gi);
let text_7 = text_5.search(/[03]/gi);
let text_8 = text_5.replace(/[0-9]/gi,'000');
document.write(text_6+' '+text_7+' '+text_8 + '<br>');


let text_9 = 'red , green , blue , yellow , green , balck , red , red';
let text_10 = text_9.match(/red |green | yellow |black /gi);
let text_11 = text_9.replace(/ green| red| yellow |black /gi, 'pink');
document.write(text_10+'<br>' + text_11 + '<br>');


// দ্বিতীয় বন্ধনি [] কে range বলা হয় ।  এখানে কোন string এর মধ্যে কোন লেখা ও নাম্বার খুঁজে বের করার জন্য ওপরের ৩ টা expression ব্যবহার করা হয়েছে। 


        // Metacharacters

let text_12 = '45,74,21,345';
let text_13 = text_12.match(/\d/gim);
document.write(text_13 + '<br>'); // search for digit

let text_14 = 'this        is            it?';
let text_15 = text_14.match(/\s/g);
document.write(text_15 + '<br>'); // search fot whtite space

let text_16 = 'are you there ?';
let text_17 = text_16.match(/there are\b/g);
document.write(text_17 + '<br>');

let text_18 = 'hello world';
let text_19 = text_18.match(/\u0057/g);
document.write(text_19);