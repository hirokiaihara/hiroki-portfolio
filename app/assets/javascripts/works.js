$(document).on('turbolinks:load', function() {
  //関数定義
  function mouseOver(imageList, firstImage) {
    $(imageList).mouseover(function() {
      var selectedSrc = $(this).attr('src');
      $(firstImage).stop().fadeOut(50, function(){
        $(this).attr('src', selectedSrc);
        $(this).stop().fadeIn(200);
      });
      $(this).css({"border": "2px solid #0082c8"});
    });
    $(imageList).mouseout(function(){
      $(this).css({"border": ""});
    });
  }
  //関数の呼び出し
  mouseOver('.imageList_01', '.firstImage_01');
  mouseOver('.imageList_02', '.firstImage_02');
});