# CreateJS-Canvas-liqudlayout
Liquid layout correspondence of canvas that was generated by the Toolkit for Create.js

# Usage  
## 1. Toolkit for Create.js Install
Getting start Create.js 
http://www.adobe.com/jp/devnet/createjs/articles/getting-started.html  

## 2. Publish JS,HTML,Images,CSS file
↑demo 

## 3. Create.js file 
Ex) <script src="create.js"></script>  
``` Javascript
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 810,
	fps: 60,
	color: "#FFFFFF",
	manifest: [
		{src: url + "/bg01.jpg", id:"bg01"},
		{src: url + "/bg02.jpg", id:"bg02"},
	]
};
.
.
.

// symbols:
```

## 4. init file canvasLiqudLayout.js

``` Javascript
  // RATIO 
  var MOVIEWRAP_RATIO      = BASESTAGE_WIDTH/BASESTAGE_HEIGHT, 
      MOVIEWRAP_RATIO_MATH = Math.round(MOVIEWRAP_RATIO * 100),
      nowRatio             = Math.round($wWidth / $wHeight * 100);
```

# License  
Code is released under the MIT license.  
http://opensource.org/licenses/mit-license.php