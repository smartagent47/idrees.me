if (window.location.pathname.indexOf('pages') > -1) {
  // Random color change of header in our project pages
  let colorArray = ['#ffea00', '#000'];

  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  $('.project-header').css('background', randomColor);
  $('meta[name=theme-color]').attr('content', randomColor);
} else {
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
}
