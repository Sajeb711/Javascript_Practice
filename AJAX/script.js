// video ---     learn with sumit ---    (117,118,119,120,121)





// ajax এর অর্থ হল " Asynchronous JavaScript and XML " ।  ajax এর মধ্যে  server থেকে data request করা যায়  responce responce করা যায় । এছাড়াও ajax দ্বারা  server থেকে data read করা যায় page load হওয়ার পর  , কোন web page update ও করা যায়  page reloading ছাড়াই  এবং web server এ data send ও করা যায়  ।  অর্থাৎ data communication এর  জন্য সাধারনত ajax ব্যবহার করা হয় ।   ajax এর output দেখার জন্য browser এর network এ গিয়ে দেখতে হবে । 


function requestSentData(){

  const requestData = new XMLHttpRequest() ;

  requestData.onload = function (){
    const displayData = document.getElementById("displayData") ;
    displayData.innerHTML = requestData.responseText ;

    console.log(this.getAllResponseHeaders()) //*  server থেকে data request করার সময় সাথে কিছু header ও আসে । সেই সব header একসাথে দেখার জন্য getAllResponseHeaders() method ব্যবহার করা হয় । 

    console.log(this.getResponseHeader("last-modified")) //* server থেকে আসা header এক এক করে দেখার জন্য getResponseHeader() method ব্যবহার করা হয় ।  
  };

  requestData.open("GET", "/AJAX/Data/ajax Data.txt") ;//*  open method এর তৃতীয় parameter এ বলে দেওয়া যায়  request টা synchronous হবে না  asynchronous হবে । default ভাবে এটা  asynchronous বা true থাকে ।  এখানে true বলতে asynchronous এবং false বলে synchronous। value যদি false করে দেওয়া হয় তাহলে  এটা synchronous behabiour করবে ।     

  // requestData.setRequestHeader("Name", "Sajeb Chakraborty") //* server এ data পাঠানোর  manually ভাবেও header server এ পাঠান যায় । এছাড়াও browser default ভাবে server এ header  পাঠায় । 

  requestData.send() ;

  // requestData.abort(); //* server  এ  পাঠান request  যদি সাথে সাথে cancel করতে হয় তাহলে abort method ব্যবহার করা হয়  । 

}
//* server থেকে তথ্য  এনে web page এ show করানোর জন্য কয়েকটি ধাপ রয়েছে । প্রথমে, server এ request পাঠাতে হবে এই জন্য  request তৈরি করতে হবে  new XMLHttpRequest constructor এর মাধ্যমে  ।  দ্বিতীয়, বলে দিতে হবে  server থেকে response চলে আসার পর কি করব তা বলে দিতে হবে onload নামক callback function এর মধ্যে এবং এই function response পাওয়ার পর call হবে ।  তৃতীয়ত, বলে দিতে হবে কোন URL এ request করা হবে বা  server এর কোন file এ request করা হবে তা  open() method এর মধ্যে বলে দিতে হবে । ( open() নামক এই method এর  parameter এর মধ্যে বলে দিতে হবে  । এটার প্রথম parameter এ দিতে হবে GET ,POST ,PUT , PATCH ,DELET , OPTIONS  ইত্যাদি নামের method গুলোর মধ্যে একটি method।  এটার দ্বিতীয় parameter এ বলে দিতে হবে কোথায় থেকে data আনব সেটার URl টা  ) ।    চতুর্থত , বলে দিতে হবে  request send করতে send() method এর মাধ্যমে ।  


