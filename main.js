$(document).ready(function () {
  $("#interactive-button").on("click", function () {
    alert("Wow");
  });

  var animations = [
    "animation1",
    "animation2",
    "animation3",
    "animation4",
    "animation5",
  ];
  $(".box").click(function () {
    var currentAnimation = $(this).attr("class").split(" ")[1];
    if (currentAnimation) {
      $(this).removeClass(currentAnimation);
    }

    $(this).addClass(getAnimationClass());
  });

  function getAnimationClass() {
    return animations[Math.floor(Math.random() * animations.length)];
  }
});
