function myMethod(){
   // return 123;//return 123
   console.log("welcome-1")
}
console.log(myMethod());//output will show 123

function unDefinedValue()
{
  //return 321;
  console.log("Welcome")
}
console.log(unDefinedValue());//output will show undefined

setTimeout(function(){
    console.log("Finished");
},0);
console.log("Waiting");