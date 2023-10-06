// Video ---   Learn With Sumit ....(61)

//  নিচের  word এ  "Javascript" শব্দটি কয়বার ব্যবহার  হয়েছে ? প্রথমবার  "Javascript" কত নাম্বার পজিশনে পাওয়া  গেছে ? 

const word = "The interesting behaviour of a system tends to be dependent on changes to the state of the system as a whole, or to its components.The kind of interaction a Web application might include usually involves short - term changes of state in which it is only important to know that they have occurred.That is the change of state is not intended to persist; it happens and it is not stored explicitly in the system.Such a change is indicated by an event.In the context of JavaScript, an event is an action that occurs in a browser that JavaScript provides facilities to detect and so act upon. Events are generally related to user interactions with the document, such as clicking and pointing the mouse, although some are related to changes occurring in the document itself.Programming JavaScript to handle such events provides for many styles of human - computer interaction.In short, programming JavaScript event handlers is crucial if you want interactive Web pages.When this style of programming dominates yourdesign, it is known as event - based programming. "

const findWord = word.match(/javascript/gi);
document.write(findWord + '<br>');
// .match দিয়ে পাওয়া যাবে কতগুলো  আছে । 

const wordPosition = word.search(/javascript/gi)
document.write(wordPosition + '<br>') ;
// .search দিয়ে পাওয়া যাবে কত নাম্বার position এ আছে । 





// input : lineraSearch( [ 'a' ,'b' , 'c', 'd' ,'c' ], 'c')
// output : 2 or not found
// problem : lineraSearch() function টি implemnt করে দেখান । 

function lineraSearch( arr, val){
  const length =  arr.length
for (let i = 0; i < length ; i++){
  if (arr [i] === val){
    return i ;
  }
}
return "not found ";
}
document.write(lineraSearch ([ 'a' ,'b' , 'c', 'd' ,'c' ], 'c','<br>'));




// কোন array থেকে কি ভাবে সব থেকে বড় string খুঁজে বের করব এবং তার index নাম্বার দেখব । 

