var currentDay = document.getElementById("#currentDay");
var userInput = document.getElementById("#userInput");


// current date
$(document).ready(function () {
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

})
 // save button
$(".saveBtn").on("click", function(event){
    event.preventDefault();
    var chosenBtn = event.target.data
  
//     var chosenBtn = event.target
//     var
//     var userInput = $("#user-input").value()
//     localStorage.setItem("user-input", stringify(userInput));


// change timeblock colors depending on time
var hour = moment().format("h");
 


})

