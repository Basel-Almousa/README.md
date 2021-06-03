var useranswer = prompt("Are interested of WINNING an AWARD?")
var x = "yes"
if(useranswer == x){
  alert("answer the following question!!")
  var answer = prompt("Are there 7 or 5 continent in the world?")
  var y = 7
  while(answer == y){
    alert("YOUR ANSWER IS CORRECT")
    console.log("your answer is correct")
    break
  }
}

var attempt = prompt("How many picture do you see in this web page?? isn't = 5")
for(var i = 0 ; i < attempt ; i++){
document.write('<a>' + '<image src=s.jpg>' + '<a>')}