$(document).ready(function() {

  $(function () {
    //Initialize filterizr with default options
    $('#filtr-container').filterizr();
  });
  $('#team__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="team__slider-btn team__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="team__slider-btn team__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: false,
    // arrows: false,
    autoplaySpeed: 4000,
    fade: true,
  });

  $('#testimonials__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--prev"><span class="ion-chevron-left"></span></button>',
    nextArrow: '<button type="button" class="testimonials__slider-btn testimonials__slider-btn--next"><span class="ion-chevron-right"></span></button>',
    autoplay: false,
    // arrows: false,
    autoplaySpeed: 4000,
    fade: true,
  });

  $(function(){
    $('.team__item-description').slimScroll({
        height: '250px',
        color: 'lightgreen'
    });
  });



});

// add active class to clicked nav item
$(".header__nav a").click(function (event) {
  event.preventDefault();
  $(".header__nav a").removeClass('active');
  $(this).addClass('active');
});


// Slow scroll from nav item to current section
$(".header__nav a, .section-home__btn-next").click(function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeight = $('.header').height();
    let isHeaderSticky = $('.header').hasClass('header--sticky');
    let scrollTop = isHeaderSticky ? top - headerHeight : top - headerHeight - 60;
    $("body, html").animate({ scrollTop }, 700 );
  }
);


// sticky header
if ($('.header').length) {
  let renderHeader = function () {
    const HEADER = $('.header');
    let headerHeight = HEADER.height();
    let scrollTop = $(window).scrollTop();
    if (scrollTop > headerHeight) {
      HEADER.addClass("header--sticky");
    } else {
      HEADER.removeClass("header--sticky");
    }
  }
  renderHeader();
  $(window).scroll(function () {
    renderHeader();
  })
}
 // change navigation active class oncroll
 function onScroll(event) {
  let scrollPos = $(document).scrollTop();
  $('.header__nav a').each(function () {
    let currLink = $(this);
    let refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.header__nav a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
$(document).on("scroll", onScroll);


// show media header navigation
$('.header__nav-btn').click(function() {
  $('.header__nav').toggleClass('header__nav--show');
  $(this).toggleClass('is-active');
});

