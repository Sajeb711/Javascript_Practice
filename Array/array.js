//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/*
var name1, name2,name3,name4,name5
name1 = "sajeb";
name2 = "rakib";
name3 = "sakib";
name4 = "makib";
name5 = "akib";

document.write(name1 + "<br>");
document.write(name2 + "<br>" ); */

//এখানে যদি আমি ১০০ বা আরও বেশি নাম storage করে রাখতে চাই তাহলে এক এক করে নামে লিখতে হবে যা অনেক সময় সাপেক্ষ । এই program টি array এর সাহায্যেও করা যায় ।নিচে টা দেখানো হল ঃ 

//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


var names = new Array (5);
names[0] = "Sajeb"
names[1] = "Sakib"
names[2] = "Rakib"
names[3] = "Makib"
names[4] = "Lakib"

document.write(names[0] + "<br>")
document.write(names[2] + "<br>")
document.write(names[4] + "<br>")

//এখানে array এর  length দেওয়া বাধ্যতামূলক নয়। না দিলেও চলবে। 


//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var names = ["Sajeb" ,"Sakib" ,"Rakib" ,"Makib", "Lakib"  , "<br>" ]
document.write(names); 
document.write(names[4] + "<br>");
document.write(names[0] + "<br>");
//এখানে নাম গুলো সব একবারেও print করা যায় আবার আলাদা আলাদা ভাবেও  print  করা যায়। 


// একই array দুই ভাবে লেখা যায়। ওপরে একটা আছে আর এটা হল তার উদাহরণ।  


//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


// এখানে মোট ৫ টা নাম আছে। এখন যদি এই নামে গুলোর মধ্যে আরও  একটা নাম যোগ করতে চাই তাহলে push funtion লেখা যায়। যদি সবার শেষের নাম delet করতে চাই pop function লেখা যায়।  যেমন ঃ 

var named = [ "Sajeb" ,"Sakib" ,"Rakib" ,"Makib", "Lakib"  ,]

document.write(named.length)

named.push("latin", "matin" + "<br>");

// যত বার push লিখা হবে তত বার নতুন নাম যোগ হবে।  
document.write(named);
document.write(named[5] + "</br>");
document.write(named.length)

named.pop();
named.pop();
document.write(named + "<br>")

// যত বার pop লিখা হবে শেষের একটা একটা করে নাম মুছে যাবে। ওপরে দুইবার pop লেখা হয়েছে তাই শেষের দুইটা নাম মুছে গেছে। 

//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var country1 = ["Bangladesh", "India" , "Nepal"]
var country2 = ["Malaysia", "Indoneshia" , "Dubai"]
var country3 = ["England", "France" , "Denmark"]
var country4 = ["America", "Canada" , "Greenland" , "<br>"]
var country5 = ["Argentina", "Brazil" , "Peru"]
var country6 = ["Morocco", "Libiya" , "Congo"]

var country = country1.concat(country2,country3,country4,country5,country6)
document.write(" " + country);

// concat function এর মাধ্যমে অনেকগুলো variable কে একসাথে যুক্ত করা যায়। 

//////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\