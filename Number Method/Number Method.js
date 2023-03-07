var num = 54;
 num = toString(num);
 console.log(typeof(num)); 
 
 //এখানে ৫৪ হচ্ছে number । ৫৪ কে number থেকে srting করতে হলে toString Method বাবহার করতে হবে। 
 
 var man = "36";
 man = parseInt(man);
 console.log(typeof(man)); 
 //এখানে ৩৬ হচ্ছে intiger । ৩৬ কে intiger থেকে number করতে হলে parseInt Method ব্যবহার করতে হবে।

 var man = "36.6";
 man = parseFloat(man);
 console.log(typeof(man)); 

 //দশমিক সংখ্যার ক্ষেত্রে parseInt ব্যবহার না করে parsrFloat ব্যবহার করা উচিত। 
 
 // javascript এ number কিংবা float কে number হিসেবে গণনা করা হয়। 

 var number = 5.67198;
 console.log(number.toFixed(4));
 
 //toFixed দ্বারা শুধু দশমিক এর পরের ঘর দেখাবে। এখানে দশমিচ এর ৪ ঘর পর্যন্ত দেখাচ্ছে।  
 
 var number = 3.16398;
 console.log(number.toPrecision(5));
 
 //toPrecision দ্বারা শুরু থেকে সংখ্যা গণনা করা হয়। এখানে ৫ দ্বারা প্রথম থেকে মোট ৫ টি সংখ্যা কে বুঝাবে। 
 
 console.log(Number("81"));
 
 console.log( typeof(Number("75.9")));
 
 //এখানে Number দ্বারা কোন string কে number এ convert করা যায়। এক্ষেত্রে  parseInt  এবং parseFloat ব্যবহার করা যায়। এখানে 81 এবং 75.9 string । Number এর মাধ্যমে 81 এবং 75.9 কে number এ  convert করা হয়েছে। 
 
 console.log(Number(true));
 console.log(Number(false));

 //এখানে true এর মান হচ্ছে ১ এবং false এর মান হচ্ছে ০ । Number এর মাধ্যমে true এবং 75.false কে number এ  convert করা হয়েছে।  