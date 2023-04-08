// $(document).ready(function() { // once our documents is ready. Everything in body is uploaded (if your script is in begin of html)
//     $("h1").css("color", "green"); // changes first found h1 tag font color to the red
//     //document.querySelector("h1").style.color = "red"; --> JS 
//     $("h1").addClass("big-title margin-50");
// })

// console.log($("button"));


// $("h1").addClass("big-title margin-50");

// $("h1").text("Bye");
// $("button").html("<em>Hey</em>");

// console.log($("img").attr("src")); // get attribute
// console.log($("a").attr("href", "facebook.com")); // set attribute

$("h1").click(() => {
    $("h1").css("color", "black");
})

$("button").click(function() {  
    // $("h1").slideToggle();
    $("h1").animate({opacity: 0.5});
})

$("input").on("keydown", function(event) {
    console.log(event.key);
})

$(document).keydown((event) => {
    $("h1").text(event.key);
})
