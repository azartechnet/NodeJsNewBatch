function Number(x,y)
{
    if(x>y)
    {
        console.warn(`${x} is greater ${y}`)
    }
    else
    {
        console.warn(`${x} is less than or equal to ${y}`)
    }
}
//store number or variable
x=100
y=50

Number(x,y)