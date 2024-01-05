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

        // $btnNext.on("click", function () {
        //   // 현재 활성화된 슬라이드의 인덱스 가져오기
        //   const sIdx = cardSlider.activeIndex;

        //   //  const $originalSlides = cardSlider.slides.not(".swiper-slide-duplicate");

        //   // 다음 슬라이드의 인덱스 계산
        //   const nextIndex = (sIdx + 1) % cardSlider.slides.length;
        //   // console.log(sIdx, nextIndex);

        //   // 다음 슬라이드의 이미지 가져오기
        //   const $nextSlide = cardSlider.slides.eq(nextIndex);
        //   const $nextImage = $nextSlide.find("img");
        //   const nextImgSrc = $nextImage.attr("src");

        //   // 다음 슬라이드의 이미지를 $galleryContent에 설정
        //   if (nextImgSrc) {
        //     $("<img/>")
        //       .on("load", function () {
        //         $galleryContent.html(`<img src="${nextImgSrc}"/>`);
        //         $(".gallery-content img").css({
        //           "object-fit": "cover",
        //           height: "100%",
        //           width: "100%",
        //         });
        //         $popup.css("width", $(window).outerWidth() / 3);
        //       })
        //       .attr("src", nextImgSrc);
        //   }

        //   // cardSlider의 다음 슬라이드로 이동
        //   cardSlider.slideTo(nextIndex);
        //   // cardSlider.slideTo(sIdx);
        //   // cardSlider.slideNext();
        // });

        // $btnPrev.on("click", function () {
        //   // 현재 활성화된 슬라이드의 인덱스 가져오기
        //   const sIdx = cardSlider.activeIndex;
        //   // console.dir(cardSlider.slides);

        //   // 이전 슬라이드의 인덱스 계산
        //   const prevIndex =
        //     sIdx === 0 ? cardSlider.slides.length - 1 : sIdx - 1;

        //   // 이전 슬라이드의 이미지 가져오기
        //   const $prevSlide = cardSlider.slides.eq(prevIndex);
        //   const $prevImage = $prevSlide.find("img");
        //   const prevImgSrc = $prevImage.attr("src");

        //   // 이전 슬라이드의 이미지를 $galleryContent에 설정
        //   if (prevImgSrc) {
        //     $("<img/>")
        //       .on("load", function () {
        //         $galleryContent.html(`<img src="${prevImgSrc}"/>`);
        //         $(".gallery-content img").css({
        //           "object-fit": "cover",
        //           height: "100%",
        //           width: "100%",
        //         });
        //         $popup.css("width", $(window).outerWidth() / 3);
        //       })
        //       .attr("src", prevImgSrc);
        //   }

        //   // cardSlider의 이전 슬라이드로 이동
        //   cardSlider.slideTo(prevIndex);
        //   // cardSlider.slideTo(sIdx);
        //   // cardSlider.slidePrev();
        // });
        // // esc 누를 때 지워짐
        // $(document).keydown(function (e) {
        //   if (e.keyCode == 27) {
        //     close();
        //   }
        // });

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
