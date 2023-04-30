const readlineSync = require("readline-sync")


let myArray = ["testing", "this", "function"];

let animate = function(array: any, fps: any, callback: any){
    let numberOfFrames = array.length;
    let index = 0;
    let animationLoop = function(){
        console.clear();
        console.log(array[index]);
        index++;
        numberOfFrames--;
        if(numberOfFrames  === 0){
            clearInterval(animationLoopInterval);
            callback();
        }
    }
   let animationLoopInterval = setInterval(animationLoop, 1000/fps);
};


let next = function(){
    let answer = readlineSync.keyInSelect(["Continue", "Exit"]);
    if(answer === 0){
        console.log("Unfortunately this runs from input that came during the animation")
    }else if(answer === 1){
        process.exit();
    }
};

animate(myArray, 1, next);