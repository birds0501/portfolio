document.addEventListener("DOMContentLoaded", () => {
  // --- Initialize Swiper(project) ---
  var projectSlide = new Swiper(".projectSlide", {
    direction: "vertical",
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    speed: 800,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // mousewheel 설정 최적화
    mousewheel: {
      forceToAxis: true,
      invert: false,
      releaseOnEdges: true,
      thresholdDelta: 0,
      thresholdTime: 0,
      eventsTarget: ".projectSlide",
      passive: true, // <-- passive 적용
    },
    on: {
      slideChange: function () {
        $(".projectSlide .swiper-slide").toggleClass("on");

        const sIdx = this.realIndex;

        setTimeout(function () {
          // 텍스트 숨기고 나타내기
          const txtSelectors = [
            ".txt-con .pro-txt h2",
            ".txt-con .pro-txt strong",
            ".txt-con .pro-txt .pro-info",
            ".txt-con .pro-txt .pro-exp",
            ".pro-link",
          ];

          txtSelectors.forEach((selector) => {
            $(selector).hide();
            $(selector).eq(sIdx).fadeIn(500);
          });

          // SVG 스타일 변경
          const svgStyles = getSvgStyles(sIdx);
          changeSvgStyles(svgStyles);
        }, 100);
      },
    },
  });

  // --- SVG 스타일 관련 함수 ---
  function getSvgStyles(index) {
    const stylesArray = [
      {
        "#midDoor path": { fill: "#fff", stroke: "#000", opacity: "0.7" },
        ".gnb li:nth-child(2)": { color: "#000" },
        ".gnb li:nth-child(3)": { color: "#000" },
        ".logo a": { filter: "invert(0)" },
        ".projectSlide .swiper-pagination-bullet": {
          background: "#000",
          opacity: "0.2",
        },
        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#000",
          opacity: "1",
        },
      },
      {
        "#midDoor path": {
          fill: "#00659D",
          stroke: "#fff",
          opacity: "0.8",
          filter: "blur(0.8)",
        },
        ".gnb li:nth-child(2)": { color: "#fff" },
        ".gnb li:nth-child(3)": { color: "#fff" },
        ".logo a": { filter: "invert(100%)" },
        ".projectSlide .swiper-pagination-bullet": {
          background: "#fff",
          opacity: "0.2",
        },
        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#C6D7E4",
          opacity: "1",
        },
      },
      {
        "#midDoor path": { fill: "#405E00", stroke: "#fff", opacity: "0.8" },
        ".gnb li:nth-child(2)": { color: "#fff" },
        ".gnb li:nth-child(3)": { color: "#fff" },
        ".logo a": { filter: "invert(100%)" },
        ".projectSlide .swiper-pagination-bullet": {
          background: "#fff",
          opacity: "0.3",
        },
        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#F6FFE2",
          opacity: "1",
        },
      },
      {
        "#midDoor path": { fill: "#01003D", stroke: "#fff", opacity: "0.5" },
        ".gnb li:nth-child(2)": { color: "#fff" },
        ".gnb li:nth-child(3)": { color: "#fff" },
        ".logo a": { filter: "invert(100%)" },
        ".projectSlide .swiper-pagination-bullet": {
          background: "#fff",
          opacity: "0.3",
        },
        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#f3c968",
          opacity: "1",
        },
      },
      {
        "#midDoor path": { fill: "#A7AEC6", stroke: "#fff", opacity: "0.7" },
        ".gnb li:nth-child(2)": { color: "#fff" },
        ".gnb li:nth-child(3)": { color: "#fff" },
        ".logo a": { filter: "invert(100%)" },
        ".projectSlide .swiper-pagination-bullet": {
          background: "#fff",
          opacity: "0.3",
        },
        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#3284FF",
          opacity: "1",
        },
      },
      {
        "#midDoor path": { fill: "#000", stroke: "#fff", opacity: "0.95" },
        ".gnb li:nth-child(2)": { color: "#fff" },
        ".gnb li:nth-child(3)": { color: "#fff" },
        ".logo a": { filter: "invert(100%)" },
        ".projectSlide .swiper-pagination-bullet": {
          background: "#fff",
          opacity: "0.3",
        },
        ".projectSlide .swiper-pagination-bullet-active": {
          background: "#F40F8B",
          opacity: "1",
        },
      },
    ];
    return stylesArray[index] || {};
  }

  function changeSvgStyles(styles) {
    if (!styles) return;
    Object.keys(styles).forEach((selector) => {
      const styleObject = styles[selector];
      Object.keys(styleObject).forEach((prop) => {
        $(selector).css(prop, styleObject[prop]);
      });
    });
  }

  // --- 마우스 따라 배경 움직임 ---
  let px = 0,
    py = 0,
    pmx = 0,
    pmy = 0;

  function moving() {
    $(".pic").css({
      transform: `translate(${pmx}px, ${pmy}px)`,
    });
    requestAnimationFrame(moving);
  }

  $(document).on("mousemove", (e) => {
    px = e.pageX;
    py = e.pageY;

    const centerX = $(window).width() / 2;
    const centerY = $(window).height() / 2;

    pmx = (centerX - px) / 100;
    pmy = (centerY - py) / 100;
  });

  moving();
});
