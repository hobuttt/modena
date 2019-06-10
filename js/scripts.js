"use strict";

$(document).ready(function () {
  /*Слайдер header*/
  $('.top-bg-slider').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    cssEase: 'linear',
    arrows: false,
    useTransform: true,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });
  /*Слайдер брендов*/

  $('.brand-slider').slick({
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    nextArrow: $('.about-next-arrow'),
    prevArrow: $('.about-prev-arrow'),
    // centerMode: true,
    // focusOnSelect: true,
    responsive: [{
      breakpoint: 1140,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: false
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
  /*Разлокировка кнопки в модалке*/

  $('#modal-form').on('change', function () {
    if ($('#modal-privacy').is(':checked')) {
      $('#modal-btn').attr('disabled', false);
    } else {
      $('#modal-btn').attr('disabled', 'true');
    }
  });
  $('#hamburger').on('click', function () {
    $('.nav_collapse_pages').toggleClass('shower');
  });
  $('#close-nav').on('click', function () {
    $('.nav_collapse_pages').toggleClass('shower');
    $('.nav_collapse_categ').removeClass('shower');
    $('.back-arrow').removeClass('d-block');
  });
  $('#nav-catalog-link').on('click', function () {
    $('.nav_collapse_categ').toggleClass('shower');
    $('.back-arrow').toggleClass('d-block');
  });
  $('#back-arrow').on('click', function () {
    $('.nav_collapse_categ').toggleClass('shower');
    $('.back-arrow').removeClass('d-block');
  });
});
/*select-filter*/

var dd = document.querySelector('#select-wrapper');
var links = document.querySelectorAll('.select-list span');
var filterTitle = document.querySelector('.select-filter-title');
dd.addEventListener('click', function () {
  this.classList.toggle('is-actived');
});
links.forEach(function (element) {
  element.addEventListener('click', function (evt) {
    filterTitle.innerHTML = evt.currentTarget.textContent;
  });
});
/*filters*/

$(".btn-filter").click(function () {
  if ($(this).next().is(':visible') === false) {
    // $('#accordion ul').slideUp(280);
    console.log($(this));
    $(this).parent().addClass('filter-active');
  } else {
    $(this).parent().removeClass('filter-active');
  }

  $(this).next().slideToggle(280);
});
//# sourceMappingURL=scripts.js.map
