
// display date and time
$(document).ready(function () {
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
})

//change timeblock background colors based on time
var hour = moment().format("H");
console.log("hour = ", hour);
// var dataIndex = document.getElementById("data-index");
// let hour = 20;

// if (hour >= 9)

// var changeTimeBlockColor = function(){
// if ( dataIndex = hour){
// userInput0.style$("#present");
// }else{
//     dataIndex < hour.style$("#future");
// }
// return changeTimeBlockColor;
// };

//if statement with data-index 
//find out what data index number is 
//assign to time bar


//time block ONE local storage
var userInput0 = JSON.parse(localStorage.getItem("userInput0"))
$("#user-input-0").val(userInput0)
 // save the event for the timeblock 
$("#button-0").on("click", function(event){
    event.preventDefault();
    let userInput0 = $("#user-input-0").val();
    // console.log(userInput0);
    localStorage.setItem("userInput0", JSON.stringify(userInput0));
})

//time block TWO local storage
var userInput1 = JSON.parse(localStorage.getItem("userInput1"))
$("#user-input-1").val(userInput1)
 // save the event for the timeblock 
$("#button-1").on("click", function(event){
    event.preventDefault();
    let userInput1 = $("#user-input-1").val();
    // console.log(userInput1);
    localStorage.setItem("userInput1", JSON.stringify(userInput1));
})

//time block THREE local storage
var userInput2 = JSON.parse(localStorage.getItem("userInput2"))
$("#user-input-2").val(userInput2)
 // save the event for the timeblock 
$("#button-2").on("click", function(event){
    event.preventDefault();
    let userInput2 = $("#user-input-2").val();
    // console.log(userInput2);
    localStorage.setItem("userInput2", JSON.stringify(userInput2));
})

//time block FOUR local storage
var userInput3 = JSON.parse(localStorage.getItem("userInput3"))
$("#user-input-3").val(userInput3)
 // save the event for the timeblock 
$("#button-3").on("click", function(event){
    event.preventDefault();
    let userInput3 = $("#user-input-3").val();
    // console.log(userInput3);
    localStorage.setItem("userInput3", JSON.stringify(userInput3));
})

//time block FIVE local storage
var userInput4 = JSON.parse(localStorage.getItem("userInput4"))
$("#user-input-4").val(userInput4)
 // save the event for the timeblock 
$("#button-4").on("click", function(event){
    event.preventDefault();
    let userInput4 = $("#user-input-4").val();
    // console.log(userInput4);
    localStorage.setItem("userInput4", JSON.stringify(userInput4));
})

//time block SIX local storage
var userInput5 = JSON.parse(localStorage.getItem("userInput5"))
$("#user-input-5").val(userInput5)
 // save the event for the timeblock 
$("#button-5").on("click", function(event){
    event.preventDefault();
    let userInput5 = $("#user-input-5").val();
    // console.log(userInput5);
    localStorage.setItem("userInput5", JSON.stringify(userInput5));
})

//time block SEVEN local storage
var userInput6 = JSON.parse(localStorage.getItem("userInput6"))
$("#user-input-6").val(userInput6)
 // save the event for the timeblock 
$("#button-6").on("click", function(event){
    event.preventDefault();
    let userInput6 = $("#user-input-6").val();
    // console.log(userInput6);
    localStorage.setItem("userInput6", JSON.stringify(userInput6));
})

//time block EIGHT local storage
var userInput7 = JSON.parse(localStorage.getItem("userInput7"))
$("#user-input-7").val(userInput7)
 // save the event for the timeblock 
$("#button-7").on("click", function(event){
    event.preventDefault();
    let userInput7 = $("#user-input-7").val();
    // console.log(userInput7);
    localStorage.setItem("userInput7", JSON.stringify(userInput7));
})

//time block NINE local storage
var userInput8 = JSON.parse(localStorage.getItem("userInput8"))
$("#user-input-8").val(userInput8)
 // save the event for the timeblock 
$("#button-8").on("click", function(event){
    event.preventDefault();
    let userInput8 = $("#user-input-8").val();
    // console.log(userInput8);
    localStorage.setItem("userInput8", JSON.stringify(userInput8));
})

