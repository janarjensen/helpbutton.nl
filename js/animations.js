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
$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });
  $('.accordion-tabs').on('click', 'li > a.tab-link', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});
