let str="go%.a$.";
let newStr=" ";
for(let i=0;i<=str.length;i++)
  {
    if(str[i]=="%")
    {
      newStr=newStr+"h";
    } 
    else if(str[i]=="$")
    {
      newStr=newStr+"n";
    } 
    else if(str[i]==".")
    {
      newStr=newStr+" ";
    } 
    else{
      
    }
  }