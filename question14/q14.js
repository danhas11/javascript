var a = 2;
var b = 1;
var equation = "--a - --b + ++b + b--";
var result = 2 - 0 + 2 + 1;

document.write("a" + " = " + " 2" + "<br>");
document.write("b" + " = " + " 1" + "<br>" + "<br>");
document.write("(--a)" + " = " + " (2)" + "<br>" + "<br>");
document.write("(--a - --b)" + " = " + " (2 - 0)" + "<br>" + "<br>");
document.write("(--a - --b + ++b)" + " = " + " (2 - 0 + 2)" + "<br>" + "<br>");
document.write("(--a - --b + ++b + b--)" + " = " + " (2- 0 + 2 + 1)" + "<br>" + "<br>");
document.write("Result : " + result);