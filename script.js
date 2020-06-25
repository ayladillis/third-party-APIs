
$(document).ready(function () {
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

})

//how to change the color for different timeblocks 
//var hour = moment().format("h");

$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var chosenBtn = event.target.data
  
//     var chosenBtn = event.target
//     var
//     var userInput = $("#user-input").value()
//     localStorage.setItem("user-input", stringify(userInput));

})

