let str="I am Iron Man";
let sum=0;
let count=0;
for(let i=0;i<=str.length-1;i++)
  {
    if(str[i]==" ")
    {
      count++;
      count=count*count;
      sum=sum+count;
    }
  }
console.log(sum);