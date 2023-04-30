
/* আমরা জানি javascript এর সব কিছুই object । date() ও একটি javascript object । javascript এ date() object লিখের জন্য new date() এই ভাবে লিখতে হয় । date() এর মাধ্যমে সময় জানা যায় । date() object তৈরি করার জন্য ৪ টি উপায় আছে । 

1. new date();
2. new date(year, month,day,hours,minutes,second,milliscond);
3. new date(milliscond);
4. new date(date string);
*/


    //new date()
const dat = new Date();
document.write(dat + '<br>');


    //new date(year, month,day,hours,minutes,second,milliscond)

// 7 number specify year,month,day,hours,minutes,second,milliscond 

const ymdhmsm = new Date(2023,4,25,18,45,55,0);
document.write(ymdhmsm + '<br>');
// javascript এ index শুরু হয় ০ থেকে। আমরা ৪ মাস বলতে এপ্রিল কে বুঝি । কিন্তু javascript এ ০ থেকে গণনা শুরু হয় তাই এখানে ৪ বলতে মার্চ মাস কে বোঝায় । অর্থাৎ যে মাস দিবে তার চেয়ে এক মাস কম দিবে ।  


// 6 number specify year,month,day,hours,minutes,second 
const ymdhms = new Date(4523,10,30,28,45,55);
document.write(ymdhms + '<br>');

// 5 number specify year,month,day,hours,minutes 
const ymdhm = new Date(9823,3,13,10,45);
document.write(ymdhm + '<br>');

// 4 number specify year,month,day,hours 
const ymdh = new Date(1428,7,29,18);
document.write(ymdh + '<br>');

// 3 number specify year,month,day
const ymd = new Date(9721,5,25);
document.write(ymd + '<br>');

// 2 number specify year,month
const ym = new Date(2029,8);
document.write(ym + '<br>');
 
       //new date(milliscond)

// 1 number specify millisecond not year 
const y = new Date(2023);
document.write(y + '<br>');

// শুধু মাত্র একটি parameter বা বছর দিলে সেটা javascript milliscecond ধরে নিবে । তাই কমপক্ষে বছর ও মাস দিতে হবে । যদি শুধু millisceond চাই তাহলে একটি parameter দিলেই হবে।  

    //Previous century --
const previousCentury1 = new Date(45,12,28);
document.write(previousCentury1 + '<br>');

const previousCentury2 = new Date(71,11,16);
document.write(previousCentury2 + '<br>');


     //new date(date string);

const dateString = new Date(`september 17,2000 4:30:00`);
document.write(dateString + '<br>');



              // Date Get Methods (local time and Date) --

// নিচের যে get method  গুলো আছে সেগুলো নিজের দেশের তারিখ ও সময় দিবে । যদি international date ও time দেখতে চাইলে অন্য পদ্ধতি অনুসরন করতে হবে। সেগুলো নিচে আছে।  

  // Get Time ()
const gettime = new Date();
document.write(gettime.getTime() + '<br>');

// GetFullYear -
const fullyear = new Date();
document.write('Year = '+ fullyear.getFullYear() + '<br>');


// GetMonth -
const month = new Date();
document.write('Month = '+ month.getMonth()+ '<br>');

// month এখানে প্রকৃত মাস থেকে ১ কম দেখাচ্ছে কারন javascript এ index গণনা শুরু হয় ০ থেকে । এই সমস্যা সমাধানের উপায় হল .getmonth() এর সাথে ১ যোগ করা অথবা নিচের পদ্ধতি অনুসরণ করা । 

const d = new Date();
const monts = ['January','February', 'March','April','May','June','July','August','September','October','November','December'];
document.write('Month = '+ monts[d.getMonth()] + '<br>');


   //getDate -
   const getdate = new Date();
document.write('Dates = '+ getdate.getDate() + '<br>');

//getHour -
const getHour = new Date();
document.write('Hours = '+ getHour.getHours() + '<br>');

//getMinutes -
const getminute = new Date();
document.write('Minutes = '+ getminute.getMinutes() + '<br>');

//getSecond -
const getsecond = new Date();
document.write('Seconds = '+ getsecond.getSeconds() + '<br>');

//getMillisecond -
const getMillisecond = new Date();
document.write('Millisecond = '+ getMillisecond.getMilliseconds() + '<br>');

//getday -
const getday = new Date();
document.write('Days = '+ getday.getDay() + '<br>');
// ০ মানে রবিবার আর ৬ মানে শনিবার । 

const da = new Date();
const day = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.write('Days = '+ day[da.getDay()] + '<br>');


// UTC Date Method (International Time and date)--

//UTC (Universal Time Coordinsted) is the same as GMT (Greenwich Mean Time) .. 

// Get UTC Hours ()
const getUTChour = new Date();
document.write('UTC Hour = '+ getUTChour.getUTCHours() + '<br>');

  //getutcDate -
const getutcdate = new Date();
document.write('UTC Dates = '+ getutcdate.getUTCDate() + '<br>');

// GetMonth -
const utcmonth = new Date();
document.write('UTC Month = '+ utcmonth.getUTCMonth() + '<br>');



         // Date Set Method --

  // Set Full Year --

const setyear = new Date()
document.write('Set Full Year = '+ setyear.setFullYear(2023) + '<br>');

  //set Month-
const setmonth = new Date()
document.write('Set Month = '+setmonth.setMonth(11))