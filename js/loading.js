// $(function () {
//   //로딩
//   //대상을 변수에 저장
//   const $window = $(window);
//   const $body = $("body");
//   const $loading = $(".loading"); //html에서 잘 돌아가는지 확인 후 스크립트로 붙이기(모든 페이지에 로딩 페이지가 들어가야 하므로)

//   //body의 마지막 부분에 집어넣기
//   $body.append($loading);
//   const $target = $(".loading"); //값을 다시 담기

//   //로딩이 완료되면 (Load)
//   $window.on("load", function () {
//     //너무 빨리 사라지므로 조금 이따가 사라지게끔(로딩 페이지 길게)
//     //setTimeout(동작, 시간)
//     setTimeout(function () {
//       $target.fadeOut();

//       //1초 후에 로딩요소 지우기
//       setTimeout(function () {
//         $target.remove();
//       }, 500);
//     }, 1000);
//   });
// });

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
    }, 1000); // 1초 정도 여유 있게
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
