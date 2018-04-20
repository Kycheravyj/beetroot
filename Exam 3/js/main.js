
$.jribbble.getShotsByPlayerId('srizon', function (playerShots) {
    var html = [];

//PORTFOLIO SETUP

    $.each(playerShots.shots, function (i, shot) {
        html.push('<li><a href="' + shot.url + '">');
        html.push('<img src="' + shot.image_teaser_url + '" ');
        html.push('alt="' + shot.title + '"></a>');
        html.push('<h3><a href="' + shot.url + '">' + shot.title + '</h3>');
        html.push('<div class="likecount"><span class="icon-heart"></span> ' + shot.likes_count + '</div>');
        html.push('<div class="commentcount"><span class="icon-bubbles"></span> ' + shot.comments_count + '</a></li></div>');
    });

    $('#shotsByPlayerId').html(html.join(''));
}, {page: 1, per_page: 9});

//PRELOADER

$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})

//CUSTOM SCROLLBAR

$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});

// button back to top
if ($("#button__page-up").length) {
    let scrollTrigger = 200; // px
    let backToTop = function () {
      let scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#button__page-up").addClass("is-visible");
      } else {
        $("#button__page-up").removeClass("is-visible");
      }
    };
    backToTop();
    $(window).scroll(function () { backToTop(); });
    $("#button__page-up").click(function (e) {
        e.preventDefault();
        $("html,body").animate({
            scrollTop: 0
          }, 700
        );
      }
    );
  }

//SMOOTHSCROLL

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Slow scroll from nav item to current section
$(".navbar-nav a, .section-home__btn-next").click(function (event) {
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    let headerHeight = $('.header').height();
    let isHeaderSticky = $('.header').hasClass('header--sticky');
    let scrollTop = isHeaderSticky ? top - headerHeight : top - headerHeight - 60;
    $("body, html").animate({ scrollTop }, 700 );
  }
);
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('img').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })

$('a').hover(
        function(){ $(this).addClass('animated pulse') },
        function(){ $(this).removeClass('animated pulse') })
 
//slider
$('#slider').slick({
  dots: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: '<button type="button" class="slick-next"> <i class= "icon-action-redo" ></i> </button>',
  prevArrow: '<button type="button" class="slick-prev"> <i class= "icon-action-undo" ></i> </button>',
  responsive: [{
  breakpoint: 1024,
  settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true
  }
  },
  {
  breakpoint: 768,
  settings: {
  slidesToShow: 2,
  slidesToScroll: 2
  }
  },
  {
  breakpoint: 480,
  settings: {
  slidesToShow: 1,
  slidesToScroll: 1
  }
  }
  ]
  });