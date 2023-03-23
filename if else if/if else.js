// অনেকগুলো condition তৈরি করার জন্য if else statement ব্যবহার করা হয়। if statement যদি false হয় তখন if else statement কাজ শুরু করে । যখন if statement ও  if else statement কাজ করে না তখন শেষে else statement কাজ করে।

let time = prompt("Enter Time");

if (time >= 1 && time <= 5) {
  document.write("Good Deep night");
} else if (time >= 6 && time <= 11) {
  document.write("Good Morning");
} else if (time >= 12 && time <= 15) {
  document.write("Good Midday");
} else if (time >= 16 && time <= 17) {
  document.write("Good P. M. ");
} else if (time >= 18 && time <= 19) {
  document.write("Good Evening");
} else if (time >= 20 && time <= 24) {
  document.write("Good Night");
} else {
  document.write("Please Inter valid time" + "<br>");
}

const pEr = prompt("Enter Your Mark ::");

if (pEr >= 80 && pEr <= 100) {
  document.write("You Got A+");
} else if (pEr >= 70 && pEr <= 79) {
  document.write("You Got A");
} else if (pEr >= 60 && pEr <= 69) {
  document.write("You Got B");
} else if (pEr >= 50 && pEr <= 59) {
  document.write("You Got C");
} else if (pEr >= 40 && pEr <= 49) {
  document.write("You Got D");
} else if (pEr <= 39) {
  document.write("you are Fail");
} else {
  document.write("Enter Valid Mark");
}
