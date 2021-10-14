AOS.init();

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function openNav() {
  $("#side-nav").css("width", "250px");
}

function closeNav() {
  $("#side-nav").css("width", "0px");
}

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
      $(".navbar").addClass("navbar-dark");
  }
  else {
    $(".navbar").removeClass("navbar-dark");
}
});

function hover(element) {
  element.setAttribute('src', 'images/icons/hover/' + element.className + '.png');
};

function unhover(element) {
  element.setAttribute('src', 'images/icons/' + element.className + '.png');
};

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#top-btn').fadeIn();
  } else {
    $('#top-btn').fadeOut();
  }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $("html, body").animate({
    scrollTop: 0
  }, 100);
}