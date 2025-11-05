document.addEventListener("DOMContentLoaded", () => {
  // main lineLeft, lineRight 애니매이션----------------
  setTimeout(function () {
    document.querySelector(".line-left").style.opacity = "1";
    document.querySelector(".line-right").style.opacity = "1";

    new Vivus("lineLeft", {
      duration: 200,
      type: "oneByOne",
      animTimingFunction: Vivus.EASE,
    });

    new Vivus("lineRight", {
      duration: 200,
      type: "oneByOne",
      animTimingFunction: Vivus.EASE,
    });

    // 애니메이션이 완료된 후에 1.5초 후에 GSAP 애니메이션 실행
    setTimeout(function () {
      mainGSAPAnimation();
    }, 1500);

    setTimeout(function () {
      mMouseMoving();
    }, 3500);
  }, 1200);
});

function mainGSAPAnimation() {
  const maintl = gsap.timeline();

  maintl.from(".harmony img", {
    y: 30,
    duration: 0.6,
    autoAlpha: 0,
    delay: 0.1,
  });

  maintl.from(
    ".exp",
    {
      y: 20,
      duration: 0.3,
      autoAlpha: 0,
    },
    "<"
  );

  maintl.from("nav", {
    y: -20,
    duration: 0.4,
    autoAlpha: 0,
    delay: 0.1,
  });

  maintl.from(
    ".side-text p",
    {
      y: -20,
      duration: 0.4,
      autoAlpha: 0,
      stagger: 0.1,
      delay: 0.5,
    },
    "-=.4"
  );
  maintl.from(
    ".go-pro-btn a",
    {
      x: 5,
      duration: 0.2,
      autoAlpha: 0,
    },
    "<"
  );
}

const mMouseMoving = function () {
  // main line, circle요소 마우스 따라 움직이기-------------
  const $window = $(window);
  const $mainVisual = $(".main-visual");
  const $lineRight = $mainVisual.find(".line-right");
  const $lineLeft = $mainVisual.find(".line-left");
  const $mainCircle = $mainVisual.find(".main-circle");
  //마우스의 좌표값
  let x = 0;
  let y = 0;

  //보정되는 마우스 좌표값
  let mx = 0;
  let my = 0;
  let speed = 0.008;

  //반복되는 동작(moving)을 변수에 저장
  let movingObj;

  //함수를 3개 만들기
  //1.마우스 좌표값 받아오는 함수
  function getOffset() {
    $window.on("mousemove", function (e) {
      //마우스 좌표의 시작지점을 화면믜 정 중앙으로 이동
      // x = e.pageX - $window.outerWidth() / 2;
      // y = e.pageY - $window.outerHeight() / 2;
      x = Math.max(-100, Math.min(90, e.pageX - $window.outerWidth() / 2));
      y = Math.max(-100, Math.min(100, e.pageY - $window.outerHeight() / 2));
    });
  }
  //2.오브젝트를 움직이게 하는 함수
  //마우스의 기본 좌표값을 기준으로 어떤 값을 만들어내자
  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    //오브젝트에 좌표값 적용
    $lineRight.css({
      transform: `translate( 0px, ${my.toFixed(2) / 3}px)`,
    });
    $mainCircle.css({
      transform: `translate(${-mx.toFixed(2) / 1.5}px, ${
        -my.toFixed(2) / 2
      }px)`,
    });
    $lineLeft.css({
      transform: `translate( 0px, ${-my.toFixed(2) / 2}px)`,
      filter: `blur(${-my.toFixed(2) * 0.05}px)`,
    });
    //부드럽게 반복
    movingObj = requestAnimationFrame(moving);
  }

  //3.1번과 2번을 실행시키는 함수
  // function initMoving(){} -->이름이 있는 함수

  const initMoving = function () {
    getOffset();

    moving();
  };

  initMoving();
};
