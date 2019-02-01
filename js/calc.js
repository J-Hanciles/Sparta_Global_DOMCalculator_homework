console.log("linked");

var display = document.getElementsByClassName('className')
var numberbuttons = document.getElementsByClassName('buttonNum');
var operationbuttons = document.getElementsByClassName('operator');
var clearbutton = document.getElementsByClassName('buttonClear');
var equalbutton = document.getElementsByClassName('equals');
var num1 = buttonClick();
var num2 = buttonClick();
var answer = null;

for (var i = 0; i < numberbuttons.length; i++) {
  numberbuttons[i].addEventListener("click", buttonClick);
}
function buttonClick(){
  console.log(this.innerHTML);
}
// for (var i = 0; i < operationbuttons.length; i++) {
//   operationbuttons[i].addEventListener("click", buttonClick);
// }
// function buttonClick(){
//   console.log(this.innerHTML);
// }
for (var i = 0; i < display.length; i++) {
  display[i].addEventListener("click", displayInput);
}
function displayInput() {
  this.innerHTML = buttonClick.innerHTML;
  console.log(this.innerHTML = buttonClick.innerHTML);
}
