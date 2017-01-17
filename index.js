$("body").click(function(e) {



  // Remove any old one
  $(".ripple").remove();

  // Setup
  var posX = $(this).offset().left,
    posY = $(this).offset().top,
    bodyWidth = $(this).width(),
    bodyHeight = $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  // Make it round!
  if (bodyWidth >= bodyHeight) {
    bodyHeight = bodyWidth;
  } else {
    bodyWidth = bodyHeight;
  }

  // Get the center of the element
  var x = e.pageX - posX - bodyWidth / 2;
  var y = e.pageY - posY - bodyHeight / 2;

  // Add the ripples CSS and start the animation
  $(".ripple").css({
    width: bodyWidth,
    height: bodyHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});
