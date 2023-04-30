// একই লেখা অনেক বার লিখের জন্য loop ব্যবহার করা হয় ।  আর এই loop এর একটি অংশ হল while loop .

//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

for (s = 95; s <= 98; s++) {
  document.write(" for loop " + s + "<br>");
}

//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// ওপরের উদাহরণ হল for loop এর । আর নিচের উদাহরণটি হল while loop এর।  for loop এ  startvalue , condition এবং update value একসাথে থাকে। কিন্তু while loop এর ক্ষেত্রে value গুলো একসাথে থাকে না।  while loop এর ক্ষেত্রে প্রথমে start value দিতে হবে । তারপর while keyword ব্যবহার করতে হবে। তারপর condition বলতে হবে। তারপর print করতে হবে। এবং update part টি থাকবে while loop এর body র মধ্যে।

var b = 1;
document.write("<ul>");
document.write("<textarea cols='30' rows='10' >");
while (b <= 9) {
  document.write("<li>" + " while loop " + b + "</li>");
  b++;
}

document.write("</ul>");
document.write("</textarea>" + "<br>");

var i = 2;
while (i <= 20) {
  i = i + 2;
  document.write(" while " + i + "<br>");
}

var i = 15;
while (i >= 2) {
  i = i - 2;
  document.write(" Reverse " + i + "<br>");
}


let youtube = 3;
while (youtube <= 13) {
  console.log("youtube is video streaming platform");
  youtube++;
}
document.write('no no no no no no no no no');