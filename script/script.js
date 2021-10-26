// Initializing AOS
AOS.init();

// Reload on top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Opening and closing side nav for small screens
function openNav() {
  $("#side-nav").css("width", "250px");
}

function closeNav() {
  $("#side-nav").css("width", "0px");
}

// Navbar background colour when scrolled
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
      $(".navbar").addClass("navbar-bg");
  }
  else {
    $(".navbar").removeClass("navbar-bg");
  }
});

// Hover for social icons
function hover(element) {
  element.setAttribute('src', 'images/icons/hover/' + element.className + '.png');
};

function unhover(element) {
  element.setAttribute('src', 'images/icons/' + element.className + '.png');
};

// Scroll to top button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#top-btn').fadeIn();
  } else {
    $('#top-btn').fadeOut();
  }
});

function topFunction() {
  $("html, body").animate({
    scrollTop: 0
  }, 100);
}

// Adding active class on scroll
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.navbar-nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.navbar-nav ul li').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}
