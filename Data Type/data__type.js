
/* data type হচ্ছে কোন variable declear করার পর সেই variable এর যে value দেওয়া হয় সেটা ।     
   অনেক প্রকার data type আছে । যেমন ঃ-


   string :- যে variable এর value শুধুমাত্র double quotation অথবা single quotation এর মধ্যে লেখা হয়       সেটাকে  string data type বলা হয় ।  যেমন ঃ 
               var string = "sajeb chakraborty" ;


Number :- যে variable এর value শুধুমাত্র যেকোনো সংখ্যা এবং সংখ্যাগুলো  double quotation অথবা single quotation এর মধ্যে লেখা থাকে না সেটাকে number data type বলা হয় । যেমন ঃ 
                var number = 454 ;
                var number1 = 48.547 ;


Boolean :- যে variable এর value true অথবা false হয় সেটাকে boolean  data type বলা হয় । যেমন ঃ 
                let boolean = true;
                let boolean1 = false;


Array :- যে variable এর এক বা একাধিক value  double quotation অথবা single quotation এর মধ্যে লেখা থাকে এবং value গুলো তৃতীয় বন্ধনির [] মধ্যে থাকে সেটাকে array data type বলা হয় । যেমন ঃ
                 const array = ['my' , 'name', 'is' , "sajeb"] ; 


Object :- যে variable এর এক বা একাধিক value  double quotation অথবা single quotation এর মধ্যে লেখা থাকে এবং main variable এর মধ্যে sub variable থাকে আর sub variable  ও  string গুলে দ্বিতীয় বন্ধনির {} মধ্যে থাকে সেটাকে object data type বলা হয় । 
                 let object = {first: "sajeb" , last: "chakraborty"} ;


Undefined :- যে variable এর শুধুমাত্র variable declear করা হয় কিন্তু variable এর value assign করে দেওয়া হয় না সেটাকে undefiend data type বলা হয় ।  
                   let undefiende ;


                   নিচে data type গুলোর উদাহরণ দেওয়া হল   ঃঃ::

*/


// কোন variable এর data type কি তা জানার জন্য  "" typeof "" keyword ব্যবহার করা হয় । 
var string = "sajeb chakraborty " ;
document.write(string);
document.write(typeof string + "<br>" )


var number = 454 ;
var number1 = 48.547 ;

document.write(number + '&nbsp;' ,'&nbsp;'  + number1)
document.write(typeof number + '&nbsp;' ,'&nbsp;'  )
document.write(typeof number1 + "<br>" )


let boolean = true;
let boolean1 = false;

document.write(boolean +'&nbsp;' ,'&nbsp;'+ boolean1)
document.write(typeof boolean + '&nbsp;' ,'&nbsp;'  )
document.write(typeof boolean1 + "<br>" )


const array = ['my' , 'name', 'is' , "sajeb "] ;

document.write(array)
document.write(typeof array + "<br>")
// javascript এ array কে object বলা হয় । এবং object কেও object বলা হয় ।


let object = {first: "sajeb" , last: "chakraborty"} ;

document.write(object)
//javascript এ object এর  value ptint result সাধারণভাবে object object দেখাবে ।   