function myFunction() {

	 var x = document.getElementById("myText").name;
  document.getElementById("demo").innerHTML = x;
}


function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}


const d = new Date();
 document.getElementById("demo").innerHTML = d;

 var date1 = new Date("01/31/2022");
var date2 = new Date("07/21/2024");
  

var Difference_In_Time = date2.getTime() - date1.getTime();
  

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  

document.write("Before I graduate  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);

