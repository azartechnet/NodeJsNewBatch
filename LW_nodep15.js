//Will works in synch function
try
{
    //i=1;
    setTimeout(function(){
        console.log("Finsihsed");
        i++;
    },0);
}catch(err)
{
    console.log("An error occurred",e);
}