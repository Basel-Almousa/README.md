function travelworld(){
  console.log(' welcom travel world')
}
travelworld();

var x = myFunction(4, 3);
document.write("The world of travel")

function myFunction(a, b) {
  return a * b;
}
document.write('<a>' + '<image src=sss.jpg>' + '<a>')
travelworld()

function printimg() {
var numberofimg = prompt('please enter the number of images you like to see')
while(numberofimg > 7){
  numberofimg = prompt("please enter the number of images you like to see")
}
for(var i=0; i<numberofimg; i++){
  document.write('<a>' + '<image src=sss.jpg>' + '</a>')
}
printimg();
}

