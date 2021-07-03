function firstApplication(){
    console.log("welcome to first timer application");
}
var f1=setTimeout(firstApplication,1000);
var f2=setInterval(firstApplication,1000);
//clearTimeout(f1);
clearInterval(f2);