// এক বা একাধিক  string এর সাথে অন্য আরও string যোগ করাই হল string concatenate. + বা যোগ চিহ্ন দ্বারা  string concatenate যুক্ত করা হয়। 

document.write('(Sajeb' + ' Chakraborty)<br>' );

document.write(" ( my" + " name"+" is" + " Sajeb" + " Chakraborty )<br>");

// যোগ চিহ্ন দ্বারা এক বা একাধিক string যুক্ত করা হয়েছে। 

var firstName = " john"
var middleName = ' das'
var lastName = " doe <br>"

var fullname =firstName + middleName+ lastName  ;

document.write(fullname );


var work1 ="web developer <br>";
var work ="web developer";

document.write("i am a" + work1);

document.write("i am a " + work + " and also a student<br>");



var loerm = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta, asperiores necessitatibus libero perspiciatis atque velit sequi rerum ipsam provident laboriosam ipsa doloribus itaque ipsum pariatur, minima magnam consequatur est. " ;

document.write(loerm + work + fullname);