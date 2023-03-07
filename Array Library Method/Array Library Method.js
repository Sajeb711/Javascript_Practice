////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var named = [" Sajeb", " Sakib", " Rakib", " Makib", " Lakib"];
named.push(" latin", " matin", " Martin");
document.write(named + "</br>");

// push শেষে element যোগ করে।
////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var names = [" Sajeb", " Sakib", " Rakib", " Makib", " Lakib", "Mortal"];
names.pop();
names.pop();
document.write(names + "<br>");

// pop শেষের একটা element বাদ দেয় ।

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var saj = [" my", " name", ` is`, " Sajeb"];
document.write(saj + "<br>");

saj.shift();
document.write(saj + "<br>");

//pop এর কাজ হচ্ছে শেষের একটা element বাদ দেওয়া। এর shift এর কাজ হচ্ছে শুরুর একটা element বাদ দেওয়া। যেমন ঃ এখানে একবার shift ব্যাবহারের কারণে শুরুতে " my " বাদ দেওয়া হয়েছে। অর্থাৎ shift is opposite of POP .

saj.unshift("happy");
document.write(saj + "<br>");

// push এর কাজ হচ্ছে শেষের দিকে element যুক্ত করে। এর unshift এর কাজ হচ্ছে শুরুর দিকে element যুক্ত করে। যেমন: এখানে একবার unshift ব্যাবহারের কারণে " happy " element টা প্রথমে যুক্ত হয়েছে।  অর্থাৎ unshift is opposite of PUSH .

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var id = [" who ", " are", " you", " what", " are", " you", " doing"];

// splice এর মাধ্যমে element যোগ করা যায় আবার বাদ দেওয়া যায়।

// adding element using splice...
id.splice(3, 2, " ?", " hmm");
document.write(id + "<br>");

// এখানে index এর গণনা শুরু হয় ০ থেকে।
// splice  এ কোন element যোগ করার জন্য প্রথমে বলে দিতে হবে কোন জায়গা থেকে কোন element যোগ হবে যা যা element আমি যোগ করতে চাই তারপর যোগ করার পর কত গুলো বাদ দিব টা বলে দিতে হবে। যেমন ঃ আমি '?' এবং "hmm" যোগ করতে চাই 3 নাম্বার position এ ।  তারপর  '?' এবং "hmm" যোগ করার পর ২ টা element ("what" "are") বাদ দিতে চাই ।

// Removing element using splice...
var id = [" who ", " are", " you", " what", " are", " you", " doing"];
id.splice(0, 3);
document.write(id + "<br>");
// এখানে index এর গণনা শুরু হয় ০ থেকে।
// splice  এ কোন element বাদ দেওয়ার জন্য প্রথমে বলে দিতে হবে কোন জায়গা শুরু হবে এবং কোন জায়গা পর্যন্ত চলবে। যেমন ঃ এখানে আমি ০ (who থেহে শুরু) নাম্বার index থেকে ৩ (you পর্যন্ত) নাম্বার index পর্যন্ত বাদ দিয়েছি ।

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// slice এর কাজ হচ্ছে কোন একটা element কে কেটে নতুন একটা array তৈরি করে । 

var arr = [" How ", " are", " you", " what", " are", " you", " doing"];
var array = arr.slice(2)
document.write(array + "<br>")


//slice নতুন array তৈরি কিন্তু মূল  array এর পরিবর্তন করে না।  এখানে প্রথম ২ টা element ("how" "are")  আমি কেটে নেওয়া হয়েছে slice এর সাহায্যে । 

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

               // Alphabet Sort

// sort ব্যবহার করা হয় element গুলোকে a,b,c,d,e,f.... ইত্যাদি পর্যায়ক্রমে অথবা  z, y, x,w,v,u.... ইত্যাদি পর্যায়ক্রমে . 

var alphabet = [" how ", " are", " you", " what", " are", " you", " doing"];

alphabet.sort();
document.write(alphabet +'<br>')
 
// এখানে element গুলোকে a,b,c,d,e,f.... ইত্যাদি পর্যায়ক্রমে সাজানো হয়েছে।  এইভাবে শুধুমাত্র অক্ষর কে sort করা যায় নাম্বার কে sort করা যায় না। 

var alphabet = [" how ", " are", " you", " what", " are", " you", " doing"];
alphabet.sort();
alphabet.reverse();
document.write(alphabet +'<br>') 

// এখানে element গুলোকে z, y, x,w,v,u.... ইত্যাদি পর্যায়ক্রমে সাজানো হয়েছে reverse sort এর মাধ্যমে। এইভাবে শুধুমাত্র অক্ষর কে sort করা যায় নাম্বার কে sort করা যায় না। 

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 
               // Number Sort 

// নিম্বের বড় থেকে ছোট বা ছোট থেকে বড় অনুযায়ী সাজাতে হলে নিচের পদ্ধতি অনুসরণ করতে হবে। 

var number = [45 , 98,10, 6,47,94,3,48,34,87,1,54,94,2,11,78 ]
number.sort(function(a,b){
  return a-b ;
})              
document.write ( number + " <br>" )

// এখানে সংখ্যা ছোট থেকে বড় ঊর্ধ্বক্রমে সাজানো হয়েছে। 

var number = [45 , 98,10, 6,47,94,3,48,34,87,1,54,94,2,11,78 ]
number.sort(function(a,b){
  return b-a ;
})              
document.write (" " + number)

// এখানে সংখ্যা বড় থেকে ছোট নিম্নক্রমে সাজানো হয়েছে। 

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
