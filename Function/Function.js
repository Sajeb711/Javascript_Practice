// একই লেখা বার বার লেখার জন্য function ব্যবহার করা হয়। একই code অনেক বার লিখার পর সহজে পরিবর্তন করার জন্য function ব্যবহার করা হয়।
//function ব্যবহার করার জন্য প্রথমে function keyword টি ব্যবহার করতে হবে। তারপর function এর নাম লিখতে হবে তারপর প্রথম ব্র্যাকেট () দিতে হবে। তারপর দ্বিতীয় ব্র্যাকেট {} এর মধ্যে যা যা চাই টা লিখতে হবে। তারপর function এর নাম লিখে function টি call করতে হবে।
//////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var nam = "Hello , i am sajeb chakraborty .";
document.write("Print = " + nam + "<br>");

var nam = "Hello , i am sajeb chakraborty .";
document.write("Print = " + nam + "<br>");

var nam = "Hello , i am sajeb chakraborty .";
document.write("Print = " + nam + "<br>");

/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//ওপরের একই নামগুলো লিখার জন্য বার বার একই variable লিখতে হচ্ছে। বার বার একই variable গুলো না লিখতে চাইলে function এর মাধ্যমে লিখা যায়। যেমন ঃ

function name() {
  let detail = "what is your name ?";
  document.write(detail + "<br>");
}

function plus() {
  var num = 4123568379;
  var reasult = num * num;
  document.write("মান  = " + reasult + "<br>");
}
name();
plus();
name();
plus();
name();
plus();
name();
// এখানে একই লেখা খুব সহজে লিখা যায় function এর মাধ্যমে। এর কোন কিছু পরিবর্তন করাও সহজ ।  আর একটি function এর মধ্যে অসংখ্য function অথবা অন্য program করা যায় ।

/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//parameter function :

// একই কাজ বার বার করার জন্য function ব্যবহার করা হয়। কিন্তু যখন কোন function এর কাজ করার পদ্ধতি একই থাকে কিন্তু function এর value গুলো আলাদা আলাদা  হয় তখন function with parameter ব্যবহার করা হয়।

function Saj(prefirstname, fname, midname, lname) {
  document.write(prefirstname, fname, midname, lname + "<br>");
}
Saj("Sree ", "Sajeb ", "kumar ", "chakraborty ");
Saj("are ", "you ", "okey ", "bro ? ");

function into(num) {
  const reasult = num * num + 90;
  document.write("Into = " + reasult + "<br>");
}

function not(num1,sum1) {
  const reasult = num1 + sum1 - 120;
  document.write("Not = " + reasult + "<br>");
}
not(68.14 , 45.784)
into(15);



/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// multiple parameter function :

function intos(num1, num2) {
  let reasult = num1 * num2;
  document.write("intos = " + reasult + "<br>");
}

intos(5, 10);


function intoi(num1, num2, num3, num4, num5) {
  let reasult = num1 * num2 - num3 + num4 / num5;
  document.write("intoi = " + reasult + "<br>");
}

intoi(5, 10, 45, 55, 2);

function about(name ,genders , gender, time, food ){
  console.log(name + ` is a good `+ genders + gender + ` is reading from` + time + ` and eating` + food + ` after read .`);
}
about(' Sajeb', ' He', ' 7.30 am', ' rice ' );
about(' Ariana grande','girl .', ' she', ' 8 am', ' Chicken ' );

/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// return Function

function add(num1, num2) {
  var result = num1 + num2;
  return result;
}
var plus = add(8, 9);
document.write("Result is = " + plus + "<br>");

// কোন সংখ্যার যোগ বিয়োগ ইত্যাদি করার জন্য return keyword ও ব্যবহার করা যায়।


/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
