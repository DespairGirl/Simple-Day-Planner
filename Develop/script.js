// run page only when DOM is ready for the js to execute
$(document).ready(function () { 

var dateToday=moment().format('MMMM Do YYYY, h:mm a'); //getting current date using moment library
console.log(dateToday) //logging date as a check

$("#currentDay").append(dateToday); // appending current date to the header paragraph 



$(".time-block").each(function () { //iteration for each id with the class time block
    
    var presentTime=parseInt(moment().format('HH')); //making current time in hour format into an integer for comparision
    var blockTime=parseInt($(this).attr("id")); //making ids for each time block into integer for comparision
    console.log(presentTime) //to check
    console.log(blockTime)  // to check

    // change time block colors based on past, present, future
   if(blockTime < presentTime){
       $(this).addClass("past"); //when the block time is in the past, class of past is added, and takes on the .past css

   }
   else if (blockTime > presentTime){ // when block time is in the future, class of future is added, and takes on the .future css
       $(this).addClass("future");
   }
   else {
       $(this).addClass("present"); // when time is neither past or future, class of present is added and takes on .present css
   }

   // storing info into local storage and 

   var timeBlockTime=$(this).attr("id"); //keyname obtained the id attribute for time-block
   var getInfo=localStorage.getItem(timeBlockTime); // stores the value of time block into local storage

   if (getInfo!== null){ // when there is a value in time block
     $(this).children(".plannerInput").val(getInfo);} // the value of the textarea stays on the page

  
})
$(".saveBtn").on("click", function() { // event listner  and function for the save button
    var timeBlockTime=$(this).parent().attr("id"); // store the id from save button's parent time-block
    var plannerInfo=$(this).siblings(".plannerInput").val(); // store value of textarea, the sibling of the save button

    localStorage.setItem(timeBlockTime,plannerInfo); //add or update time with it's text value into locale storage

})



})