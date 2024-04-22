$(document).ready(function () {

  // Show menu mobail
  $('.toggle__nav').on('click', function () {
    $('.navbar').addClass('navbar--open');
    $('.layer-black').fadeIn(400);
  });

  $('.close--navbar, .layer-black').on('click', function () {
    $('.navbar').removeClass('navbar--open');
    $('.layer-black').fadeOut(400);
  });

  // Modal
  $('.open-modal-consultation').on('click', function(e) {
    e.preventDefault();
    $('.modal--consultation').fadeIn(200);
  });

   $('.open-modal-success').on('click', function(e) {
    e.preventDefault();
    $('.modal--success').fadeIn(200);
  });

  $('.close--modal').on('click', function() {
    $('.modal').fadeOut(200);
  });

  $('.modal').mouseup(function (e) {
    let modalContent = $(".modal__box");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).fadeOut(200);
    }
  });

  // Maskedinput
  $(function($){
    $('.phone-mask').mask(('+7 ') + '(999) 999-99-99');
  });

  // Tabs
  $(document).on('click', '.tabs__nav-item', function () {
    let thisValueData = $(this).data('tab');
    if (!$(this).hasClass('tabs__nav-item--active')) {
      $(this).parents('.tabs').eq(0).find('.tabs__nav').eq(0).find('>.tabs__nav-item').removeClass('tabs__nav-item--active');
      $(this).addClass('tabs__nav-item--active');
    }
    let contentData = $(this).parents('.tabs').eq(0).find('.tabs__body').eq(0).find('>.tabs__item');
    contentData.each(function () {
      if ($(this).data('tab') == thisValueData) {
        contentData.removeClass('active').hide();
        $(this).addClass('active').fadeIn();
      }
    });
  });

  // Accardion
  var accordion = function() {
    $('.accordion__header').on('click', function(){
      $(this).next('.accordion__body').not(':animated').slideToggle()
    })
    $('.accordion__header').click(function () {
      $(this).parent('.accordion li').toggleClass('active');
    });
  }
  accordion();

  // Video
  $('.video__box--js').click(function() {
    var dataYoutube = $(this).attr('data-youtube');
    $(this).html('<iframe src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });

  // Hero sl
  var swiper = new Swiper(".hero__sl", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Projects sl
  var swiper = new Swiper(".projects__sl", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next--projects",
      prevEl: ".swiper-button-next--prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 30,
      },
    },
  });

  // Projects inner sl
  var swiper = new Swiper(".projects__inner", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    allowTouchMove: false,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Finishing thumbs
  var swiperThums = new Swiper(".finishing__thumbs", {
    spaceBetween: 5,
    slidesPerView: 3,
    allowTouchMove: false,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      480: {
        spaceBetween: 10,
      },
    },
  });

  // Finishing sl big
  var swiperFinishing = new Swiper(".finishing__sl", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    thumbs: {
      swiper: swiperThums,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        let sliderIndex = $(this)[0].activeIndex;
        $('.finishing__tabs').find('.finishing__tabs-item').removeClass('tabs__nav-item--active');
        $('.finishing__tabs').find('.finishing__tabs-item').eq(sliderIndex).addClass('tabs__nav-item--active');
      },
    },
  });

  $(document).on('click','.finishing__tabs-item', function () {
    let index = $(this).index();
    $(this).parents('.finishing__tabs').find('.finishing__tabs-item').removeClass('tabs__nav-item--active');
    $(this).addClass('tabs__nav-item--active');
    swiperFinishing.slideTo(index);
  });

  // Gellery sl
  var swiperGallery = new Swiper(".gellery__sl", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        loop: true,
        spaceBetween: 15,
        centeredSlides: true,
      },
      1200: {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },
  });

  // Built sl
  var swiperGallery = new Swiper(".built__sl", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        loop: true,
        spaceBetween: 15,
      },
      1200: {
        loop: true,
        spaceBetween: 30,
      },
    },
  });

  // Story sl
  var swiperGallery = new Swiper(".story__sl", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      992: {
        allowTouchMove: false
      },
    },
  });

  // Zoom
  $('.gallery-js').each(function() {
    $(this).magnificPopup({
      type : 'image',
      delegate: 'a',
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }
    });
  });

});

// Map
// ymaps.ready(init);
// var myMap, 
//     myPlacemark;

// function init(){ 
//   myMap = new ymaps.Map("map", {
//     center: [55.77511086, 37.61463844],
//     zoom: 16,
//     controls: ['zoomControl']
//   });
  
//   myPlacemark = new ymaps.Placemark([55.77511086, 37.61463844], {});
  
//   myMap.geoObjects.add(myPlacemark);
//   myMap.behaviors.disable([
//     'drag',
//     'scrollZoom'
//   ]);

// }