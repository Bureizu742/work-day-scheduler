var now = moment();
var rightNow = now.format("[Today is] dddd, MMM Do, YYYY");
var hourBlock = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var schedItem = $("#sched-input").val();

// Displays current day at top of screen
$("#currentDay").text(rightNow);

//localstorage for text area input to save the events. events must persist across reloads
function scheduler() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".sched-input").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    $("#nine .sched-input").val(localStorage.getItem("nine"));
    $("#ten .sched-input").val(localStorage.getItem("ten"));
    $("#eleven .sched-input").val(localStorage.getItem("eleven"));
    $("#twelve .sched-input").val(localStorage.getItem("twelve"));
    $("#thirteen .sched-input").val(localStorage.getItem("thirteen"));
    $("#fourteen .sched-input").val(localStorage.getItem("fourteen"));
    $("#fifteen .sched-input").val(localStorage.getItem("fifteen"));
    $("#sixteen .sched-input").val(localStorage.getItem("sixteen"));
    $("#seventeen .sched-input").val(localStorage.getItem("seventeen"));
}

//Updates the text area for each block to the appropriate color to denote the passage of time
function init() {
    for (var i = 0; i < hourBlock.length; i++) {
        if (parseInt(now.format("HH")) > hourBlock[i]) $(".container").children().children().children().eq([i]).find("textarea").addClass("past");
        if (parseInt(now.format("HH")) === hourBlock[i]) $(".container").children().children().children().eq([i]).find("textarea").addClass("present");
        if (parseInt(now.format("HH")) < hourBlock[i]) $(".container").children().children().children().eq([i]).find("textarea").addClass("future");
    }
    scheduler();
}

init();