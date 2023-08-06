function display(val)
{
    document.getElementById("show").value+=val;
}

function clr()
{
    let a=document.getElementById("show").value ;
    a=a.slice(0,-1);
    document.getElementById("show").value=a;
    
}

function solve()
{
    let x=document.getElementById("show").value;
    let y=eval(x);
    document.getElementById("show").value=y;
}