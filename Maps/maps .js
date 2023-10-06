// video -- learn with sumit (42 , 71 )---

/* map আর object প্রায় অনেকটা একই । map key value pair ধরে রাখে আর সেই key যেকোনো datatype এর হতে পারে। key value হচ্ছে ,একটি object এর যে properties থাকে তাকে key বলা হয় আর properties গুলোর যে value থাকে তাকে value বলা হয় । map  ও object এর মধ্যে পার্থক্য   map এর key গুলোর যেকোনো datatype হতে পারে। অর্থাৎ object এ যে properties থাকে সেগুলোর key গুলোর datatype শুধু মাত্র string হতে পারবে অন্য কোন datatype হতে পারবে না। কিন্তু maps এর key গুলোর datatype গুলো যেকোনো type এর হতে পারে। map এ একই key একের অধিক বার দেওয়া যাবে না তবে একের অধিক বার value দেওয়া যাবে।  map ও object এর মধ্যে আরেকটি  পার্থক্য হল  object  তার key গুলোর  order জরুরী নয় কিন্তু map এর ক্ষেত্রে  order এ map  লিখা হবে সেই আকারেই map print হবে ।  
javascript map তৈরি  করার ২ টি পদ্ধতি আছে ।  যেমন ঃ 
//*1. new Map() লিখে তার  মধ্যে  array pass  করা । 
//*2.  প্রথমে একটি নতুন map তৈরি করে তার মধ্যে  Map.set() method ব্যবহার করা । 
*/

1.
const fruits = new Map([
  ['Orange', 230],
  ['Pineapple', 540],
  ['Banana', 120],
  ['Apples', 225],   // Creating New map type 1
]);  
fruits.delete('Apples'); // কোন key বাদ দিতে চাইলে delet ব্যবহার করতে হবে।  
console.log(fruits);


fruits.get('Sajeb');
console.log(fruits.get("Apples"));
// get method সরাসরি console এ গিয়ে লিখতে হবে । তবেই তার value দেখা যাবে । 
console.log(fruits.has('orange')); //* has () method returns true if a key exist in the map /

2.
const persoiden = new Map();
persoiden.set('Sajeb','Bangladesh');
persoiden.set('Mukesh','India');
persoiden.set('Kate','England');
persoiden.set('martin','America');  // *creating map  type 2
persoiden.set('martin','America');  //* no duplicate allowed
persoiden.set('Kate','Gremany'); //* by .set() method  can be changed existing value .
persoiden.delete('Sajeb') // * কোন key বাদ দিতে চাইলে delet ব্যবহার করতে হবে।        
console.log(persoiden);
console.log(persoiden.has('Kate'));

console.log(persoiden.size);
// Size Property দ্বারা  map এর মধ্যে কত গুলো elements আছে তা জানা যায় । 

const drugs = new Map()
drugs.set('Napa',400);
drugs.set('Crema Gel ',40);
console.log(drugs.clear()); //* clear() mothods remove all emements from maps . 
console.log(drugs)


const drink = new Map ();
drink.set('Beer');
drink.set('Vodka');
drink.set('Brandee');
drink.set('Rum');
drink.set('Taqela');
drink.forEach(function(drink,key){
  console.log(key,drink);
});
console.log(drink.size);
console.log(drink instanceof Map)
//  instanceof দ্বারা কোন  কিছুর আসল data type জানা যায়  । 


