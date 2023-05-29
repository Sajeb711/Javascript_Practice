// confirm box অনেকটা alert box এর মতো কাজ করে । তবে confirm box এর মধ্যে প্রশ্ন জিজ্ঞাস করা হয় yes অথবা no । confirm box if condition এর সাথে বেশি ব্যবহার করা হয়।

// confirm("what is it");

/*
let v = confirm("are you there");
alert(v); 
*/

const not = confirm("Do you like this website ?");
if (not) {
  alert("thanks you for your feedback");
} else {
  alert("we will try our best");
}
// এখানে যদি user ok click করে তাহলে লেখা আসবে thanks you for your feedback আর যদি cancel click করে তাহলে লেখা আসবে we will try our best ...
