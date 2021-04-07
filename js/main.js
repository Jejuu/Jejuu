function timePassed() {
  $(".hero").hide();
  $(".about").show();
  $("html").height("unset");
  $(".content").hide();
}

//  TimeOut
var date = new Date("2021/4/7 00:00:00");
setToHappen = function(fn, date) {
  var now = new Date().getTime();
  var diff = date.getTime() - now;
  console.log(diff);
  return setTimeout(fn, diff);
}
setToHappen(timePassed, date);


// Scroll animation

$(document).ready(function() {

  // Add smooth scrolling to all links
  $(".transait").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//  countdown Timer

$(document).ready(function() {
  $("#timer").countdowntimer({
    dateAndTime: "2021/4/8 00:00:00",
    regexpMatchFormat: "([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})",
    regexpReplaceWith: "$1 days  / $2 hours  / $3 minutes  / $4 seconds "
  });
});

// party crafetti

for (var i = 0; i < 150; i++) {
  create(i);
}

function create(i) {
  var width = Math.random() * 8;
  var height = width * 0.4;
  var colourIdx = Math.ceil(Math.random() * 3);
  var colour = "red";
  switch (colourIdx) {
    case 1:
      colour = "yellow";
      break;
    case 2:
      colour = "blue";
      break;
    default:
      colour = "red";
  }
  $('<div class="confetti-' + i + ' ' + colour + '"></div>').css({
    "width": width + "px",
    "height": height + "px",
    "top": 0,
    "left": Math.random() * 100 + "%",
    "opacity": Math.random() + 0.7,
    "transform": "rotate(" + Math.random() * 360 + "deg)"
  }).appendTo('.wrapper');

  drop(i);
}

function drop(x) {
  $('.confetti-' + x).animate({
    top: "100%",
    left: "+=" + Math.random() + "%"
  }, Math.random() * 3000 + 2000, function() {
    reset(x);
  });
}

function reset(x) {
  $('.confetti-' + x).animate({
    "top": 0,
    "left": Math.random() * 100 + "%"
  }, 0, function() {
    drop(x);
  });
}