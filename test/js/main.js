$(function(){
var itemCount = $('.wrap .item').length;
var maxH = 0;
for (i=0; i<itemCount; i++) {
	var itemH = $('.wrap .item').eq(i).height();
  if (itemH > maxH) {maxH = itemH;}
}
$('.wrap .item').css('height', maxH);
});

$( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $().val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "fade" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( ".send__contacts, .type__contacts" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( ".send__contacts:visible .type__contacts:visible" ).removeAttr( "style" ).fadeOut();
      }, 2000 );
    };
 
    // Set effect from select menu value
    $( ".say__hello" ).on( "click", function() {
      runEffect();
    });
 
    $( ".send__contacts, .type__contacts" ).hide();
  } );

$(document).ready(function(){

    $("#welcome__button").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});