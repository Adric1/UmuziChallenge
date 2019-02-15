/*
*@function: this function checks if two number or the sum of them is/are equal to 65  
*@return: it returns an alert of true or false 
*/
function _65checker()
{
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var fla = Number.parseFloat(a);
    var flb = Number.parseFloat(b);
    if((fla==65||flb==65)||(fla + flb == 65))
    {
            alert("The result is: " + true);
    }else
    {
            alert("The result is: " + false + ", try again");
    }
}


/*
*@function: this function calculates the area of a triangle with three given sides 
*@return: it returns an alert of the calculated area
*/
function triAreaCalc()
{
    var a = document.getElementById("sideA").value;
    var b = document.getElementById("sideB").value;
    var c = document.getElementById("sideC").value;
    var fla = Number.parseFloat(a);
    var flb = Number.parseFloat(b);
    var flc = Number.parseFloat(c);
    var s = ((fla + flb + flc)*0.5);
    var area =  Math.sqrt(s*((s-fla)*(s-flb)*(s-flc)));
    alert("The area of the triangle is: " + area.toFixed(2));
} 

/*
*@function: this function compares three numbers 
*@return: it returns the largest number out of the three compared numbers
*/
function greaterNumber()
{ 
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var c = document.getElementById("numC").value;
    var fla = Number.parseFloat(a);
    var flb = Number.parseFloat(b);
    var flc = Number.parseFloat(c);
    if(fla>flb && fla>flc)
        {
            alert("The greatest number is: " + fla);
        }
        else if(flb>fla && flb>flc)
        {
            alert("The greatest number is: " + flb);
        }
        else
        {
            alert("The greatest number is: " + flc);
        }
}

/*
*@function: this function converts and number into and hour and minute format 
*@return: it returns the computed hour and minute format
*/
function convertToTime()
{ 
    var num = document.getElementById("num").value;
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    var fla = Number.parseFloat(hours);
    var flb = Number.parseFloat(minutes);
    alert("The number calculates to " + fla + "h" + ":" + flb + "m");         
}

/*
*@function: this function accepts two strings and compares them for common characters
*@return: it returns the common characters within the two strings sort alphabetically
*/
function commonChar()
{
    var StringA = document.getElementById("strA").value;
    var StringB = document.getElementById("strB").value;
    var firstString = StringA.replace(/ /g,"");
    var secondString = StringB.replace(/ /g,"");
    var answer = [];
    for(var i = 0; i < firstString.length; i++ )
        {
            if(secondString.indexOf(firstString[i]) !== -1 && answer.indexOf(firstString[i]) === -1)
            {
                answer.push(firstString[i]);
                answer.sort();
            }
        }
    
    alert("The common characters in the two strings is/are: " + " (" + answer.join(",") + ")");
}

/*
*RegEx
*
*function myFunction() 
{
    var str = "Visit W3Schools";
    var patt = /os/i;
    var result = str.match(patt);
    document.getElementById("demo").innerHTML = result;
}
*/

/*$(document).ready(function()
{
    _65checker();
    triAreaCalc();
    greaterNumber();
    convertToTime();
    commonChar();
});*/