console.log("Page runs");
console.log(moment());

// timer function
$(function(){
    $("#time").text(moment().format('MMMM Do, YYYY'));
})
