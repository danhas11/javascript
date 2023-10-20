var userName = prompt("Enter Your Name");
var currenYear = prompt("Enter Current Year");
var birthYear = prompt("Enter Your Bitrh Year");

var calculation = currenYear - birthYear;

document.write("<h1>The Age Calculator</h1>" + "<br>" + "Current Year : " + currenYear + "<br>" + "Birth Year : " + birthYear + "<br>" + userName + " is " + calculation + "years old.")