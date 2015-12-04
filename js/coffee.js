// built in JS functions
// alert("Welcome to my website");
//confirm("Is this working?");

//Functions:
//A function is a block of code that isn't executed straight away. we will be using functions that listen out of clicks and scrolls. Once a click is captured, we'll run some code. What each function does is up to us.


//Primitive Data Types
//"Hello" - String
//1, 2, -345, 1232434653232 - Integers (whole numbers)
//0.2, 4.5, -0.6 - Floats (decimal numbers)
//true, false - Boolean Values

//Supplementary Data Types
//["milk", "bread", "tea"] - Array: Allows us to store values together

//Variables
//Variables are containers for storing information and their value can be changed.
//var username = "sbristow";

//jquery
//$(selector).action(effect);

//Example: $("nav a").html("hello jquery");
//The $ talks to Jquery.
//The selector - "nav a", selects which element we want to affect.
//The Action - ".html", what do we want to do.
//The Effect - ("hello jquery"), what we want to change the content to.

//There are lots of different actions what we can use in jquery. To find these use the jquery.com documentation.
// .html allows us to change out the html of an element.
// .css allows us to change the styling of an element.

//The .css action takes two values, which property we want to change, and the value we want to change it to.
//$("body").css("background","orange");

//Event Listeners.
//The .on action adds and event listener to an element
//There are a number of different events that we can listen for.
//Events:
//scroll
//click
//mouseenter
//mouseleave

//$("h1").on("click", function(){
//    $("body").css("background","orange");
//});

// Use Jquery slideToggle to animate the nav in and out when the trigger is clicked. 
$(".trigger").on("click", function(){
  $("nav").slideToggle("slow");
});
