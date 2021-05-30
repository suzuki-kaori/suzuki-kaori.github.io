function play_se(){
  var warning = new Audio("Warning.mp3");
  var voice = new Audio("softな声.wav");
  warning.play();
  voice.play();
  navigator.vibrate([200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100,])
}

//うんちっち
$(function(){
//ページ読み込みが完了すると実行


//ブラウザバック禁止
history.pushState(null,null,null);
$(window).on('popstate',function(e){
if(!e.orininalEvent.state){
play_se();
history.pushState(null,null,null);
return;
}
});



  $(".modal").modal({dismissible: false});
  $("#alert").modal("open");
  $("#close").click(function(){
    $("#alert").modal("close");
    play_se();
  })


 var device = navigator.userAgent.match(/Android|iPhone|iPad/)
 if (device == null){
   device = "端末";
 }
 $("#device").text(device);


  var time = 200;
  setInterval(function(){
    time--;
    $("#timer").text(time);
  }, 1000);
});
