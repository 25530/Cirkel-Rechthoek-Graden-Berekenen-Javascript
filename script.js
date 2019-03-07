function calculate()
{
    var field1=document.getElementById("num1").value;

    var result=(Math.PI)*parseFloat(field1)*parseFloat(field1);

    if(!isNaN(result))
    {
        document.getElementById("antwoord").innerHTML="Oppervlake: "+result;
    }
    else{
        window.alert("Je input is incorrect!");
    }

    var field1=document.getElementById("num1").value;

    var result=(Math.PI)*(2)*parseFloat(field1);

    if(!isNaN(result))
    {
        document.getElementById("antwoord2").innerHTML="Omtrek: "+result;
    }
    else{
        window.alert("Je input is incorrect!");
    }
}

function calculate2()
{
    var field2=document.getElementById("num2").value;
    var field3=document.getElementById("num3").value;

    var result=parseFloat(field2)*parseFloat(field3);

    if(!isNaN(result))
    {
        document.getElementById("antwoord3").innerHTML="Oppervlake: "+result;
    }
    else{
        window.alert("Je input is incorrect!");
    }
    var result=(2)*parseFloat(field2)+(2)*parseFloat(field3);

    if(!isNaN(result))
    {
        document.getElementById("antwoord4").innerHTML="Omtrek: "+result;
    }
    else{
        window.alert("Je input is incorrect!");
    }
}

function calculate3()
{
    var field4=document.getElementById("num4").value;

    var result=((9)*parseFloat(field4)/(5))+(32);

    if(!isNaN(result))
    {
        document.getElementById("antwoord5").innerHTML="Fahrenheit: "+result;
    }
    else{
        window.alert("Je input is incorrect!");
    }
    var result=parseFloat(field4)+(273);

    if(!isNaN(result))
    {
        document.getElementById("antwoord6").innerHTML="Kelvin: "+result;
    }
    else{
        window.alert("Je input is incorrect!");
    }
}