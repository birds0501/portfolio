$(function () {
  // about fullpage--------------------------------------------
  $("#fullpage").fullpage({
    //앵커 설정
    anchors: ["about1", "about2", "about3"],
    //navigation: true,

    //인디케이터 커스텀(menu적용)
    //1.html body맨 상단에 붙여놓고 script에 정의
    //2.css로 #indicatorMenu잡고 변경해주기
    menu: "#aboutMenu",
    scrollingSpeed: 1000,

    //헤더 보이게 하기
    fixedElements: "#header",

    //섹션의 컨텐츠가 수직을 기준으로 중앙에 위치하도록
    verticalCentered: false,

    afterLoad: function (origin, destination, direction) {
      if (destination.index === 2) {
        about2GSAPAnimation();
      }
    },
  });

  // about1 circle 움직임---------------------------------------
  const $window = $(window);
  const $midElement = $(".mid-element");
  const $swiperSlide1 = $(".swiper-slide.sym");
  const $swiperSlide2 = $(".swiper-slide.breath .image02");
  const $swiperSlide3 = $(".swiper-slide.breath .image03");
  const $swiperSlide4 = $(".swiper-slide.challenge");
  const $aboutCircle1 = $midElement.find(".circle");
  const $aboutCircle2 = $swiperSlide1.find(".circle");
  const $aboutCircle3 = $swiperSlide4.find(".circle");
  const $aboutCircle4 = $(".my-photo");
  const $aboutMe = $(".me");

  let x = 0;
  let y = 0;

  let mx = 0;
  let my = 0;
  let speed = 0.008;

  let movingObj;

  function getOffset() {
    $window.on("mousemove", function (e) {
      x = Math.max(-100, Math.min(100, e.pageX - $window.outerWidth() / 2));
      y = Math.max(-100, Math.min(100, e.pageY - $window.outerHeight() / 2));
    });
  }

  function moving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    $aboutCircle1.css({
      transform: `translate(${mx.toFixed(2) / 3}px, ${my.toFixed(2) / 3}px)`,
    });
    $aboutCircle2.css({
      transform: `translate(${-mx.toFixed(2) / 4}px, ${-my.toFixed(2) / 4}px)`,
    });
    $swiperSlide2.css({
      transform: `translate(${mx.toFixed(2) / 10}px, ${my.toFixed(2) / 10}px)`,
    });
    $swiperSlide3.css({
      transform: `translate(${-mx.toFixed(2) / 5}px, ${-my.toFixed(2) / 5}px)`,
    });
    $aboutCircle3.css({
      transform: `translate(${-mx.toFixed(2) / 6}px, ${-my.toFixed(2) / 6}px)`,
    });

    $aboutCircle4.css({
      transform: `translate(${-mx.toFixed(2) / 4}px, ${-my.toFixed(2) / 4}px)`,
    });

    $aboutMe.css({
      transform: `translate(${mx.toFixed(2) / 5}px, ${my.toFixed(2) / 5}px)`,
    });

    movingObj = requestAnimationFrame(moving);
  }

  const initMoving = function () {
    getOffset();

    moving();
  };

  initMoving();

  //about slider------------------------
  var swiper = new Swiper(".aboutSlide", {
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "fraction",
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

$(function () {
  // 마우스 커서 커스텀-----------------
  const $window = $(window);
  const $cursor = $(".cursor");

  $window.on("mousemove", function (e) {
    console.log(e);
    let mouseX = e.pageX;
    let mouseY = e.pageY;

    $cursor.add($cursor).css({
      left: mouseX,
      top: mouseY,
    });
  });

  //click 클래스 적용/삭제
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

window.addEventListener("load", () => {
  const about1TL = gsap.timeline();

  about1TL.from(".mid-element .mid-txt > img", {
    y: 50,
    autoAlpha: 0,
    delay: 2,
    stagger: 0.5,
  });

  about1TL.from(".mid-element .mid-txt > p", {
    y: 50,
    autoAlpha: 0,
  });

  about1TL.from(".scroll-txt", {
    autoAlpha: 0,
    delay: 0.5,
  });

  function about2GSAPAnimation() {
    const about2TL = gsap.timeline();

    about2TL.from(".sym .keyword img", {
      y: 30,
      autoAlpha: 0,
    });
  }
});
