$(function () {
  const $window = $(window);
  const $body = $("body");
  const $loading = $(".loading");

  // body 끝에 로딩 요소 붙이기
  $body.append($loading);

  const $target = $(".loading");
  let isLoaded = false;

  // 모든 리소스 로드 완료 시 실행
  $window.on("load", function () {
    isLoaded = true;
    setTimeout(function () {
      $target.fadeOut(500, function () {
        $target.remove();
      });
    }, 700); // 1초 정도 여유 있게
  });

  // 백업용 타이머 (혹시 load 이벤트가 안 오면 6초 뒤 강제 제거)
  setTimeout(function () {
    if (!isLoaded) {
      console.warn("⚠️ 일부 리소스 로드 실패로 로딩 강제 종료됨");
      $target.fadeOut(500, function () {
        $target.remove();
      });
    }
  }, 1500);
});
