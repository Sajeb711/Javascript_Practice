// video-- learn with sumit (47) , anisul islam (61,62)--

/*
 কোন programming language এ error একটি সাধারন বিষয় । code এর মধ্যে error থাকবেই। আমরা ভুল  করে কোন কিছু লেখলে output এ সেটাতে error দেখাবে। error handling ব্যবহার করা হয় কারন , ধরি আমি ১০০ লাইন code লিখেছি। ১৫ নাম্বার লাইন এ কোন error দেখা দিয়েছে। তাহলে ১৫ নাম্বার লাইন থেকে ১০০ নাম্বার লাইন পর্যন্ত code গুলো আর কাজ করতে পারবেনা। ১ টি লাইন এ ভুলের জন্য সব লাইন কাজ যাতে বন্ধ করে না দেয় সে জন্য error handlingব্যবহার করা হয় ।  try , catch    run time error(যে কোড run করান যায়)  handle করে কিন্তু syntax error(যে error যার মধ্যে ব্র্যাকেট,দ্বিতীয় বন্ধনি ইত্যাদি না দিলে ) handle করে না । 
 error hanline এর জন্য কয়েকটা keyword ব্যবহার করা হয়, যেমন ঃ 
 1. try
 2. catch
 3. throw
 4. finally
 
 */

 try{
  for (let i = 2.5 ; i < 15.9;  i = i + 5.1){
    document.write(" I =" + i + '<br>');
  };

  for (let S = 9 ; S < 23;  S = S + 3.8){
    document.write("S = " + S + '<br>');
  };
 }
 catch(er){
  function userName(){
    document.write('Hello Sajeb');
  }
  userName();
 }

// try এর মধ্যে আসল code থাকে আর catch এর মধ্যে থাকে সেই code যেটাতে erroe হতে পারে বলে মনে হয় ।  যদি code এর মধ্যে error দেখা দেয় তাহলে catch টা handle করবে । যদি try block এর code কাজ না করে তখন catch block এর কাজ শুরু হবে।  


try{
  function add(){
    let numberOne = 85;
    let numberTwo = 15;
    document.writeর্ববগেগ্বব্রুএব্রগভচ্যভথগবনি(numberOne + numberTwo + '<br>')
  };
  function sub(){
    let numberOne = 85;
    let numberTwo = 15;
    document.write(numberOne - numberTwo + '<br>')
  };
  function multiplication(){
    let numberOne = 10;
    let numberTwo = 9.99;
    document.write(numberOne * numberTwo + '<br>')
  };
  add();
  sub();
  multiplication();
}
catch(FuncTion){
  let plusMinusMultiple = 20 + 60 - 54 * 45 ;
  document.write('this is catch block '+ plusMinusMultiple + '<br>');
  console.log(FuncTion);
  console.log(FuncTion.name);
  console.log(FuncTion.message);
}

/*
 দ্বিতীয় try block এ ৩ টা function আছে । ১ম function এ ভুল দেখা দিলে try block এর অন্যান্য function কাজ করবে না তখন catch block কাজ শুরু করবে। ২য় function এ ভুল দেখা দিলে ১ম function শুধু কাজ করবে কিন্তু ২ ও ৩ function কাজ করবে না । ৩য় function এ ভুল হলে ১ ও ২ function কাজ করবে কিন্তু ৩য় function কাজ করবে না । catch block তখনি কাজ করবে যখন  try block এর প্রথম কোন জায়গায় ভুল গেলে যার ফলে try block এর বাকি সব কোড আর কাজ করবে না অথবা try block এর অন্য কোথাও ভুল গেলে তখন । অর্থাৎ try block কাজ না করলে catch block তার কাজ শুরু করে দিবে।  
 
 try block যদি কোন ভুল এর কারণে কাজ না করে কোথায় ভুল হয়েছে টা দেখার জন্য catch block এর মধ্যে যে function name দেওয়া হয় সেটাকে console বা document করলেই পাওয়া যাবে ।  যদি শুধু function এর নামে টা colsole করি তাহলে সব কিছু দেখাবে । যদি function.name লিখি তাহলে error এর নামটা print করবে । যদি function.message লিখি তাহলে দেখাবে কোন লাইন এ কীজন্য ভুল হয়েছে । 
 */

try{
  function ifFunction(){
    let name = 'sajeb'
    if(name === 'sajeb'){
      document.write('why? <br> ');
    }
    else{
      document.write('None <br>')
    }
  };
  ifFunction();
}
catch(errorHandling){
  function sajeb(){
    document.write('Sajeb is A Man <br>');
  };
  sajeb();
}
finally{
  function person(){
    document.write('Sajeb is a grate man in the world <br>');
  };
  person();
};

// finally block এর কাজ হচ্ছে try block ও catch block কাজ করুক বা না করুক finally block অবশ্যই কাজ করবে । finally block try বা catch block এর ওপর নির্ভর করে থাকে না । finally block নিজে নিজেই কাজ করে । 


try{
  let s = 5;
  if(s >= 10) throw 'Number is too big <br>';
  // if(s <= 4) throw 'Number is too big <br>';
  else throw 'Number is small <br>';
  
}
catch(error){
 document.write(error)
}
finally{
  document.write('This is boss <br>')
}

// throw block ব্যবহার করলে সেটা catch function receive করে । এই জন্য try এর মধ্যে throw ব্যবহার করলে সেটা সেখার জন্য catch এর মধ্যে যে function নামটা দেওয়া থাকবে সেটা print করতে হবে try এর মধ্যে throw print করে যায় না ।  