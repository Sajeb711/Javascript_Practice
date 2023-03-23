// console এর কাজ হল javascript code এর error দেখানো।  javascript  এ code লিখলে সেই code এর মধ্যে কোন error আছে কি না তা console এর মাধ্যমে দেখা যায়। আবার  কোন code testing করার জন্যও conslole ব্যবহার করা হয় ।  console প্রতিটা browser এই থাকে । 


//console এর মধ্যে অনেক গুলো command রয়েছে। এর মধ্যে .log একটি । .log একটি  console এর main command এর মধ্যে অন্যতম । 

let sajbe = 12;
console.log(sajbe * 50);
console.log(['15' ,'sajeb',"54", "chakraborty"])



// console এ table command ব্যবহার করলে array গুলো table আকারে index অনুযায়ী সাজানো যায় । table command ব্যবহার করতে চাইলে সাধারণত array ব্যবহার করতে হয়।  
console.table(['45','45','98','48' ,'sajeb']);
console.table(['My','name','is','Sajeb' ,'Chakraborty']);



// console এ কোন code কে  error দেখানোর জন্য .error command ব্যবহার করা হয় । 
console.error('something Not Right');
console.error('Error 404');



// console এ কোন  কিছু  warning আকারে দেখানোর জন্য .warn command ব্যবহার করা হয় । 
console.warn("Don't click here.  ")
console.warn("Don't click any links without checking...  ")



//console এ সবকিছু clear করার জন্য .clear ব্যবহার করা হয় ।  
// console.clear()


// console এর time command এর মধ্যে code গুলো চলতে কত সময় লাগে তা  .time এর মাধ্যমে জানা যায় । 
console.time('start')
console.error('be careful')
console.error('be careful')
console.error('be careful')
console.error('be careful')
console.error('be careful')
console.error('be careful')
console.error('be careful')
console.timeEnd('start')