var now = moment();
var pastPresentFuture = ["past", "present", "future"];
var rightNow = now.format("[Today is] dddd, MMM Do, YYYY");
var hourBlock = [09, 10, 11, 12, 13, 14, 15, 16, 17];

$("#currentDay").text(rightNow);

//Updates the text area for each block to the appropriate color to denote the passage of time
function init() {
    for (var i = 0; i < hourBlock.length; i++) {
        if (parseInt(now.format("HH")) > hourBlock[i]) {
            $(".container").children().children().children().eq([i]).children().find("textarea").addClass("past");
        }
        if (parseInt(now.format("HH")) === hourBlock[i]) {
            $(".container").children().children().children().eq([i]).children().find("textarea").addClass("present");
        }
        if (parseInt(now.format("HH")) < hourBlock[i]) {
            $(".container").children().children().children().eq([i]).children().find("textarea").addClass("future");
        }
    }
}
//localstorage for text area input to save the events. events must persist across reloads

// localStorage.getItem()
// localStorage.setItem()

console.log(parseInt(now.format("HH")) > 09);
init();