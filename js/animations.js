console.log("js is working")

// toggle class on click
$("#statBurgerNav").click(function(){
  $("#statNavContent").toggleClass("display displayNot");
});

$(".faqQuestion").click(function(){
  $(this).find(".faqAnswer").toggleClass("display displayNot");
});

// set equal heights to all divs in row
$(function() {
    $('.howCard').matchHeight();
});
$(function() {
    $('.functionText').matchHeight();
});
$(function() {
    $('.statNavCol').matchHeight();
});
$(function() {
    $('.bolTemp').matchHeight();
});

// make buy button appear
$(".buyNow").delay(2500).fadeIn(600);


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
