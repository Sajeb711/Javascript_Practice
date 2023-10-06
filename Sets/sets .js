// video --  learn with sumit (41 , 70)

/*
 set হচ্ছে collection of unique values . একটি সেট এ শুধু মাত্র একটিই value থাকতে পারবে । set আর array এর মধ্যে পার্থক্য হচ্ছে array এর মধ্যে একই value একের অধিক থাকে পারে কিন্তু set এর মধ্যে একই value একবারের বেশি থাকতে পারবে না। set document আকারে print করা যায় না console এ গিয়ে print করতে হয় ।  set এর ক্ষেত্রে const দিয়ে variable declare করা ভাল । কারন set এর সকল value unique হয় আর const দিয়েও unique variable declare করা হয় ।  set অনেক কয়েকভাবে তৈরি করা যায় । 
 1.//* new set () লিখে তার মধ্যে array pass করে। 
 2. //* নতুন একটি  set  তৈরি করে (new Sets () ) মধ্যে  add() এর মাধ্যমে নতুন value add করে । 
 3. //* নতুন একটি  set  তৈরি করে (new Sets () ) মধ্যে  add() এর মাধ্যমে নতুন variables add করে । 
 3.
 */
 
1.  //*assing an array to new set()
const MySet = new Set (['a ',' 4',' 44a',' s',' true',' null']);
console.log(MySet);    // create a set

for (let itera of MySet){
  console.log(itera)
}
console.log( MySet instanceof Set)
// set এর prototype এর মধ্যে Symbol.iterator () default ভাবেই রয়েছে । তাই set কে iterable করার জন্য  iterator যেমন  .values() function এর ব্যবহার না করলেও হবে ।   

2. //* create a new sets and use add() to add values
const cars = new Set ();
cars.add('BMW');
cars.add('Audi');
cars.add('Toyota');  // add values to set 
cars.add('Bently');
console.log(cars) ;  

console.log( cars instanceof Set)

3. //*  create a new sets and use add() to add variables
const tea = new Set (); // create set
const zumba = 'mouse';  
const pumba = 'Keybord';  // create new variables
const kumba = 'mouse pad';
const mumba = 'hardware';
const sumba = 'mouse software';
tea.add(zumba);
tea.add(pumba);
tea.add(kumba);  // adding variables to set 
tea.add(mumba);
tea.add(sumba);
console.log(tea);



const letters = new Set ();
letters.add('a');
letters.add('b');
letters.add('c');
letters.add('a');  // add equal elements/values . 
letters.add('b');

console.log(letters);

// set এর একই value একের অধিকবার দিলে শুধুমাত্র প্রথম value টা save হবে বাকিতে save হবে না । একই value এক এর অধিকবার দিয়ে একবারই print হবে কিন্তু এতে error দেখাবে না। 


const alphabet = new Set([' S ','t ',' U',' v', ' Womb',' x',' 99',' 22',' 66']);
alphabet.forEach(function(demand){
  document.write(demand);
}); // foreach loop in sets 



