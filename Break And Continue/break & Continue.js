
// কোন loop পুরোটা না চালাতে চাইলে break ব্যবহার করা হয়। অর্থাৎ কোন loop বন্ধ করতে হলে break statement ব্যবহার করা হয় । কোন loop এর শুধু আলাদা কোন কিছু বাদ দিতে চাইলে continue ব্যবহার করা হয়। break and continue statement শুধু loop এর মধ্যে কাজ করে। 


for(let noy = 30; noy <= 3000; noy = noy + 1){
  if(noy == 100){
    break;
  }
  document.write(" "+ noy+ "<br>");
  
}

for(let noy = 133; noy <= 3000; noy = noy + 300){
  document.write(" "+ noy+ "<br>");
  continue;
}