
console.log("your index.js folder loaded correctly");

function fade() {
    $('.preloader').fadeOut("slow");
};

setTimeout(fade, 3000)

$("#grow-button").on("click", function() {
    $(".button").animate({width: "500px"})
});

$("changeColor").on("click", function() {
    $(".inline-block").color("green")
});

$(".projectTitle").css(
    "color","red");

$(".button").on("click", function(){
    console.log("Click Worked");
});

$(".container1").on("click",function(){
    $(".button1").slideToggle()
});
console.log("code publish test");