// variable declare and assignment :
var name = "sajeb chakaraborty";
var number = 50.12;
var boolean = true;
var undefine = undefined;
var arr = ["sajeb", "sakib", "kaushik", "sundar"];
var obj = {
  firstName: "sajeb",
  lastName: "chakraborty",
};

let name = "sajeb chakaraborty";
let number = 50.12;
let boolean = true;
let undefine = undefined;
let arr = ["sajeb", "sakib", "kaushik", "sundar"];
let obj = {
  firstName: "sajeb",
  lastName: "chakraborty",
};
const name = "sajeb chakaraborty";
const number = 50.12;
const boolean = true;
const undefine = undefined;
const arr = ["sajeb", "sakib", "kaushik", "sundar"];
const obj = {
  firstName: "sajeb",
  lastName: "chakraborty",
};

// function(normal and arrow )

function call() {
  document.write();
  console.log();
}
call(); // normal function without parameter

function calle(value, add) {
  console.log(value, add);
  document.write() + value, add;
}
calle(value, add); // normal function with parameter

const sentence = () => {
  document.write();
  console.log();
};
sentence();
console.log(sentence()); // arrow function without parameter

const word = (para1, para2, para3) => {
  document.write(para1, para2, para3);
  console.log() + para1, para2, para3;
};
word();
console.log(word(para1, para2, para3)); // arrow function with parameter

// Object :

const obj = {
  properties: "value",
  properties: "value",
};
console.log(obj.properties); // accessing object by dot notetion
console.log(obj["properties"]); // accessing object by array notetion
obj.properties = "value"; // updating object by dot notetion
obj["properties"] = "value"; // updating object by array notetion
obj.newProperties = "value"; // adding new properties in the object by dot notetion
obj["newProperties"] = "value"; // adding new properties in the object by array notetion
delete obj.properties; // deleting properties by delet keyword

// array
let arrays = [15, " Sajeb", undefined, 12, true, false];
const array = ["sajeb", "kumar", "chakraborty", "let", "them"];

// Date()
const date = new Date();
document.write(date);

// conditional (if , else, if else, switch ) :
let a = 900;
let b = 500;
if (a > b) {
  document.write("any statement");
} else if (a <= b) {
  document.write("any statement");
} else {
  document.write("any stement");
}

// switch
let digit = 5;
switch (digit) {
  case "0":
    document.write("ZERO <br>");
    break;
  case "1":
    document.write("ONE <br>");
    break;
  default:
    document.write("Invalid Number <br>");
}; 


// loops (for loop, for in loop, for of loop, while loop,do while loop, for each loop) :

// for loop
for(let s = 5; s>2;s++ ){
  document.write(s);
}

// for in loop
const obj = {
  fname : 'sajeb',
  lname : 'chakraborty',
  fullName : 'Sajeb Chakraborty'
}
for( let s in obj){
  document.write(obj[s]);
};  // for in used for object


// for of loop 
let  stringofloop = 'sajeb';
for(let stringof of stringofloop){
  document.write(stringof)
} // of loop only for string

let arryaofloop =['sajeb', 45, true, undefine]
for (let arrayof of arrayofloop){
  document.write(arrayof);
}; // of loop only for array .   of loop used for array . 



// while loop 
let whileloop = 'name';
while(whileloop > 10){
  console.log('who are you?')
  whileloop++
};


// do while loop 
let name = 'sajeb'
do{
  document.write(name)
  name ++ 
}
while(name > 45); //  do while loop checks its condition after each loopi teration, not before.


// for Each Loop 
const eachLoop = ['sajeb',  'konahamaru','naruto','sasuke']
eachLoop.forEach(function(eachLoop){
  document.write(eachLoop)
});

const eachForLoop = [5,8,3,4,6,1,0,7,9];
eachForLoop.forEach(function(index,value){
  document.write(index,value)
}) ;



   // Classes 
   class computer {
    constructor (InventYear,Inventor){
      this.InventYear = InventYear
      this.Inventor = Inventor
    }
   }
   let class1 = new computer (1969, 'Charlsbabez')
   console.log(class1);

  
   // Error Handling
   try{
    function errorhand(){
      document.write('this is a text')
    }
    errorhand();
   }
   catch(handling){
    document.write(handling)
   }
   finally{
    document.write('this is finally block')
   };


   
   // regular Expressions
   let regexp = 'name is sajeb chakraborty';
   let regexpto = regexp.search(/sajeb/i);
   let exprep = regexp.replace(/name/img, 'who');
   console.log(regexpto);
   console.log(exprep);



   // Ternary Condition
   let terpoera = 45 > 12 ? true : false;
   console.log(terpoera);
   

        // Sets
const newSet = new Set(['a','b','c',1,2,3,true,undefine,null])
console.log(newSet)