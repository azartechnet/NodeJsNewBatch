var i=1;
setTimeout(function(){
    console.log("Finished");
    i++;
},2000);
if(i==1){
    console.log("Waiting");
}
else
{
    console.log("I value did not change..");
}