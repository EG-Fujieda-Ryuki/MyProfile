function PageTopAnime(){
  var scroll = $(window).scrollTop();
  if (scroll >= 200){
    $('#page-top').removeClass('RightMove');
    $('#page-top').addClass('LeftMove');
  } else {
    if($('#page-top').hasClass('LeftMove')){
        $('#page-top').removeClass('LeftMove');
        $('#page-top').removeClass('LeftMove');
      }
    }
}
  
  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});
  
  
  // #page-topをクリックした際の設定
$('#page-top').click(function () {
$('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});
  