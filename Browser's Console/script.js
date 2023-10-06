// video --   yahoo baba (10)

//* console এর মূল কাজ হচ্ছে javascript code এর error দেখানো ।  এবং কোন code যা print করতে চাচ্ছি না শুধু text করে দেখতে চাচ্ছি তাহলে conosle ব্যবহার করা হয় ।  google chrome ও Microsoft EDGE browser এ console খোলার shorcut key হচ্ছে shift + ctrl + j  .

let variables = "hello world ,,,,,,  how are you ?? ";
console.log(variables);

let arr = ["1", "233", "45"];
console.log(arr);

const obj = {
  firstName: "sajeb",
  age: 23,
  lastName: "chakraborty",
};
console.table(obj); //* .table এর মাধ্যমে key ও value গুলোকে আলাদা আলাদা ভাবে দেখায় table এর মাধ্যমে

console.error("something is worng") //* .error এর মাধ্যমে কোন কিছুকে error আকারে দেখান যায়। 

console.time("Reload Time")
console.warn("this is first warning");
console.warn("this is second warning");
console.warn("this is third and final warning"); //* কোন কিছুর warning দিতে চাইলে .worn ব্যবহার করা হয় । 
console.timeEnd("Reload Time") //*  কোন data load হতে কত সময় লাগলো টা জানতে .time ব্যবহার .timend করা হয় । প্রথমে .time() ব্যবহার করতে হবে তারপর data গুলো দিতে হবে তারপর .timeEnd() ব্যবহার করতে হবে ।  


