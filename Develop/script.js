var hourEl;
var timeBlock;

var timeBlockEl = $(".time-block");
// adding moment js for today date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// Get the current hour of the day using moment.js
var currentHour = parseInt(today.format("H"));

// timeBlock
workingHours = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"];
//make a function...
// CREATE time blocks from 8AM to 6PM
function createBlocks() {
    for (i = 0; i < workingHours.length; i++) {
        timeBlock = $("<div>").addClass("row");
        timeBlockEl.append(timeBlock);
        hourEl = $("<div>").addClass("hour col text-right").text(workingHours[i]);
    //add class + attr
    //append to html elements
// ADD save icon
// Set data attr's
}
}

//make a function that...
// CHECK that each timeblock is color coded to indicate whether it is in the past-grey, present-orange, or future-green
    //for loop
    //add class

//make a funtion...
//GET and SAVE after btn 'click'

//CALL function that saves to local storage?
//RENDER data?

//CALL functions

createBlocks()


