let startButton=document.querySelector("#start-btn");
let stopButton=document.querySelector("#stop-btn");
let currentTime=document.querySelector("#seconds");
let curTime=Date.now();

let sec=1,min=0,buttonState;
currentTime.innerHTML="Not Started Yet";

startButton.addEventListener("click",()=>{
    startButton.classList.add("hidden");
    currentTime.innerHTML="  Started  ";
    stopButton.classList.remove("hidden");

    buttonState=setInterval(()=>{
        currentTime.innerHTML=`${min} mins, ${sec++} secs`;
        if(sec%60===0){
            min++;
            sec=0;
        }
        resolve("sucess");
    },1000);
});

stopButton.addEventListener("click",()=>{
    currentTime.innerHTML="  Stopped  ";
    stopButton.classList.add("hidden");
    clearInterval(buttonState);
    min=sec=0;
    setTimeout(() => {
        startButton.classList.remove("hidden");
        currentTime.innerHTML="Not Started Yet";
    }, 1000);
});


