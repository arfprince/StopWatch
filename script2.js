let startButton=document.querySelector("#start-btn");
let stopButton=document.querySelector("#stop-btn");
let currentTime=document.querySelector("#seconds");

const lastStatus=document.createElement("p");
lastStatus.innerText="";
lastStatus.classList.add("text-[8px]");

let flag=true,sec,min,current,th;
currentTime.innerHTML="Not Started Yet";

function sleep(ms){
    return new Promise((resolve, _reject) => {
        setTimeout(resolve,ms);
    })
}
async function tick(){
    if(flag){
        let wait=(current+(1000*th++))-Date.now(); if(wait<1000) wait=1000; //console.log(wait);
        await sleep(wait);
        currentTime.innerHTML=`${min} mins, ${sec++} secs`;
        if(sec%60===0)
            sec=0,min++;
        tick();
    }
    else{
        currentTime.innerHTML="Not Started Yet";
        lastStatus.innerText=`Previous record was ${min} mins, ${sec-2} secs.`;
        currentTime.appendChild(lastStatus);
    }
}
startButton.addEventListener("click",()=>{
    currentTime.innerHTML=`${min} mins, ${sec} secs`;
    if(!flag) flag=true;
    sec=min=0;
    th=1;
    current=Date.now();
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