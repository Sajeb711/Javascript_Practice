// video -- learn with sumit (35)

// একই লেখা অনেক বার লিখের জন্য loop ব্যবহার করা হয় । কোন একই লেখা যদি আমাদের কেউ ৫ বার বা ১০ বার লিখতে বলে তাহলে আমরা সেটা document.write('') / console.log('') ইত্যাদি মাধ্যমে লিখতে পারি । কিন্তু একই লেখা যদি কেউ আমাদের ১ লক্ষ বার লিখতে বলে তাহলে এক এক করে সেই লেখা গুলোকে লেখা আমাদের পক্ষে কঠিন হয়ে পড়ে । ঠিক তখন আমরা loop ব্যবহার করে খুব সহজে আমরা লেখাগুলোকে আমরা লিখতে পারি । loop ব্যবহার করে কোন একই লেখাকে আমরা ১ লক্ষ বার লিখতে পারি আবার ১ কোটি বারও লিখতে পারি । 


     //  Sajeb Chakraborty লেখাটি ৪ বার লিখতে চাইলে --

// সাধারণ পদ্ধতিতে ঃ 
document.write("Sajeb Chakraborty");
document.write("Sajeb Chakraborty");
document.write("Sajeb Chakraborty");
document.write("Sajeb Chakraborty");

// Loop এর মাধ্যমে ঃ 
for (let z = 1; z <= 4; z = z + 1){
   document.write(" Sajeb Chakraborty ");
}  




      // ১ থেকে ৫ পর্যন্ত সংখ্যা লিখার জন্য -- 


// সাধারণ পদ্ধতিতে ঃ 
document.write('<br>'+ 1,2,3,4,5,6,7,8,9);



// Loop এর মাধ্যমে ঃ 
for (let k = 1; k <= 5; k = k + 1){
  document.write(k+"<br>");
}

     // অনেক ধরণের loop রয়েছে । যেমন --

/* 
 1. For Loop ( for loop সকল loop করার ক্ষেত্রে ব্যবহার করা যায়। )
 2. for in loop ( for in loop object এর ক্ষেত্রে ব্যবহার করা ভাল array এর ক্ষেত্রে ব্যবহার করা ঠিক নয় )
 3. for of loop (for of loop array এর ক্ষেত্রে ব্যবহার করা উচিত ।  )
 4. While loop ( যদি শুধু condition statement টি করতে হয় তাহলে while loop ব্যবহার করা হয়। )
 5. Do while loop
*/