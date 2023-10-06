// video -- learn with sumit (34) --

/* 
conditional statement বলতে if , else , if else , switch কে বোঝায় । 
if দ্বারা কোন condition কে বোঝায় । যদি কোন statement সত্যি হয় তাহলে if এর মধ্যে থাকা statement টি print হবে । আর যদি if এর statement মিথ্যা হয় তাহলে else এর মধ্যে থাকা statement টি print হবে।   
*/

let mobilePrice = 75000;
let laptopPrice = 82000;

if (mobilePrice > laptopPrice) {
  document.write("Mobile Is Best <br>");
} else {
  document.write("Laptop Is Best <br>");
}

// এখানে শর্ত হচ্ছে যদি mobile এর দাম laptop দাম এর চেয়ে বেশি হয় তাহলে if এর condition টি true হবে এবং if এর statement টি print হবে। আর যদি laptop এর দাম mobile এর দামের থেকে বেশি হয় তাহলে এখানে if এর condition টি false হবে এবং else এর statement টি print হবে ।

let age = 25;
if (age > 18) {
  document.write("You are eligible to Vote <br>");
} else {
  document.write("you are not eligible to vote <br>");
}

const bodyTemperature = 98.4;
if (bodyTemperature >= 98.5) {
  document.write("You Must Go to Doctor <br>");
} else {
  document.write(`You don't have to go to Doctor <br>`);
}
