// video --- learn with sumit 

/* 
javascript boolean সবসময় শুধু দুই তা value দেয় । 
1. True 
2. False  

javascript এ সকল value ই true . আর কোন variable এ যদি value না দেওয়া হয় তবে সেটা flase . নিচে উদাহরণ সহ দেওয়া হল ঃ--

*/

const num_1 = 45.65;
document.write(`Number 1 = `+ Boolean(num_1)+ '<br>');

const num_2 = -1.50;
document.write(`Number 2 = `+ Boolean(num_2)+ '<br>');

const num_3 = 0;
document.write(`Number 3 = `+ Boolean(num_3)+ '<br>');

const num_4 = -0;
document.write(`Number 4 = `+ Boolean(num_4)+ '<br>');

// এখানে ওপরের ১ম  ও ২য উদাহরণ এ নাম্বার define করে দেওয়া আছে তাই সেটা  true দেখাচ্ছে । সেটা plus বা minus হওয়ার পরেও । কিন্তু ৩ ও ৪ নং উধাহরন এ নাম্বার define করে দেওয়া হয়নি তাই সেটা false দেখাচ্ছে । সেটা plue বা minus যাই হোক না কেন । boolean data type এ ০ কে কোন নাম্বার হিসেবে সরাসরি গণনা করা হয় না ।  

const full_string = 'Sajeb';
document.write(` Full string = `+ Boolean(full_string) + `<br>`);

const mt_string = '';
document.write(`Empty string = `+ Boolean(mt_string) + `<br>`);
// boolean data type এ empty string কে false ধরা হয় । 

let unde;
document.write(`Undefine = `+ Boolean(unde) + '<br>');
// undefine value boolean এ false দেখায় । 

const nuLL = null ;
document.write(`Null = `+ Boolean(nuLL) + '<br>');
// null data type boolean এ false দেখায় । 

const nAn = 10 * 'sajeb'
document.write(`NaN = `+ Boolean(nAn) + '<br>');

// Nan data type boolean এ false দেখায় । 