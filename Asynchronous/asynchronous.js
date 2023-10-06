//  video ---  anisul islam (78,79) ,  learn with sumit (81,82,83,84,85,)

            // callbacks
//*  যখন একটি  function আরেকটি function এর মধ্যে pass করা হয় তখন তাকে callback বলা হয় ।  


// function শুধু define করলেই সেটাকে function বলা যাবে না ।  যতক্ষণ পর্যন্ত function তাকে call() করা হবে না ততক্ষণ পর্যন্ত সেই function এর কোন অস্তিত্ত থাকবে না ।  আবার অনেকগুলো function fine করার পর function  গুলোকে যে  sequence এ  call() করা হবে function গুলো সেই ভাবেই print হবে । অর্থাৎ যদি ১ নাম্বার function ৩ নাম্বার এ call করা হয় তবে সেটা ৩ নাম্বার এই call হবে, ১ নাম্বার এ নয় । যেমন উদাহরণ হল  ঃ 

function firstFunction(){
  console.log(" this is function one")
};
const secondfunction = () =>{
  console.log(" this is function two")
};
const thirdfunction = ()=>{
  console.log(" this is function three")
};

thirdfunction();
secondfunction();
firstFunction() ;
// এখানে function গুলো সারিবদ্ধ ভাবে লেখা হয়েছে কিন্তু যখন function গুলোকে সে sequence এ  print করা হয়েছে function গুলো সেই ভাবেই print হয়েছে ।  এখানে function call() তাই সবচেয়ে জরুরী । 



//* কিন্তু এইভাবে control ছাড়া function call করলে মাঝেমধ্যে সমস্যা দেখা দিবে । তাই function এর ওপর control থাকে জরুরী । 
function print(para0){
  console.log(para0)
}
function equal(plus1,plus2,plus3, backcall){
  let all = plus1 + plus2+ plus3
  backcall(all)
}
equal(10,20,30,print)



                    // javascript asynchronous behavior 
//* javascript default  ভাবে synchronous  behave করে ।  এক এক করে  code লিখা হলে  javascript প্রথমে  synchronous function গুলোকে print করে  তারপর  asynchronous function গুলোকে print করে । যদি  synchronous function এর মধ্যে asynchronous function লিখা হয় তাহলে প্রথমে  synchronous function show হবে তারপর asynchronous function । javascript এর এটা default behavior তাই সে প্রথমে synchronous function গুলো print করে । এর  উদাহরণ হল ঃ

const one =() => {
  console.log('this is text one')
}

setTimeout(function(){
  console.log('this is text four')
}, 3000)

setInterval(function(){
  console.log('this is text five')
}, 900)

const two  = () => {
  console.log('this is text two')
}

const three = () => {
  console.log('this is text three')
}
one();
two();
three();
// এই উদাহরণে ১,৩, ৪ function হল synchronous এবং ২ নাম্বার function হল asynchronous ।  javascript এর  default behavior হল  প্রথমে প্রথমে synchronous function গুলো print করে । ঠিক এই খানেও প্রথমে সে synchronous function print  করেছে । setTomeout ও setInterval হল asynchronous function.  তাই  সেগুলো আগে থাকার পরেও সেগুলকে সবার শেষে print করেছে কারন সেগুলো asynchronous function ।  


/*
  const firstOne = setTimeout(function(){
    document.getElementById('demo1').innerHTML = 'Hello Sajeb'
  }, 2000 );

  const secondOne = setTimeout(function(){
    document.getElementById('demo2').innerHTML = 'How are you ?'
  }, 4000 );

  const thirdOne = setTimeout(function(){
    document.getElementById('demo3').innerHTML = 'what are you doing now ?'
  }, 6000 );
  
  const fourthOne = setTimeout(function(){
    let thirdif = confirm('yes or no ?')
  if(thirdif == true){
    document.getElementById('demo4').innerHTML = 'what is your life goal?'
  }
  else{
    document.getElementById('demo4').innerHTML = 'what is your future plan ?'
  }
  }, 9000 );

  const fifthOne = setTimeout(function(){
    document.getElementById('demo5').innerHTML = 'sajeb you are the best !!'
  }, 15000 ); 
*/



                 // Promise


        