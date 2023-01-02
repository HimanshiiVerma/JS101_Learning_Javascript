let lower=["a","b","c","d","e"];
let upper=["A","B","C","D","E"];
let character="e";
for(let i=0;i<lower.length;i++)
{
  if(character==lower[i])
  {
  character=upper[i];
}
}

console.log(character);