/*external js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenLite.min.js
https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSPlugin.min.js
*/
// window.onload = function() {

//   var logo 	= document.getElementById('logo'),
// 	  h2 	= document.getElementByTagName('h2');

//   TweenLite.to(logo, 2, {left:"450px", backgroundColor:"black", borderBottomColor:"#90e500", color:"white"});
//   TweenLite.set(h2, 2, {x: -200} );

// }

(function($){

  	var logo = $('logo');

  	// Simple Tween
  	TweenLite.set(logo , 1 , {x: -200} , {x: 200});

})(jQuery);