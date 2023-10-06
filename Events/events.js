//      video --- learn with sumit  (94)

// কোন function call করার জন্য events ব্যবহার করা হয় ।  events টা মূলত html থেকে আসে । html কোন tag এ javascript এর events দেওয়া থাকে । আর সেই html এর ওপর click বা hover বা অন্য কিছু করলে সেই events টা fire হবে ।  event তৈরি করে html  এবং javascipt দিয়ে সেই event  response করানো হয় ।

function s() {
  document.write(Date());
}

                    //*  assigh events using html dom
const addingAttribute = document.querySelector("#addAttribute");
addingAttribute.onclick = () => {
  document.write("attribute added by html dom");
};
const addingAttributeagain = document.querySelector("#addAttributeAgain");
addingAttributeagain.onclick = () => {
  document.write("attribute added by html dom");
};
// dom দিয়ে html এর শুধু text ই পরিবর্তন করা যায় না  html এর মধ্যে নতুন  attribute ও তৈরি করা যায় ।  যেমন ওপরের দুই উদাহরণ । ওপরের উদাহরণ এ html এর মধ্যে কোন onclick addtribute দেওয়া হয় নি । সেই onclick  attribute javascript এর মাধ্যমে বশিয়ে দেওয়া হয়েছে । 

function sa() {
  document.write("This is Double click events");
}

function saj() {
  document.write("This is Right click events");
}

function saje() {
  document.write("This is Mouse Hover events");
}

function sajeb() {
  document.write("This is Mouse out events");
}

function sajebc() {
  document.write("This is Mouse out events");
}

function sajebch() {
  document.write("This is Mouse out events");
}

function onmouseover(){
  document.write('hello world!')
}