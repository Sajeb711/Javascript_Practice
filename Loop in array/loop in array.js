////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var number = [" hello "," sajeb "," how "," are "," You "," I "," am "," fine ",]

document.write(number[0]);
document.write(number[1]);
document.write(number[2]);
document.write(number[3]);
document.write(number[4]);
document.write(number[5]);
document.write(number[6]);
document.write(number[7] + "<br>");
document.write(" {" + number + "} " + "<br>"); 

//  ওপরের নাম্বার গুলো চাইলে এক এক করেও print করা যায় আবার সবগুলো একসাথেও  print করা যায়। 

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var about = [
  " sajeb... ",
  " what ",
  " are ",
  " You ",
  " doing ? ",
  " are ",
  " you ",
  " fine ? "
];

for (var s = 0; s <= 7; s++) {
  document.write(about[s]) ;
}
document.write("<br>") ;

// ওপরের লেখা গুলো loop এর মাধ্যমে খুব সহজে  print করা যায়।  
////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var point = [45 , 65 , 89, 87, 31, 99];
var sum = 0;

for(var a = 0; a < 6; a++){
  document.write(point[a]);
  
  sum = sum + point[a];
}
document.write( " sum => " + sum);


////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var numb = new Array ();
for(var a = 0; a < 6; a++){
numb [a] = parseInt(prompt("Enter a Number :"))
}


var sum = 0;

for(var a = 0; a < 6; a++){
  console.log(numb[a]);

  sum = sum + numb[a];
  
}
console.log( " sum => " + sum);

// এখানে user কাছে থেকে input নিব এবং input গুলো যোগ করে মোট যোগফল দেখাবে।  
////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\