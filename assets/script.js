console.log("Page runs");
console.log(moment());

// timer function
$(function(){
    $("#time").text(moment().format('MMMM Do, YYYY'));
})

var militaryTime=parseInt(moment().format('H'));

$("textarea").each(function(){
    var time =parseInt($(this).attr("data"));
    if(militaryTime === time){
        $(this).addClass("present");
    }
    if(militaryTime > time){
        $(this).addClass("past");
    }
    if(militaryTime < time){
        $(this).addClass("future");
    }
})

$("button").on("click",function(){
    var time9 = parseInt($(this).parent().attr("data"));
    var messtime9 = $("#nine-am").val();

    localStorage.setItem("time9", messtime9)
})

$("#nine-am").append(localStorage.getItem("time9"));

//next hour

$("button").on("click",function(){
    var time10 = parseInt($(this).parent().attr("data"));
    var messtime10 = $("#ten-am").val();

    localStorage.setItem("time10", messtime10)
})

$("#ten-am").append(localStorage.getItem("time10"));

//next hour

$("button").on("click",function(){
    var time11 = parseInt($(this).parent().attr("data"));
    var messtime11 = $("eleven-am").val();

    localStorage.setItem("#time11", messtime11)
})

$("#eleven-am").append(localStorage.getItem("time11"));

//next hour

$("button").on("click",function(){
    var time12 = parseInt($(this).parent().attr("data"));
    var messtime12 = $("#twelve-pm").val();

    localStorage.setItem("time12", messtime12)
})

$("#twelve-pm").append(localStorage.getItem("time12"));

//next hour

$("button").on("click",function(){
    var time13 = parseInt($(this).parent().attr("data"));
    var messtime13 = $("#one-pm").val();

    localStorage.setItem("time13", messtime13)
})

$("#one-pm").append(localStorage.getItem("time13"));

//next hour

$("button").on("click",function(){
    var time14 = parseInt($(this).parent().attr("data"));
    var messtime14 = $("#two-pm").val();

    localStorage.setItem("time14", messtime14)
})

$("#two-pm").append(localStorage.getItem("time14"));

//next hour

$("button").on("click",function(){
    var time15 = parseInt($(this).parent().attr("data"));
    var messtime15 = $("#three-pm").val();

    localStorage.setItem("time15", messtime15)
})

$("#three-pm").append(localStorage.getItem("time15"));

//next hour

$("button").on("click",function(){
    var time16 = parseInt($(this).parent().attr("data"));
    var messtime16 = $("#four-pm").val();

    localStorage.setItem("time16", messtime16)
})

$("#four-pm").append(localStorage.getItem("time16"));

//next hour

$("button").on("click",function(){
    var time17 = parseInt($(this).parent().attr("data"));
    var messtime17 = $("#five-pm").val();

    localStorage.setItem("time17", messtime17)
})

$("#five-pm").append(localStorage.getItem("time17"));

//next hour
