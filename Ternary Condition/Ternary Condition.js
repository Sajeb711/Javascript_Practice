
//////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
 var number = Number(prompt("Enter a number"));
 if (number>0){
     document.write('Positive');
 }
 else if (number==0){
     document.write('Zero');
   }
   else {
       document.write('Negative');
     }  */


    //এখানে user এর কাছে থেকে সংখ্যা input নিব এবং বলে দিবে input টি  positive না negative না  zore । এটি আমরা if else এর মাধ্যমেও করতে পারি আবার ternary এর মাধ্যমেও করতে পারি । যেমনঃ 


    /////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\//\\\\\\\\\\\\



    /*
     var number = Number(prompt("Enter a number"));

     var reasult =  number > 0 ? "Positive" :  "Negetive"

     document.write(reasult); */
     
     //এখানে user যখন  number input দিবে তখন program টি প্রথমে  condition check তারপর condition অনুযায়ী value  print করবে। যেমন ওপরের উদাহরণে ,  user যখন  number input দিবে তখন number টির condition check করা হবে। নাম্বার টি যদি ০ এর চেয়ে বড় হয় value  print হবে  Positive এর যদি নাম্বার টি ০ এর চেয়ে ছোট হয় value print হবে Negetive । 
     
    
     //////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
     
     var number = Number(prompt("Enter a number"));
     var reasult =  number > 0 ? "Positive" :  number < 0 ? "Negetive" :"Zero";
     document.write(reasult + "<br>"); 
     

     let z = 98.154;
     let k;
     (z === 98.154) ? k = "yes" : k = "no";
     document.write(k)
    // এখানের একই program if lese এর সাহায্যেও করা যায় আবার ternary condition এর সাহায্যেও করা যায়। উদাহরণ ওপরে রয়েছে। 

    //////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\