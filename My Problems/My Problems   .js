
//   problem and Solve 1 ==>
//* যখন কোন function এর মধ্যে  properties আকারে লিখা হয় তখন  তাকে methods বলা হয় ।  যেমন ঃ 

const obj = {
  firstName : 'Sajeb',
  lastName : 'Chakraborty',
  fullName :  function name() {
    return this.firstName + this.lastName
  }
}
obj.fullName()



//   problem and Solve 2 ==>
//* Nested Object : কোন obejct এর  মধ্যে আরও object তৈরি করাকে nested object বলা হয় । 
const nested_obj = {
  whatIsIT : 'object but nested',
  whereUsed : 'in javascript object',
  bottle : {
    where_is_it : 'On the table',
    who_won_it : 'grate Sajeb Chakraborrty'
  },
  laptop : {
    name : 'hp probook',
    ram : '4 GB'
  }
};
console.log(nested_obj.whatIsIT);
console.log(nested_obj.laptop);
// এখানে bottle ও laptop হল nested object কারন এই object গুলো অন্য আরেকটি object এর মধ্যে আছে । 



//  problem and Solve 3 ==>
//* parameter and arguments :
function argupara(para1,para2){
  return para1 * para2
}
console.log(argupara(4,5))
//  এখানে para1 ও para2 হল parameter এবং  4 ও 5 হল argument . 



//  problem and Solve 4 ==>
//* callback function : যখন কোন  function এর  parameter হিসেবে  আরেকটি  function যায় তখন তাকে callback function বলা হয় । 

function sleep(weakup){
  console.log(`sajeb is sleeping . he ${weakup()} 9 am`)
}
sleep(function(){
  return 'wakeup at '
})
// এখানে sleep function এর মধ্যে যে parameter দেওয়া হয়েছে সেটার argumnet হিসেবে function দেওয়া হয়েছে । সুতরাং sleep function এর argument এর মধ্যে যে function দেওয়া হয়েছে তা হল callback function  