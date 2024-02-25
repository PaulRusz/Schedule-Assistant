

var currentDate = dayjs().format("dddd, MMMM D, YYYY, h:mm a");
var displayDate = document.querySelector("currentDay");
var currentTime = dayjs().hour()
var timeBlocks = $(".time-block")
var descriptionBlock = $(".description")
console.log(currentTime)
$("#currentDay").html(currentDate)

// function for the save button
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log($(this))
    localStorage.setItem(time, text);
  })
})

// function for the time aspect of the webpage to show current, past, and future 
timeBlocks.each(function () {
  if (currentTime == $(this).attr("id").substring(5)) {
    $(this).addClass("present")
  } else if (currentTime > $(this).attr("id").substring(5)) {
    $(this).addClass("past")
  } else {
    $(this).addClass("future")
  }
})


descriptionBlock.each(function () {
  //if ($this).parent().attr
  console.log($(this).parent().attr("id"))
  $(this).val(localStorage.getItem($(this).parent().attr("id")))
})





