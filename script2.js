let startButton=document.querySelector("#start-btn");
let stopButton=document.querySelector("#stop-btn");
let currentTime=document.querySelector("#seconds");

let flag=true,sec,min;
currentTime.innerHTML="Not Started Yet";

function sleep(ms){
    return new Promise((resolve, _reject) => {
        setTimeout(resolve,ms);
    })
}
async function tick(){
    if(flag){
        await sleep(1000);
        currentTime.innerHTML=`${min} mins, ${sec++} secs`;
        if(sec%60===0)
            sec=0,min++;
        tick();
    }
    else
        currentTime.innerHTML="Not Started Yet";
}
startButton.addEventListener("click",()=>{
    currentTime.innerHTML=`${min} mins, ${sec} secs`;
    if(!flag) flag=true;
    sec=min=0;
    tick(); 

    startButton.classList.add("hidden");
    stopButton.classList.remove("hidden");
    currentTime.innerHTML="  Started  ";
});

stopButton.addEventListener("click",()=>{
    flag=false;
    currentTime.innerHTML="  Stopped  ";
    stopButton.classList.add("hidden");
    startButton.classList.remove("hidden");
});