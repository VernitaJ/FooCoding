let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);
console.log(myString.length);

var newString = myString.replace(/,/g, " ");
console.log(newString);

myString = newString

console.log(myString);
