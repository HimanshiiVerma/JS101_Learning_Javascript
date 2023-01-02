//unique item
let arr= ["july", "march",
         "july", "april", 
         "fabruary", "january","march","august","january", "october"];

let object= {};

for(let i=0;i<arr.length;i++)
{
  object[arr[i]]= 1;
}
console.log(object);