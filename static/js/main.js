"use strict";

var locationItem = function locationItem() {
  var selectCurrent = document.querySelectorAll('.location__header'),
      selectItem = document.querySelectorAll('.location__item');
  selectCurrent.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.currentTarget.parentElement.classList.toggle('is-open');
    });
  });
  selectItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.currentTarget.closest('.location').querySelector('.location__current').innerHTML = e.currentTarget.innerHTML;
      e.currentTarget.closest('.location').classList.remove('is-open');
    });
  });
};

locationItem();

var sandwich = function sandwich() {
  var $hideElement = $('.sandwich__content');
  $('.sandwich__open-btn').on('click', function () {
    $hideElement.addClass('sandwich__content-opend');
  });
  $('.sandwich__close-btn').on('click', function () {
    $hideElement.removeClass('sandwich__content-opend');
  });
};

sandwich();
var swiper = new Swiper('.banner', {
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function renderBullet(index, className) {
      return '<span class="' + className + '">' + "0" + (index + 1) + '</span>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
var reviews = new Swiper('.reviews-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev'
  },
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  }
});
var license = new Swiper('.license-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.license__next',
    prevEl: '.license__prev'
  },
  slidesPerView: 2,
  spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    960: {
      slidesPerView: 6,
      spaceBetween: 15
    }
  }
});
var partners = new Swiper('.partners-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.partners__next',
    prevEl: '.partners__prev'
  },
  slidesPerView: 2,
  spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    960: {
      slidesPerView: 6,
      spaceBetween: 15
    }
  }
});
$('.services__content').isotope({
  itemSelector: '.isotope-item',
  layoutMode: 'fitRows'
});
$('.services-nav__item').click(function () {
  $('.services-nav__item').removeClass('services-nav__item--active');
  $(this).addClass('services-nav__item--active');
  var selector = $(this).attr('data-filter');
  $('.services__content').isotope({
    filter: selector
  });
  return false;
});

var filter = function filter() {
  var $hideElement = $('.services-filter__nav');
  $('.services-filter__open').on('click', function () {
    $hideElement.addClass('services-filter__nav-opend');
  });
  $('.services-nav__item').on('click', function () {
    $hideElement.removeClass('services-filter__nav-opend');
  });
};

filter();
$(document).ready(function () {
  $('.image-link').magnificPopup({
    type: 'image'
  });
  $('.license-item').magnificPopup({
    gallery: {
      enabled: true
    },
    type: 'image' // other options

  });
});
$('.js-popup-link').magnificPopup({
  showCloseBtn: false
});
$(document).on('click', '.popup__close', function () {
  $.magnificPopup.close();
});
var passageMoreLink = document.querySelector('.fast-passage__more');

if ($('.fast-passage__link').length > 10) {
  $('.fast-passage__link').addClass('fast-passage__link--hidden');
  passageMoreLink.classList.add('fast-passage__more--active');
  $(function () {
    $(".fast-passage__link").slice(0, 10).show();
    $(".fast-passage__more").on('click', function (e) {
      e.preventDefault();
      $(".fast-passage__link:hidden").slice(0, 5).slideDown();

      if ($(".fast-passage__link:hidden").length == 0) {
        $(".fast-passage__more").fadeOut('slow');
      }
    });
  });
}

var reviewsAdv = new Swiper('.reviews-adv__container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});