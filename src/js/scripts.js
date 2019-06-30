$(document).ready(function() {
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
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            focusOnSelect: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    });
  }
	/*Разлокировка кнопки в модалке*/
	$('#modal-form').on('change', () => {
		if ($('#modal-privacy').is(':checked')) {
			$('#modal-btn').attr('disabled', false);
		} else {
			$('#modal-btn').attr('disabled', 'true');
		}
	});

	/*MENU*/

  $('#hamburger').on('click', () => {
    $('.nav_collapse_pages').toggleClass('shower')
  });
  $('#close-nav').on('click', () => {
    $('.nav_collapse_pages').toggleClass('shower');
    $('.nav_collapse_categ').removeClass('shower');
    $('.back-arrow').removeClass('d-block');
		$('#nav-catalog-link').toggleClass('shower-cover');
  });

  $('#nav-catalog-link').on('click', () => {
    $('.nav_collapse_categ').toggleClass('shower');
    $('.back-arrow').toggleClass('d-block');
    $('#nav-catalog-link').toggleClass('shower-cover');

  });

  $('#back-arrow').on('click', () => {
    $('.nav_collapse_categ').toggleClass('shower');
    $('.back-arrow').removeClass('d-block')
		$('#nav-catalog-link').toggleClass('shower-cover');
  });

  var hammertime = new Hammer(document.body, {
    enable: true,
    recognizers: [
      [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
    ]
  });
  if ($(window).width() <= 768) {
    hammertime.on('swipeleft', function (ev) {
      $('.nav_collapse_categ').removeClass('shower');
      $('.nav_collapse_pages').removeClass('shower');
			$('#nav-catalog-link').toggleClass('shower-cover');
			$('.back-arrow').removeClass('d-block')
    });

    // hammertime.on('swiperight', function (ev) {
    //   $('.nav_collapse_pages').addClass('shower');
    // });
  }


  /*filters*/

  if ($(window).width() < 768) {
    $('.filter-card').removeClass('filter-active');
    $('.accordion-card-inner').css('display', 'none')
  }

  $(".btn-filter").click(function(){

    if($(this).next().is(':visible') === false) {
      // $('#accordion ul').slideUp(280);
      $(this).parent().addClass('filter-active')
    }else {
      $(this).parent().removeClass('filter-active')
    }
    $(this).next().slideToggle(300);
  });


  /*news-sort*/

	$(".news-sort").on("click", ".news-sort__btn", function(){
		$(".news-sort__btn").removeClass("active"); //удаляем класс во всех вкладках
		$(this).addClass("active"); //добавляем класс текущей (нажатой)
	});


});


/*select-filter*/

const dd = document.querySelector('#select-wrapper');
const links = document.querySelectorAll('.select-list span');
const filterTitle = document.querySelector('.select-filter-title');

if ($('#select-wrapper').length > 0) {
  dd.addEventListener('click', function() {
    this.classList.toggle('is-actived');
  });

  links.forEach((element) => {
    element.addEventListener('click', function(evt) {
      filterTitle.innerHTML = evt.currentTarget.textContent;
    })
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

    let zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small"
      }
    });
    let GeolocationControl = new ymaps.control.GeolocationControl({
      options: {
        size: "small"
      }
    });
    myMap.geoObjects
      .add(myPlacemark);
    if (document.body.clientWidth > 767) {
      myMap.controls.add(zoomControl, {
        float: 'none',
        position: {
          top: '160px',
          right: '10px'
        }
      });
      myMap.controls.add(GeolocationControl, {
        float: 'none',
        position: {
          top: '240px',
          right: '10px'
        }
      });
    }
    myMap.behaviors.disable('scrollZoom');
  });
}

/*input*/

$('.modal-input').on('input', function(){
  var $this = $(this);
  if ($this.val() === '') {
    $this.removeClass('modal-input_filled');
  } else {
    $this.addClass('modal-input_filled');
  }
});

$('.filter-cost__input').on('input', function(){
  var $this = $(this);
  if ($this.val() === '') {
    $this.removeClass('input_filled');
  } else {
    $this.addClass('input_filled');
  }
});
