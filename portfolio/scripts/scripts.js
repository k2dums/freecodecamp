setInterval(showTime,1000);

function showTime(){
    let today=new Date();
    let hour=today.getHours();
    let min=today.getMinutes();
    let sec =today.getSeconds();
    var am_pm="AM";

    if(hour>12){
        hour -=12;
        am_pm="PM";
    }
    
    if(hour==0){
        hour=12
        am_pm="AM";
    }
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    let currentTime=hour+ ":" + min + ":"+sec +" "+am_pm;
    document.getElementById("clock").innerHTML=currentTime;
}


function showDate(){
    let today=new Date();
    let day=today.getDate();
    let year=today.getUTCFullYear();
    let month=today.getMonth()+1;
    let today_Date=day+"-"+ month;
    document.getElementById("date").innerHTML=today_Date;
    document.getElementById("year").innerHTML=year;


}
showDate();
showTime();