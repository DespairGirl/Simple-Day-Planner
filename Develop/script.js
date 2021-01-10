$(document).ready(function () {

var dateToday=moment().format('MMMM Do YYYY, h:mm a');
console.log(dateToday)

$("#currentDay").append(dateToday);



$(".time-block").each(function () {
    
    var presentTime=parseInt(moment().format('HH'));
    var blockTime=parseInt($(this).attr("id"));
    console.log(presentTime)
    console.log(blockTime)

   if(blockTime < presentTime){
       $(this).addClass("past");

   }
   else if (blockTime > presentTime){
       $(this).addClass("future");
   }
   else {
       $(this).addClass("present");
   }

   var timeBlockTime=$(this).attr("id");
   var getInfo=localStorage.getItem(timeBlockTime);

   if (getInfo!== null){
   var inputInfo= $(this).children(".plannerInput").val(getInfo);}

  
})
$(".saveBtn").on("click", function() {
    var timeBlockTime=$(this).parent().attr("id");
    var plannerInfo=$(this).siblings(".plannerInput").val();

    localStorage.setItem(timeBlockTime,plannerInfo);

})



})