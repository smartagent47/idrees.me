// Making navigation sticky on scroll
$('#nav').sticky({ topSpacing: 0 });
$('#nav ul').onePageNav({
  scrollSpeed: 400,
  currentClass: 'current',
  easing: 'swing',
});

$(window).scroll(function () {
  if ($(window).scrollTop() < $(window).height() / 2) {
    $('#nav').find('li').removeClass('current');
  }
});
