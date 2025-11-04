$(function () {
  const $window = $(window);
  const $cursor = $(".cursor");

  let mouseX = 0,
    mouseY = 0;

  $window.on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  function animate() {
    gsap.to($cursor, {
      duration: 0.1, // 0.1초 동안 부드럽게 이동
      left: mouseX,
      top: mouseY,
      ease: "power3.out",
    });
    requestAnimationFrame(animate);
  }

  animate();

  $window.on("mousedown", function () {
    $cursor.addClass("click");
  });
  $window.on("mouseup", function () {
    $cursor.removeClass("click");
  });

  $("a").hover(
    function () {
      $cursor.addClass("click");
    },
    function () {
      $cursor.removeClass("click");
    }
  );
});
