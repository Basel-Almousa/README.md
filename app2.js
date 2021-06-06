function travelworld(){
  console.log(' welcom travel world')
}
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
