document.addEventListener("DOMContentLoaded", () => {
  // <!-- Initialize Swiper(project) -->

  var projectSlide = new Swiper(".projectSlide", {
    direction: "vertical",

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 800,
    mousewheel: true,
    loop: true,
    disableOnInteraction: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,

    on: {
      slideChange: function () {
        $(".projectSlide .swiper-slide").toggleClass("on");

        const sIdx = this.realIndex;

        setTimeout(function () {
          // 텍스트
          $(".txt-con .pro-txt h2").hide();
          $(".txt-con .pro-txt h2").eq(sIdx).fadeIn(500);
          $(".txt-con .pro-txt strong").hide();
          $(".txt-con .pro-txt strong").eq(sIdx).fadeIn(500);
          $(".txt-con .pro-txt .pro-info").hide();
          $(".txt-con .pro-txt .pro-info").eq(sIdx).fadeIn(500);
          $(".txt-con .pro-txt .pro-exp").hide();
          $(".txt-con .pro-txt .pro-exp").eq(sIdx).fadeIn(500);

          // 텍스트
          // $(".door-wrap .pro-mid-door").fadeOut(200);
          // $(".door-wrap .pro-mid-door").eq(sIdx).fadeIn(600);
          // SVG 스타일 변경
          const svgStyles = getSvgStyles(sIdx);
          changeSvgStyles(svgStyles);
        }, 100);
      },
    },
  });

  // 각 슬라이드에 맞는 SVG 스타일
  function getSvgStyles(index) {
    const stylesArray = [
      // 슬라이드 1의 스타일
      {
        "#midDoor path": {
          fill: "#fff",
          stroke: "#000",
          opacity: "0.8",
        },

        ".gnb li:nth-child(2)": {
          color: "#000",
        },
        ".gnb li:nth-child(3)": {
          color: "#000",
        },

        // ".gnb li": {
        //   color: "#000",
        // },

        ".logo a": {
          filter: "invert(0)",
        },

        ".projectSlide .swiper-pagination-bullet": {
          background: "#000",
          opacity: "0.2",
        },

        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#000",
          opacity: "1",
        },
      },
      // 슬라이드 2의 스타일
      {
        "#midDoor path": {
          fill: "#00659D",
          stroke: "#fff",
          opacity: "0.5",
        },
        // ".gnb li a": {
        //   color: "#fff",
        // },

        ".gnb li:nth-child(2)": {
          color: "#fff",
        },
        ".gnb li:nth-child(3)": {
          color: "#fff",
        },

        ".logo a": {
          filter: "invert(100%)",
        },

        ".projectSlide .swiper-pagination-bullet": {
          background: "#fff",
          opacity: "0.2",
        },

        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#C6D7E4",
          opacity: "1",
        },
      },
      // 슬라이드 3의 스타일
      {
        "#midDoor path": {
          fill: "#405E00",
          stroke: "#fff",
          opacity: "0.7",
        },
        // ".gnb li a": {
        //   color: "#fff",
        // },

        ".gnb li:nth-child(2)": {
          color: "#fff",
        },
        ".gnb li:nth-child(3)": {
          color: "#fff",
        },

        ".logo a": {
          filter: "invert(100%)",
        },

        ".projectSlide .swiper-pagination-bullet": {
          background: "#fff",
          opacity: "0.3",
        },

        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#F6FFE2",
          opacity: "1",
        },
      },
      // 추가적으로 필요한 만큼 계속 추가
    ];

    return stylesArray[index] || {}; // 객체가 없는 경우 빈 객체 반환
  }

  // SVG 스타일 변경
  function changeSvgStyles(styles) {
    if (!styles || Object.keys(styles).length === 0) {
      return;
    }

    // 반복
    Object.keys(styles).forEach((selector) => {
      const styleObject = styles[selector];

      //스타일 적용
      Object.keys(styleObject).forEach((property) => {
        $(selector).css(property, styleObject[property]);
      });
    });
  }

  //project 배경 마우스 따라 움직임 효과----------
  let px;
  let py;
  let pmx;
  let pmy;

  function moving() {
    $(".pic").css({
      transform: `translate(${pmx}px, ${pmy}px)`,
    });
    window.requestAnimationFrame(moving);
  }

  $(document).on("mousemove", function (e) {
    px = e.pageX;
    py = e.pageY;

    const ancho = $(window).width() / 2;
    const largo = $(window).height() / 2;

    pmx = (ancho - px) * (1 / 100);
    pmy = (largo - py) * (1 / 100);

    // console.log(mx, my);
  });

  moving();
});

$(function () {
  // 마우스 커서 커스텀-----------------
  const $window = $(window);
  const $cursor = $(".cursor");

  $window.on("mousemove", function (e) {
    let mouseX = e.pageX + 50; // document의 x좌표값
    let mouseY = e.pageY + 50; // document의 y좌표값

    $cursor.css({
      left: mouseX + "px",
      top: mouseY + "px",
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

// 메인 요소들 gsap

// window.addEventListener("load", () => {
//   const aboutTL = gsap.timeline();
//   tl.from(".mid-txt > img", { y: -50, autoAlpha: 0 });
// });
