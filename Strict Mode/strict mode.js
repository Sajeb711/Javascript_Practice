//    video ................       learn with sumit (50)

//  javascript একটি ক্ষমাশীল   programming language . কোন  variable declare করার সময় প্রথমে assign  তারপর  declare করলেও সেটা  সঠিক দেখায়  যেমনটা  hoisting এ দেখাছি ।   কিন্তু যদি   "Use strict" expression টি যদি ব্যবহার করি তাহলে  javascript তার ক্ষমাশীলটাকে  বন্ধ করে দিবে । অর্থাৎ 'use strict '  ব্যবহার করলে  তখন code সরাসরি সঠিক ভাবে লিখতে হবে ।  মানে সাধারন ভাবে যেমন কোড লিখে সেইভাবেই code লিখতে হবে ।  strict mode ব্যবহার করার জন্য  code এর শুরুতে  "use strict"  keyword টি ব্যবহার করতে হবে । 

b = 45;
let  c = 45;
document.write(b  + '  ' +c) ;


function h(){
     'use strict' ; 
    v = 45;
    document.write(v)
   } ;
   h(); 
   //  strict mode ইচ্ছা অনুযায়ী ব্যবহার করা যায় ।  যদি আলাদা কোন function এর মধ্যে strict mode ব্যবহার করা হয় তাহলে সেটা সেই fuction scope এর মধ্যেই থাকবে ।  error হলে সেটা সেই function এর মধ্যেই থাকবে ।  
