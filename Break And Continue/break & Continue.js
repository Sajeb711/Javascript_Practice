// video-- learn with sumit (39) ---


//break statement এর কাজ হচ্ছে  কোন loop থেকে  বের হয়ে আসা । কোন loop পুরোটা না চালাতে চাইলে break ব্যবহার করা হয়। অর্থাৎ কোন loop একবারে বন্ধ করতে হলে break statement ব্যবহার করা হয় । আর continue statement দ্বারা কোন loop এর শুধু আলাদা কোন কিছু বাদ দিতে চাইলে continue ব্যবহার করা হয়। break এবং continue statement শুধু loop এর মধ্যে কাজ করে। 


for(let nuM = 1; nuM < 30; nuM = nuM + 1){
  if(nuM == 25){
    break;
  }
  document.write(" "+nuM);
}
// এখানে break এর কাজ হচ্ছে যদি nuM সমান ২৫ হয় তাহলে loop ২৫ এই শেষ হয় যাবে ৩০ পর্যন্ত loop টি চলবে না । 



for(let nUmber = 5; nUmber < 50; nUmber = nUmber + 5){
  if(nUmber == 30 || nUmber == 40){
    continue;
  }
  document.write("<br> " + nUmber);
}
// continue এর কাজ হচ্ছে কোন লাইন বা সংখ্যাকে বাদ দেওয়া । ঠিক এখানে ৫ থেকে ৫০ পর্যন্ত সংখ্যা print হবে ৫ করে করে । কিন্তু আমি চাই এখানে ৩০ ও ৪০ সংখ্যাটা print না করতে । তাই এখানে continue statement ব্যবহার করা হয়েছে । 