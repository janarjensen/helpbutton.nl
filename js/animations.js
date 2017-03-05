console.log("js is working");

// set equal heights to all divs in row
$(function() {
    $('.howCard').matchHeight();
});
$(function() {
    $('.functionText').matchHeight();
});

// make buy button appear
$(window).load(function() {
    setTimeout(function() {
        $(".buyNow").show('fadeIn', {}, 1000)
    }, 2000);
});

// // toggle class on click
// $("**clickable div id here**").on("click", function(){
//   $("**div id to recieve togge here**").toggleClass("**class1 class2**");
// });
//
