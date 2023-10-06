// for loop ও  while loop প্রায় একই । for loop এর ক্ষেত্রে প্রথমে for keyword ব্যবহার করে তারপর প্রথমে initilize তারপর condition তারপর increment বা decrement লিখতে হতো এক সাথে । আমরা জানি for loop এ প্রথম ও তৃতীয় statement optional . তাহলে বাকি থাকে condition statement টি  যদি শুধু আলাদা ভাবে লিখতে হয় তখন for loop ব্যবহার না করে while loop ব্যবহার করা ভাল । 


for (s = 95; s <= 98; s++) {
  document.write(" for loop " + s );
}


// ওপরের উদাহরণ হল for loop এর । আর নিচের উদাহরণটি হল while loop এর।  for loop এ  startvalue , condition এবং update value একসাথে থাকে। কিন্তু while loop এর ক্ষেত্রে value গুলো একসাথে থাকে না।  while loop এর ক্ষেত্রে প্রথমে start value দিতে হবে । তারপর while keyword ব্যবহার করতে হবে। তারপর condition বলতে হবে। তারপর print করতে হবে। এবং update part টি থাকবে while loop এর body র মধ্যে।

let p = 0;
let text = "";
while(p < 10){
  text += 'the number is' + p ;
   p++;
  };
  console.log(text)


let youtube = 3;
while (youtube <= 13) {
  console.log("youtube is video streaming platform");
  youtube++;
}
document.write('no no no no no no no no no');