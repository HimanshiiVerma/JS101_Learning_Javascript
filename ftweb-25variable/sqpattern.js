for(let hori=1;hori<=10;hori++)
  {
    let a=" ";
    for(let vert=1;vert<=10;vert++)
      {
        if(hori==1 || hori==10)
        {
          a=a+"*";
        }
          else if(vert==1 || vert==10)
          {
            a=a+"*";
          }
        else
        {
          a=a+" ";
        }
      }
    console.log(a);
  }