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

