// const promises = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("new eror"));
//     },3000);
// }).catch((e)=>{
//     console.log(e);
// }).then((e)=>{
//     console.log(e);

// });

function sleep(ms){
    return new Promise((_resolve, reject) => {
        setTimeout(()=>{
            reject("wa");
        },ms);
    });
}

            
// sleep(1000).then(()=>{
//     console.log("1");

//     sleep(2000).then(()=>{
//         console.log("2");

//         sleep(3000).then(()=>{
//             console.log("3");
//         })
//     })
// });

let d=Date.now(); console.log((d));
async function main(){
    try {
        await sleep(2000);
        console.log("run sucess");
    } catch (error) {
        console.log(error);
    }
}

main();