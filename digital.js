function UpdateTime(){
    let  datetime= new Date();
    let  hours= datetime.getHours();
    let  minutes= datetime.getMinutes();
    let  seconds= datetime.getSeconds();
    let  am_or_pm= document.getElementById("am-or-pm");
  
    if(hours >= 12){
      am_or_pm.innerHTML ="PM";
      
    }
    else{
          am_or_pm.innerHTML ="AM";
      
    }
    if(hours>=13){
      hours-=12; 
    }
  
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML =seconds;
    
  }
  setInterval(UpdateTime, 1000);