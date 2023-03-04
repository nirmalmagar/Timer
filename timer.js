const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minsE = document.getElementById('mins');
const secsE = document.getElementById('secs');



const Dashain = "26 Sept 2023";
function countdown(){
    const newYearDate = new Date(Dashain);
    const currDate = new Date();
    const time = (newYearDate- currDate)/1000;
    const days = Math.floor(time/3600/24);
    const hours = Math.floor(time/3600)%24;
    const mins = Math.floor(time/60)%60;
    const secs = Math.floor(time%60);
    console.log(days,hours,mins,secs);


    daysE.innerHTML = days;
    hoursE.innerHTML = hours;
    minsE.innerHTML = mins;
    secsE.innerHTML = secs;
    
}
countdown();
setInterval(countdown,1000);


