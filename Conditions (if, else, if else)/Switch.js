
// এখানে একই project দুই ভাবে করা হয়েছে বা যায়। প্রথমে একই project ""if,else if, else"" এর মাধ্যমে করা হয়েছে । আবার একই project ""switch""  এর মাধ্যমে।


// switch ব্যবহার করার জন্য ৪ টা keyword সম্পর্কে জানতে হবে। switch , case, break, default. ( switch এর মধ্যে variable এর নাম বলতে হবে। তারপর case এর মধ্যে  value গুলো দিতে হবে । case লেখার পর অবশ্যই কোলন (:)  চিহ্ন দিতে হবে। case এর পর  break ব্যবহার করতে হবে। না হলে সকল value গুলোও দেখাবে।   সবার শেষের value তে case ব্যবহার না করে  default keyword ব্যবহার করতে হবে।  

let digit = 5;

switch (digit) {
  case "0":
    document.write("ZERO <br>");
    break;
  case "1":
    document.write("ONE <br>");
    break;
  case "2":
    document.write("TWO <br>");
    break;
  case "3":
    document.write("THREE <br>");
    break;
  case "4":
    document.write("FOUR <br>");
    break;
  case "5":
    document.write("FIVE <br>");
    break;
  case "6":
    document.write("SIX <br>");
    break;
  case "7":
    document.write("SEVEN <br>");
    break;
  case "8":
    document.write("EIGHT <br>");
    break;
  case "9":
    document.write("NINE <br>");
    break;
  case "10":
    document.write("TEN <br>");
    break;
  default:
    document.write("Invalid Number <br>");
}


let digits = 51;
if (digits == 51){
document.write("FiftyOne <br>")
}
else if (digits == 52){
document.write("FiftyTwo <br>")
}
else if (digits == 53){
document.write("FiftyThree <br>")
}
else if (digits == 54){
document.write("FifrtFour <br>")
}
else if (digits == 55){
document.write("FiftyFive <br>")
}
else if (digits == 56){
document.write("FiftySix <br>")
}
else if (digits == 57){
document.write("FiftySeven <br>")
}
else if (digits == 58){
document.write("FiftyEight <br>")
}
else if (digits == 59){
  document.write("FiftyNine <br>")
}
else if (digits == 60){
  document.write("Sixty <br>")
}
else{
  document.write("Invalid Number <br>");
}




