let a= [1,2,3,4,5];//reverse an array
let bag= " ";
// 1. initialisation/ starting point 
   // the starting point should be from last element.
    // console.log(a[4]); let i= a.length-1;
// 2. condition  i>=0;

// 3. logic/ output  lets take a empty array and push element into that array.

// 4.i--;
for(let i=a.length-1; i>=0;i--){
  bag=bag+i+" ";
}
console.log(bag);