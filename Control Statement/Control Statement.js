
let num=656;
if(num%2 == 0)
document.write("Even" + "<br>")

else
document.write("Odd"+ "<br>")



let num1 = prompt("Enter Num1 : " )
let num2 = prompt("Enter Num2 : " )
let num3 = prompt("Enter Num3 : " )

//কোনটি সবচে বড় নাম্বার তা এখানে পাওা যাবে। 

if (num1>num2 && num1>num3)
document.write( "Large Number = " + num1 + "<br>")

else if (num2>num3 && num2>num1)
document.write( "Large Number = " + num2 + "<br>")
else
document.write( "Large Number = " + num3 + "<br>") ;




var letter = prompt("Enter Letter : ")

letter =  letter.toLowerCase()

if (letter=="a" || letter=="e" ||letter=="i" ||letter=="o" ||letter=="u" )
document.write("Your Input Letter Is  Vowel")

//এখানে user বড় হাতের vowel letter লিখলে সেটা consonent letter দেখাবে। কারন এখানে ছোট হাতের vowel letter input দেওয়া আছে। যদি user বড় হাতের vowel লিখলেও ছোট হাতের vowel দেখাবে এর উপায় হল if এর মধ্যে ছোট হাতের সাথে বড় হাতেরও letter লিখে দেওয়া অথবা আলাদা ভাবে tolowercase ব্যবহার করা যার যার ফলে user বড় হাতের vowel লিখলেও সেটা convert হয়ে ছোট হাতের হয়ে যাবে।  

else 
document.write("Your Input Letter Is  Consonant");

