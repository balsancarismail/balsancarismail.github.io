$(document).ready(function () {
  var slider = $("#slider").bxSlider({
    auto: true,
    minSlides: 1, // display one image at a time
    maxSlides: 1, // display one image at a time
    slideWidth: 250,
    slideMargin: 10,
    moveSlides: 1, // move one slide at a time
    randomStart: true, // start with a random image
    pause: 3000, // time between transitions is 3 seconds
    pager: true, // enable pager
    pagerType: "short",
    pagerShortSeparator: " of ",
    buildPager: function (slideIndex) {
      return slideIndex + 1;
    },
    onSlideAfter: function ($slideElement, oldIndex, newIndex) {
      slider.goToSlide(newIndex);
    },
  });
});
