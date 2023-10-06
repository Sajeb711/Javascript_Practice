// video ..... learn with sumit (53,78,79,80),,  stack learner (100,১০৪),,  


                                                 // class Intro :
// javascript classes হচ্ছে javascript object এর কাঠামো ।  class হল object এর template।  class কোন object নয় ।  class  হচ্ছে  এমন একটি  factory function যা অনেক object তৈরি করার ক্ষেত্রে ব্যবহার করা হবে । কিন্তু object তৈরি করার  ক্ষেত্রে কোন code dupicate করা হবে না ।   object oriented language যেমন (java, c) তে class হল সাধারন বিষয় । javascript এর মধ্যেও class এর মাধ্যমে  object oriented এর ব্যবহার  শুরু হয়ে যায় ।  javascript এ class  আনার কারন হল javascript অন্য  object orented programming lagauge এর মতো object তৈরি করতে পারে । 

class studentIdentity {
  constructor(name,department,roll,gender){
    this.name = name
    this.department = department
    this.roll = roll
    this.gender = gender
  }
}
let  identity1 = new studentIdentity('Sajeb Chakraborty' , 'Ecomomics', 2125416, 'Male');
let  identity2 = new studentIdentity('Fariha Akter Mim' , 'Islamic history', 2540794,'Female');
let  identity3 = new studentIdentity('Sohorab Hossain' , 'Economics', 3125461 , 'Male');
console.log(identity1,identity2,identity3);

//  class ব্যবহার করার জন্য প্রথমে class keyword ব্যবহার  করতে হবে , তারপর class এর একটা নাম দিয়ে দ্বিতীয় বন্ধনি {} চালু করতে হবে । তারপর  দ্বিতীয় বন্ধনির {} মধ্যে constructor keyword ব্যবহার করে প্রথম বন্ধনি () দিতে হবে । তারপর  দ্বিতীয় বন্ধনি {} দিতে হবে । 


class mobile {
  constructor (MobileName,MobileColor,MobileBettery,MobileOriginCountry,MobileCamera,MobileProcessor) {
    this.MobileName = MobileName
    this.MobileColor = MobileColor
    this.MobileBettery= MobileBettery
    this.MobileOriginCountry = MobileOriginCountry
    this.MobileCamera = MobileCamera
    this.MobileProcessor =MobileProcessor 
  }

  year (people) {
    console.log(mobile2.MobileName + ' founded in 2006, in ' + mobile2.MobileOriginCountry+ people)
  }  // class এর মধ্যে আলাদা করে এক বা একাধিক function তৈরি করা যায় আবার সেই function এর parameter ও set করা দেওয়া যায়। 

}
const mobile1 = new mobile ('Samsung', 'Black','6000 mh','North Korea', '108 mega Pixel' , 'Octa Cora');
const mobile2 = new mobile ('iphone' , 'White' , '4000 mh' , 'America' , '12 Mega pixel' ,'Apple A12 Bionic');
const mobile3 = new mobile ('Oppo' , 'Pink' , '5000 mh' , 'China', '48 Mega Pixel' ,  'Helio');
const mobile4 = new mobile ('Nokia' , 'Black' , '4500 mh', 'Hungry' , '32 mega pixel', 'Quad qora');

console.log(mobile1,mobile2,mobile3,mobile4,mobile2.year(' By bunch of Idiots'))



                 //  class Inheritance : 
// Inheritance অর্থ হল বংশগতি ।  একটি class এর কোন কিছু অন্য class এ ব্যবহার করাকে class Inheritance বলে । আমার যদি ৩ টা class থাকে এবং সেই class গুলোর একটির value অন্য একটি class এ ব্যবহার করতে চাইলে class Inheritance করতে হয় । class Inheritance এ   parents class থাকে যেখান থেকে অন্য  class  গুলো তাদের value  extends করে । 
class computer {
  constructor(brand) {
    this.brand = brand
}
  laptop() { 
    return "my laptop name is " + this.brand
}
}
class computer2 extends computer {
  constructor (brand,model){
    super(brand);
    this.pcModel = model
  }
  comModel(){
    return this.laptop() + " and my laptop model name is " + this.pcModel
  }
}
let mypc = new computer2 ( 'hp' ,'ProBook 4540s')
console.log(mypc)
document.getElementById('demo').innerHTML = (mypc.comModel())
//*  প্রথমে একটি parent class তৈরি করতে হবে । সেই class এর মধ্যে যা চাই তা  লিখতে হবে । তারপর child class তৈরি করতে হবে ।  parent class থেকে data inherite করতে হলে child class এ  extends keyword ব্যবহার করতে হবে । আবার  child class এর মধ্যে super() method  অবশ্যই দিতে হবে । 

/*

class firstmainMan {
  constructor(GreatGrandFather){
    this.GreatGrandFather = GreatGrandFather
  }
}
class secondmainMan extends firstmainMan {
  constructor(GreatGrandFather,GrandFather){
    super(GreatGrandFather)
    this.GrandFather = GrandFather
  }
  gfname(){
    return this.GrandFather + " father name is " + this.GreatGrandFather
  }
}
class thirdmainMan extends secondmainMan {
  constructor(GrandFather,father){
    super(GrandFather)
    this.father = father
  }
  fath(){
    return this.father + " father name is " + this.GrandFather
    
  }
}
class fourthmainMan extends thirdmainMan {
  constructor(father,GrandFather,GreatGrandFather){
    super(father,GrandFather,GreatGrandFather)
    this.son = son
  }
  sOn(){
    return this.son + " father name is " + this.father
  }
}
const ggf = new firstmainMan('sakib')
console.log(ggf)
const gf = new secondmainMan('makib')
console.log(gf)
const f = new thirdmainMan('sajeb')
console.log(f)
const s = new fourthmainMan('lakib','a','b','v')
console.log(s)
console.log(secondmainMan.gfname()) */

class cars{
  constructor(FirstcarName){
    this.carName = FirstcarName
  }
}

class  car extends cars{
  constructor(FirstcarName,SecondcarName){
    super(FirstcarName)
    this.SecondcarName = SecondcarName
  }
  cardet(){
    return this.SecondcarName + ' is better then ' + this.FirstcarName
  }
}
let  adi = new car (' Audi '," BMW ")
console.log(adi.cardet())


                // static method
class MyClass {
 static myStaticMethod() {
  return 'Hello';
}
static get myStaticProperty() {
  return 'Goodbye';
}
}
console.log(MyClass.myStaticMethod()); 
 console.log(MyClass.myStaticProperty); 
                 