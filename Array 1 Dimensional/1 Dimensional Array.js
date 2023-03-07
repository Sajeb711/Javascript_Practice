names = ['soina ', ' sofia', " pritom", ' mazidul' , ' mainul' , ' mirinda']

/* document.write(names[0]);
document.write(names[1]);
document.write(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]); */

// ওপরের নামগুলো আমি যদি print করতে চাই তাহলে আমি সাধারণ ভাবে এক এক করে print করতে পারি। কিন্তু এর জন্য আমাকে অনেক লেখতে হবে। কিন্তু এই program টি for loop এর মাধ্যমে করলে কম লেখাতেই হয়ে যাবে। যেমন :

for(var s=0; s<=5; s++){
  document.write(names[s])
}