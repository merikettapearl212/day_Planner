$(document).ready(function () {
    //Query selector
    var containerEl = $(".container");
    // adding moment js for today date in the header
    var today = moment();
    $("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));
    // Get the current hour of the day using moment.js
    var currentHour = parseInt(today.format("HH"));

    var timeBlockEl;
    var hoursEl;
    var textareaEl;
    var saveBtnEl;
    var iEl;
    

    // timeBlock
    var workingHours = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"];
    var hourId = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    // CREATE time blocks dynamically from 8AM to 6PM
    function createBlocks() {
        for (var i = 0; i < workingHours.length; i++) {
            timeBlockEl = $("<div>").addClass("row time-block");
            hoursEl = $("<div>").addClass("hour col-1").text(workingHours[i]);
            textareaEl = $("<textarea>").addClass("description col-10").attr("id", hourId[i]);
            saveBtnEl = $("<button>").addClass("saveBtn col-1").attr("id", i + 8)
            iEl = $("<i>").addClass("fas fa-save")
            saveBtnEl.append(iEl);
    
            containerEl.append(timeBlockEl);
            timeBlockEl.append(hoursEl, textareaEl, saveBtnEl);

            saveBtnEl.on("click", saveToLocalStorage);
            checkTime()
        }
    }
    //make a function that...
    // CHECK that each timeblock is color coded to indicate whether it is in the past-grey, present-orange, or future-green
    function checkTime() {
        for (var i = 8; i <= 18; i++) {
        if( workingHours[i] < currentHour ) {
            timeBlockEl.addClass("past");
          } else if ( workingHours[i] === currentHour ) {
            timeBlockEl.addClass("present");
          } else {
            timeBlockEl.addClass("future");
          }  
        }
    }
    


    function saveToLocalStorage() {
        console.log($(this).attr("id"));
        var textarea = $(this).siblings()[1];
        var task = textarea.value;

        //localStorage.setItem(placethekeyinherebased off the id, place the value in here);
        //grab button id and textarea's value and send it to local storage
        //call function to save data to local storage
    }

    var example = localStorage.getItem("key");
    console.log(example);
    //CALL functions*/
    createBlocks()
    

    });
    
    

    //make a funtion...
    //GET and SAVE after btn 'click'

    //CALL function that saves to local storage?
    //RENDER data?

    
    