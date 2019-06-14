"use strict";

$(document).ready(function () {
  if ($('.top-bg-slider').length > 0) {
    /*Слайдер header*/
    $('.top-bg-slider').slick({
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      appendDots: $('.slider-dots'),
      cssEase: 'ease-in-out',
      arrows: false,
      useTransform: true,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }

  if ($('.brand-slider').length > 0) {
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
  }
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
  /*filters*/

  if ($(window).width() < 768) {
    $('.filter-card').removeClass('filter-active');
    $('.accordion-inner').css('display', 'none');
  }

  $(".btn-filter").click(function () {
    if ($(this).next().is(':visible') === false) {
      // $('#accordion ul').slideUp(280);
      $(this).parent().addClass('filter-active');
    } else {
      $(this).parent().removeClass('filter-active');
    }

    $(this).next().slideToggle(300);
  });
  /*news-sort*/

  $(".news-sort").on("click", ".news-sort__btn", function () {
    $(".news-sort__btn").removeClass("active"); //удаляем класс во всех вкладках

    $(this).addClass("active"); //добавляем класс текущей (нажатой)
  });
});
/*select-filter*/

var dd = document.querySelector('#select-wrapper');
var links = document.querySelectorAll('.select-list span');
var filterTitle = document.querySelector('.select-filter-title');

if ($('#select-wrapper').length > 0) {
  dd.addEventListener('click', function () {
    this.classList.toggle('is-actived');
  });
  links.forEach(function (element) {
    element.addEventListener('click', function (evt) {
      filterTitle.innerHTML = evt.currentTarget.textContent;
    });
  });
}
/*Map*/


if (document.querySelector('#contacts-map')) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('contacts-map', {
      center: [45.049218, 38.969579],
      zoom: 12,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'images/main/logo.png',
      // Размеры метки.
      iconImageSize: [32, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    });
    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small"
      }
    });
    var GeolocationControl = new ymaps.control.GeolocationControl({
      options: {
        size: "small"
      }
    });
    myMap.geoObjects.add(myPlacemark);

    if (document.body.clientWidth > 767) {
      myMap.controls.add(zoomControl, {
        "float": 'none',
        position: {
          top: '160px',
          right: '10px'
        }
      });
      myMap.controls.add(GeolocationControl, {
        "float": 'none',
        position: {
          top: '240px',
          right: '10px'
        }
      });
    }

    myMap.behaviors.disable('scrollZoom');
  });
}
//# sourceMappingURL=scripts.js.map
