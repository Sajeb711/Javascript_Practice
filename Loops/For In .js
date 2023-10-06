// for in loop ব্যবহার করে object এর মধ্যে দিয়ে কে সহজেই loop করা যায়। 

let man ={fname : 'Sajeb ',lname : 'Chakraborty ',number : ' 01995046112', mobile: ' Vivo'
}
for( let s in man){
  document.write(man[s]);
};



let arr = ['<br>','sajeb ', 41, ' True ', 10];
for(let ay in arr){
  document.write(arr[ay]);
};
// for in array তে ব্যবহার করা উচিত না । array এর ক্ষেত্রে index টা জরুরী কিন্তু object এর ক্ষেত্রে order টা জরুরী । তাই for in  array তে ব্যবহার করা উচিত না। 

