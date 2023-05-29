// dom বা document object module হল html এর tag গুলোকে পরিবর্তন করা।  javascript দ্বারা  html এর সকল tag এর value পরিবর্তন করা যায় । html এর কোন tag এর value বা tag কেই পরিবর্তন করতে হয় তাহলে প্রথমে html কে select করতে হয় । javascript এ html কে প্রধানত তিন ভাবে select করা হয়। ১। id এর মাধ্যমে ২. class এর মাধ্যমে ৩. tag name এর মাধ্যমে । আবার html select করার জন্য queryselector বা queryselectorall ব্যবহার করা হয় ।  নিচে এদের উধাহরন দেওয়া হল ঃ- 

// 1. ID এর মাধ্যমে :
document.getElementById("h4").innerHTML = "I am Sajeb Chakraborty";
document.getElementById("h3").innerHTML = "GoodBye GoodBye";


// 2. CLASS এর মাধ্যমে :
document.getElementsByClassName("para1")[0].innerHTML = "This Not paragraph 1";
document.getElementsByClassName("para2")[0].innerHTML = "This Not paragraph 2";

// 3. TAG NAME এর মাধ্যমে :
document.getElementsByTagName('a')[0].innerHTML = "Facebook";
document.getElementsByTagName('a')[1].innerHTML = "Instagram";


// QuerySelector বা QuerySelectorAll এর মাধ্যমে :
document.querySelector('#tens1').innerHTML = 'I am mortal';
document.querySelector('.tend2').innerHTML = 'I am mortal';
document.querySelector('#tens3').innerHTML = 'I am not mortal';

// innerText
document.getElementById('tends2').innerText;











function loop(){
for( let i = 100; i <= 100000; i = i + 100){
  document.write(i + "<br>");
}
}

