$(document).on('turbolinks:load', function() {
  $('.imageList').mouseover(function() {
    var selectedSrc = $(this).attr('src').replace(/^(.+)_firstImage(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
    $('.firstImage').stop().fadeOut(50, function(){
      $('.firstImage').attr('src', selectedSrc);
      $('.firstImage').stop().fadeIn(200);
    });
    $(this).css({"border": "2px solid #0082c8"});
  });
  $('.imageList').mouseout(function(){
    $(this).css({"border": ""});
  });
});

$(document).on('turbolinks:load', function() {
  $('.imageList_02').mouseover(function() {
    var selectedSrc = $(this).attr('src').replace(/^(.+)_firstImage_02(\.gif|\.jpg|\.png+)$/, "$1"+"$2");
    $('.firstImage_02').stop().fadeOut(50, function(){
      $('.firstImage_02').attr('src', selectedSrc);
      $('.firstImage_02').stop().fadeIn(200);
    });
    $(this).css({"border": "2px solid #0082c8"});
  });
  $('.imageList_02').mouseout(function(){
    $(this).css({"border": ""});
  });
});