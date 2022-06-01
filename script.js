var now = moment();
var hourBlock = [09, 10, 11, 12, 13, 14, 15, 16, 17];

// Displays current day at top of screen
$("#currentDay").text(now.format("[Today is] dddd, MMM Do, YYYY"));

//Gets the initial data in each text area, and sets new data to localStorage
function scheduler() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".sched-input").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    $("#9 .sched-input").val(localStorage.getItem("9"));
    $("#10 .sched-input").val(localStorage.getItem("10"));
    $("#11 .sched-input").val(localStorage.getItem("11"));
    $("#12 .sched-input").val(localStorage.getItem("12"));
    $("#13 .sched-input").val(localStorage.getItem("13"));
    $("#14 .sched-input").val(localStorage.getItem("14"));
    $("#15 .sched-input").val(localStorage.getItem("15"));
    $("#16 .sched-input").val(localStorage.getItem("16"));
    $("#17 .sched-input").val(localStorage.getItem("17"));
}

//Updates the text area for each block to the appropriate color to denote the passage of time
function init() {
    for (var i = 0; i < hourBlock.length; i++) {
        if (parseInt(now.format("HH")) > hourBlock[i]) {
            $(".sched-input").addClass("past");
            $(".sched-input").removeClass("present");
            $(".sched-input").removeClass("future");
        } else if (parseInt(now.format("HH")) === hourBlock[i]) {
            $(".sched-input").removeClass("past");
            $(".sched-input").addClass("present");
            $(".sched-input").removeClass("future");
        } else if (parseInt(now.format("HH")) < hourBlock[i]) {
            $(".sched-input").removeClass("past");
            $(".sched-input").removeClass("present");
            $(".sched-input").addClass("future");
        }
    }
    scheduler();
}

//Runs the whole thing
init();