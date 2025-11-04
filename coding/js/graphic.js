$(function () {
  // graphic slider--------------------------------
  const cardSlider = new Swiper(".swiper.card-slider", {
    speed: 1400,
    slidesPerView: "auto",
    // slidesPerGroup: 1,
    centeredSlides: true,
    loop: true,

    slideToClickedSlide: true,
    // loopAdditionalSlides: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    on: {
      slideChange: function () {
        $(".card-slider .swiper-slide").toggleClass("on");

        const sIdx = this.realIndex;

        setTimeout(function () {
          // 배경
          $(".bg-list .bg").fadeOut(200);
          $(".bg-list .bg").eq(sIdx).fadeIn(600);

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

        $gallery.on("click", function () {
          const $window = $(window);
          $dim.fadeIn();
          $popup.addClass("active");
          const $target = $(this).find("img");
          const imgSrc = $target.attr("src");

          if (imgSrc) {
            $("<img/>")
              .on("load", function () {
                $galleryContent.html(`<img src="${imgSrc}"/>`);
                $(".gallery-content img").css({
                  "object-fit": "cover",
                  height: "100%",
                  "max-width": "100%",
                });
                //           const windowWidth = $window.width();
                // const maxPopupWidth = Math.min(windowWidth * 0.9);
                // $popup.css('max-width', maxPopupWidth);
                $popup.css("max-width", $window.outerWidth() / 3);
              })
              .attr("src", imgSrc);
          }
        });

        function close() {
          $dim.fadeOut();
          $popup.removeClass("active");
          // $galleryContent.html("");
          $popup.css("width", "");
        }

        $dim.on("click", function () {
          close();
        });

        $btnClose.on("click", function () {
          close();
        });

        $(".swiper-slide").on("click", function () {
          cardSlider.autoplay.stop();
        });
        $dim.on("click", function () {
          cardSlider.autoplay.start();
        });
        $btnClose.on("click", function () {
          cardSlider.autoplay.start();
        });
      },
    },
  });
});
