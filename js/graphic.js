$(function () {
  // graphic slider--------------------------------
  const cardSlider = new Swiper(".swiper.card-slider", {
    speed: 1400,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,

    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    on: {
      slideChange: function () {
        $(".card-slider .swiper-slide").toggleClass("on");

        const sIdx = this.realIndex;

        setTimeout(function () {
          // 배경
          // $(".bg-list .bg").fadeOut(200);
          // $(".bg-list .bg").eq(sIdx).fadeIn(600);

          // 텍스트
          $(".con-list .con").hide();
          $(".con-list .con").eq(sIdx).fadeIn(600);
        }, 100);

        //배경 색상
        $(".bg-color-list .color").fadeOut(200);
        $(".bg-color-list .color").eq(sIdx).fadeIn(600);

        $(".logo a").css({ filter: "invert(1)" });
        $(".gnb li:nth-child(3), .gnb li:nth-child(1)").css({
          color: "#fff",
        });
      },

      click: function () {
        const $dim = $(".dim");
        const $popup = $(".popup");
        const $galleryContent = $(".gallery-content");
        const $btnClose = $(".btn-close");
        const $btnNext = $(".btn-next");
        const $btnPrev = $(".btn-prev");
        const $gallery = $(".swiper-slide");
        const $window = $(window);

        // ------------------------
        // 팝업 이미지 업데이트 함수
        // ------------------------
        function updatePopupImage() {
          const imgSrc = $(".swiper-slide-active img").attr("src");

          if (imgSrc) {
            $galleryContent.html(`<img src="${imgSrc}"/>`);
            $(".gallery-content img").css({
              "object-fit": "cover",
              height: "100%",
              "max-width": "100%",
            });

            $popup.css("max-width", $window.outerWidth() / 2.2);
          }
        }

        // ------------------------
        // 슬라이드 클릭 → 팝업 열기
        // ------------------------
        $gallery.on("click", function () {
          $dim.fadeIn();
          $popup.addClass("active");

          updatePopupImage(); // 팝업 이미지 세팅
          cardSlider.autoplay.stop();
        });

        // ------------------------
        // 팝업 닫기
        // ------------------------
        function close() {
          $dim.fadeOut();
          $popup.removeClass("active");
          $popup.css("width", "");
          cardSlider.autoplay.start();
        }

        $dim.on("click", close);
        $btnClose.on("click", close);

        // ------------------------
        // NEXT 버튼
        // ------------------------
        $btnNext.on("click", function (e) {
          e.stopPropagation();
          cardSlider.slideNext();

          setTimeout(function () {
            updatePopupImage();
          });
        });

        // ------------------------
        // PREV 버튼
        // ------------------------
        $btnPrev.on("click", function (e) {
          e.stopPropagation();
          cardSlider.slidePrev();

          setTimeout(function () {
            updatePopupImage();
          });
        });
      },
    },
  });
});
