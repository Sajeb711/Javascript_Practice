var text = "functions"
document.write(text.length);

var text1 =" length ";
var text2 = " of this text is ";
var texts = text1 + text2 ;
var text3 = "bangladesh";

document.write(texts + text3.length);


//এখানে length দ্বারা variable এর মধ্যে কতগুলো সংখ্যা আছে তা বলে। এখানে text variable এর মধ্যে মোট ৯ টা সংখ্যা আছে । 


// যে variable এর length বের করা হবে সেই string এর মধ্যে space দেওয়া যাবে না কারন space দিলে সেই space কেউ গণনা করা হয় । 


// var name = prompt(" Enter your name : ") ;

// document.write(name.length);

// var address = prompt(" Enter your address: ") ;
// document.write(" the number of character" + address.length);


//user এর কাছে থেকে কোন তথ্য নেওয়ার জন্য prompt ব্যবহার করা হয়। 

//এখানে user তার নাম বলবে এবং নাম এর lenght কত তা বলে দিবে। 


var mobile = "sajeb";

document.write(mobile.charAt(3));

var mobile = "chakraborty ";

document.write(mobile.charAt(7));

// charAt দ্বারা অত তম সংখ্যায় কি আছে তা প্রকাশ করে। 
// charAt গণনা শুরু করে প্রথম সংখ্যা থেকে। অর্থাৎ প্রথম অক্ষর হল ০ তারপরের অক্ষর হল ১ তারপরের অক্ষর হল ২ ইত্যাদি।  যেমন এখানে s হল 0 number সংখ্যা এবং a হল  1 number সংখ্যা ২ number নয়।  

// যে variable এর charAt বের করা হবে সেই string এর মধ্যে space দেওয়া যাবে না কারন space দিলে সেই space কেউ গণনা করা হয় । 


var up = "<br>man women ";
document.write(up.toUpperCase(up));


var up1 = "<br> toothless";
up1 = up1.toUpperCase();
document.write(up1.toUpperCase(up1));

//toUpperCase দ্বারা লেখা সব বড় হাতের করা যায় বা হয়ে যায়। 


var up = "<br>man women ";
document.write(up.toLowerCase(up));


var up2 = "<br> toothless";
up1 = up2.toLowerCase();
document.write(up2.toLowerCase(up2));

// toLowerCase দ্বারা লেখা সব ছোট হাতের করা যায় বা হয়ে যায়। 

var con =" <br> you are a ";
var cat = "good person";
document.write(con.concat(cat));

var con =" <br> you are a ";
var cat = "good person <br>";
var concat = con.concat(cat)
document.write(concat);

// concat দ্বারা একটি string এর সাথে আরেকটি string concatinate বা যুক্ত করা যায়। 

var Slice = "pornography ";
document.write(Slice.slice(3,6));


var slIce = "pornography";
var Slice =  slIce.slice(0,6)
document.write(Slice);

//slice দ্বারা অক্ষর কেটে নেওয়া যায়। slice এ দুইটি মান দিতে হয়। একটি যেখান থেকে শুরু হবে আরেকটি যেখানে শেষ হবে। 

// slice গণনা শুরু করে প্রথম সংখ্যা থেকে। অর্থাৎ প্রথম অক্ষর হল ০ তারপরের অক্ষর হল ১ তারপরের অক্ষর হল ২ ইত্যাদি।  যেমন এখানে p হল 0 number সংখ্যা এবং o হল  1 number সংখ্যা ২ number নয়।  

// যে variable এর slice বের করা হবে সেই string এর মধ্যে space দেওয়া যাবে না কারন space দিলে সেই space কেউ গণনা করা হয় । 

