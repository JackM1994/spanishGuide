var $slides, counter, $selectors, $btns, currentIndex, nextIndex;

var cycle = function cycle(index) {
  var $currentSlide, $nextSlide, $currentSelector, $nextSelector;
  nextIndex = index !== undefined ? index : nextIndex;
  $currentSlide = $($slides.get(currentIndex));
  $currentSelector = $($selectors.get(currentIndex));
  $nextSlide = $($slides.get(nextIndex));
  $nextSelector = $($selectors.get(nextIndex));
  $currentSlide.removeClass("active").css("z-index", "0");
  $nextSlide.addClass("active").css("z-index", "1");
  $currentSelector.removeClass("current");
  $nextSelector.addClass("current");
  currentIndex = index !== undefined ? nextIndex : currentIndex < $slides.length - 1 ? currentIndex + 1 : 0;
  nextIndex = currentIndex + 1 < $slides.length ? currentIndex + 1 : 0;
};

$(function () {
  currentIndex = 0;
  nextIndex = 1;
  $slides = $(".slide");
  $selectors = $(".selector");
  $btns = $(".btn");
  $slides.first().addClass("active");
  $selectors.first().addClass("current");
  counter = window.setInterval(cycle, 6000);
  $selectors.on("click", function (e) {
    var target = $selectors.index(e.target);

    if (target !== currentIndex) {
      window.clearInterval(counter);
      cycle(target);
      counter = window.setInterval(cycle, 6000);
    }
  });
  $btns.on("click", function (e) {
    window.clearInterval(counter);

    if ($(e.target).hasClass("prev")) {
      var target = currentIndex > 0 ? currentIndex - 1 : $slides.length - 1;
      cycle(target);
    } else if ($(e.target).hasClass("next")) {
      cycle();
    }

    counter = window.setInterval(cycle, 6000);
  });
});