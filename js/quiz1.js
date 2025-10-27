// get the element and change value [300,500)
var num1 = Math.floor(Math.random() * 200 + 300);
document.getElementById('M').textContent = num1.toString();

var num2 = Math.floor(Math.random() * 100 + 50);
document.getElementById('R').textContent = num2.toString();

var num3 = Math.floor(Math.random() * 10);
document.getElementById('F').textContent = num3.toString();

document.querySelector('input[value="4"]').nextSibling.nodeValue=num1.toString() + "-" + num2.toString() + "+" + num3.toString();