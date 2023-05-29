
// video -- learn with sumit (34) --

// যখন অনেকগুলো condition থাকে তখন elde if ব্যবহার করা হয়। অর্থাৎ আমার যদি তিনটা statement থাকে তখন if দিয়ে একটি statemnt লিখব else দিয়ে শেষের statement লিখব । তাহলে বাকি একটা statement লিখের জন্য else if ব্যবহার করা হয়। 

let grade = 40;

if( grade >= 40){
  document.write('You are pass <br>');
} else if ( grade < 40){ 
  document.write('You are Fail <br>');
}
else{
  document.write('you have got A+ <br>');
}

let weekend = 5;

if (weekend == 4 || weekend == 5){
  document.write('soon it is weekend <br>')
}
else if (weekend == 0 || weekend == 6){
  document.write('it is weekend <br>')
}
else{
  document.write('it is weekend <br>')
}



let digitd = 9;

if (digitd == 0){
  document.write("Zero <br>")
}
else if (digitd == 1){
  document.write("One <br>")
}
else if (digitd == 2){
  document.write("two <br>")
}
 else if (digitd == 3){
   document.write("Three <br>")
 }
else if (digitd == 4){
  document.write("Four <br>")
}
else if (digitd == 5){
  document.write("Five <br>")
}
 else if (digitd == 6){
   document.write("Six <br>")
 }
else if (digitd == 7){
  document.write("Seven <br>")
}
 else if (digitd == 8){
   document.write("Eight <br>")
 }
else if (digitd == 9){
  document.write("Nine <br>")
}
else{
  document.write("Invalid Number <br>");
}
