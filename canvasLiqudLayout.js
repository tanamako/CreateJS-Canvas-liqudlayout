
var canvasLiquidlayout = (function () {

	window.scrollTo(0,0);
  
  var $wWidth = $(window).innerWidth(),
      $wHeight = $(window).innerHeight(),
      $header = $('.js-header'),
      $box      = $(".js-box"),
      $canvas         = $('#canvas'),
      LOADING_HEIGHT = 217,
      BASESTAGE_HEIGHT = 480,
      BASESTAGE_WIDTH = 320,
      headerHeight = $header.height();

  var lp_loading = (function(){
    var tutorialTop = 0;
   	tutorialTop = ($wHeight - LOADING_HEIGHT - headerHeight)/2;
    $('.p-loading-tutorial').css('padding-top',tutorialTop);
  })();

  // Create.js初期化
  window.lp_init = function(){
    var canvas, stage, exportRoot;
    function init() {
      canvas = document.getElementById("canvas");
      images = images||{};
      var loader = new createjs.LoadQueue(false);
      loader.addEventListener("fileload", handleFileLoad);
      loader.addEventListener("complete", handleComplete);
      loader.loadManifest(lib.properties.manifest);
    }
    init();
    function handleFileLoad(evt) {
      if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }
    function handleComplete(evt) {
      exportRoot = new lib.lp_fix();
      stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      stage.update();
      canvas = document.getElementById("canvas");

      $('.js-movie-wrap__inner').show();
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
      stageResize();
      $('.p-loading-tutorial').remove();
    }

    function stageResize(){

      var MOVIEWRAP_RATIO      = BASESTAGE_WIDTH/BASESTAGE_HEIGHT, 
          MOVIEWRAP_RATIO_MATH = Math.round(MOVIEWRAP_RATIO * 100),
          nowRatio             = Math.round($wWidth / $wHeight * 100);

      if($wWidth <= $wHeight && nowRatio <= MOVIEWRAP_RATIO_MATH){
        $canvas.css({
          "width": $wWidth
        });
      }
      if($wWidth <= $wHeight && nowRatio >= MOVIEWRAP_RATIO_MATH || $wWidth >= $wHeight){
        $canvas.css({
          "height": $wHeight - tutorialHeaderHeight
        });
      }
      $box.css({
        "width": $canvas.width(),
        "height": $canvas.height()
      });
      $box.css('left', ( $(window).innerWidth() - $box.width() ) / 2 );
    }
  };

  var lastWinWidth = document.documentElement.clientWidth,
      lastWinHeight = document.documentElement.clientHeight;

  $(window).resize(function(){
    var newWinWidth = document.documentElement.clientWidth,
        newWinHeight = document.documentElement.clientHeight;

    if(newWinWidth != lastWinWidth || lastWinHeight != newWinHeight){
      lastWinWidth = newWinWidth;
      lastWinHeight = newWinHeight;
      window.lp_init();
    }
  });  

})();
