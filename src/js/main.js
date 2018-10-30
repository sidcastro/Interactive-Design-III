// wait for DOM to load before executing js
$(document).ready(function() {
  // on click, first remove any previously added "complete" class,
  // then add it to the clicked link
  $('#menu li a').on('click', function() {
    $('#menu li a').each(function(index) {
      $(this).removeClass('complete');
    });
    $(this).addClass('complete');
  });
});

// $(document).ready(function() {
//   $('<hr>').insertBefore(".app-3-div")
// });
//
// $(document).ready(function() {
//   $('<hr>').insertBefore(".app-2-div")
// });
//
// $(document).ready(function() {
//   $('<hr>').insertBefore(".app-1-div")
// });
