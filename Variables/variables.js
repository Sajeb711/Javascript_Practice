//variable হচ্ছে একটা পদ্ধতি যার মধ্যে value add করে রাখা যায়। সেই value পরবর্তীতে বিভিন্ন জায়গায় ব্যবহার করা যায়।   

/*  variable তিন ধরণের । যেমন ঃ-
১. var
২. let
৩. const

যেমন ঃ 
// document.write('Sajeb Chakraborty')

//এখানে আমার নাম print করবে। আমার এই বিভিন্ন জায়গায় ব্যবহার করতে চাইলে আমার পুরো নাম বারে বারে লিখতে হবে। কিন্তু আমার নাম যদি একটা variable এর মধ্যে store করে রেখে দিতাম তাহলে আমার নামে বারে বারে না লিখে শুধু variable তার নাম লিখলেই হবে। যেমন:- */

 var name = ("Sajeb Chakraborty ");

 document.write(name);

//এখানে name variable বিভিন্ন জায়গায় বাবহার করলেই হবে।  বারে বারে নাম বাবহার করতে হবে না। 

name = "sofia "; 
document.write(name);

// 4 rules to use variables. 

var age24 =(24);
document.write(age24);

var CLASS = (" eight ");
document.write(CLASS);

var man_women =(" sajeb-runa ");
document.write(man_women);

var when$ =(" what ");
document.write(when$);

var g_5$  =("mixed all ");
document.write(g_5$ + "<br>");

// keyword cannot use in var.. like:

// var catch =(kf);
// document.write(cache);

let hover = ('who are you');
hover = ('who am i ?')
document.write(hover);


const point = (' what are you doing here ?');
document.write(point)

// var এর মাধ্যমে একই variable কে একের অধিক declear করতে পারা যাবে এবং একই variable এর value আবার assign করা যাবে এতে করে কোন error দেখাবে না ।  

// let এর মাধ্যমে একই variable কে একের অধিক declear করতে পারা যাবে  না  এতে করে  error দেখাবে  কিন্তু একই variable এর value আবার assign করা যাবে এতে করে কোন error দেখাবে না । 

// const এর মাধ্যমে একই variable কে একের অধিক declear করতে পারা যাবে  না  এবং একই variable এর value আবার assign করা যাবে না  ।

// ছবির মাধ্যমে উদাহরণ নিচে দেখানো হল । 