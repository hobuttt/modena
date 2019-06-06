"use strict";

$(document).ready(function () {
  $('.brand-slider').slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    nextArrow: $('.about-next-arrow'),
    prevArrow: $('.about-prev-arrow'),
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
  });
});
//# sourceMappingURL=scripts.js.map
