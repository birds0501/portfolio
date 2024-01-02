$(function () {
  //로딩
  //대상을 변수에 저장
  const $window = $(window);
  const $body = $("body");
  const $loading = `<div class="loading" style="background : #fff">
  <div class="spinner">
  <div class="double-bounce1"></div>
  <div class="double-bounce2"></div>
</div>
  </div>`; //html에서 잘 돌아가는지 확인 후 스크립트로 붙이기(모든 페이지에 로딩 페이지가 들어가야 하므로)

  //body의 마지막 부분에 집어넣기
  $body.append($loading);
  const $target = $(".loading"); //값을 다시 담기

  //로딩이 완료되면 (Load)
  $window.on("load", function () {
    //너무 빨리 사라지므로 조금 이따가 사라지게끔(로딩 페이지 길게)
    //setTimeout(동작, 시간)
    setTimeout(function () {
      $target.fadeOut();

      //1초 후에 로딩요소 지우기
      setTimeout(function () {
        $target.remove();
      }, 2000);
    }, 1000);
  });
});
