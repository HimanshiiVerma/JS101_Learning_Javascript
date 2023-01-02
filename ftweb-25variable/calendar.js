let date=0;
for(let month=1; month<=12; month++){

  if(month==2){
    date= 28;
  }
  else if(month== 4 || month==6 || month==9 || month==11){
    date=30;
  }
  else{
    date=31;
  }
  
  for(let day=1; day<=date; day++){
    console.log(day+"-"+month);
  }
} 