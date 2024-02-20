

var currentDate = dayjs().format("dddd, MMMM D, YYYY, h:mm a");
var displayDate = document.querySelector("currentDay");
var currentTime = dayjs().hour()
var timeBlocks = $(".time-block")
var descriptionBlock = $(".description")
console.log(currentTime)
$("#currentDay").html(currentDate)


$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log($(this))
    localStorage.setItem(time, text);
  })
})


//"15" == 15
//"15" === 15

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


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



