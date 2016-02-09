/*!
 _        _         _            
| \      (_)       | |           
| |       _  ____  | |  _   ___  
| |      | ||  _ \ | |_/ ) / _ \ 
| |_____ | || | | ||  _ ( | (_) |
\_______)|_||_| |_||_| \_) \___/ 
                                      

 * angular-autocrop v1.0.0
 * Angular auto crop image 
 *
 * http://ddmweb.it/
 * Licensed under the MIT license
 *
 * @author Davide Di Modica
 * @requires angular
 
*/

(function () {
  'use strict';


	var autocrop = angular.module('autocrop', []).constant('MODULE_VERSION', '1.0.0');

	autocrop.factory('$autoCropImage', function() {
		var original, cropped, widthImg = 0, heightImg = 0;
		
		function init(originalID, croppedID, width, height){
			original = document.getElementById(originalID);
			cropped = document.getElementById(croppedID);
			if(width && parseInt(width) && !isNaN(parseInt(width)))
				widthImg = width;

			if(height && parseInt(height) && !isNaN(parseInt(height)))
				heightImg = height;

			original.onload = draw;
		}  

		function draw() {
			var w = cropped.width;
			var h = cropped.height;

			if(widthImg && heightImg){
				w = widthImg;
				h = heightImg;
			}

		    drawImageProp(cropped, this, 0, 0, w, h);
		    //drawImageProp(ctx, this, 0, 0, canvas.width, canvas.height, 0.5, 0.5);
		}


		/**
		 * By Ken Fyrstenberg
		 *
		 * drawImageProp(context, image [, x, y, width, height [,offsetX, offsetY]])
		 *
		 * If image and context are only arguments rectangle will equal canvas
		*/
		function drawImageProp(cropped, img, x, y, w, h, offsetX, offsetY) {

		    if (arguments.length === 2) {
		        x = y = 0;
		        w = cropped.width;
		        h = cropped.height;
		    }

		    /// default offset is center
		    offsetX = offsetX ? offsetX : 0.5;
		    offsetY = offsetY ? offsetY : 0.5;

		    /// keep bounds [0.0, 1.0]
		    if (offsetX < 0) offsetX = 0;
		    if (offsetY < 0) offsetY = 0;
		    if (offsetX > 1) offsetX = 1;
		    if (offsetY > 1) offsetY = 1;

		    //get real size
		    var newImg = new Image();
		    newImg.src = img.src;

		    var iw = newImg.width,
		        ih = newImg.height,
		        r = Math.min(w / iw, h / ih),
		        nw = iw * r,   /// new prop. width
		        nh = ih * r,   /// new prop. height
		        cx, cy, cw, ch, ar = 1;

		    /// decide which gap to fill    
		    if (nw < w) ar = w / nw;
		    if (nh < h) ar = h / nh;
		    nw *= ar;
		    nh *= ar;

		    /// calc source rectangle
		    cw = iw / (nw / w);
		    ch = ih / (nh / h);

		    cx = (iw - cw) * offsetX;
		    cy = (ih - ch) * offsetY;

		    /// make sure source rectangle is valid
		    if (cx < 0) cx = 0;
		    if (cy < 0) cy = 0;
		    if (cw > iw) cw = iw;
		    if (ch > ih) ch = ih;

		    /// fill image in dest. rectangle
		    var canvas = document.createElement("canvas");
		    canvas.width = w;
	        canvas.height = h;
		    var ctx = canvas.getContext('2d');
		    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
		    var uri = canvas.toDataURL("image/jpeg", 0.8);
		    cropped.src = uri;
		}

		return {
			init: init
		};
	});

}());