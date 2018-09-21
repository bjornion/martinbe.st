// JavaScript Document
(function($, window, document){
  $(function(){
    $header_logo = $('#spaceman, h1');
    $header_logo.hover(function() {
      $header_logo.stop().delay(100).animate({ color: 'rgba(255,142,0,1.00)' }, 1400);
      $('#spaceman').addClass('fa-spin');
    },function(){
      $header_logo.stop().animate({ color: 'white'/*'#FF358B'*/ }, 200);
      $('#spaceman').removeClass('fa-spin');
    });
    //$('#pp').html('test hej');
    
    $list = $('li');
    //$fa = $('a').find('p');
    $list.hover(function(){
      $(this).addClass('moveOut');
      $(this).children().first().stop().animate({ color: 'rgba(255,142,0,1.00)' }, 200);
      $(this).children().last().delay(100).stop().animate({ color: 'rgba(255,142,0,1.00)' }, 700);
    },function(){
      $(this).removeClass('moveOut');
      $(this).children().stop().animate({ color: 'black' }, 200);
    });
      
  });
  }(window.jQuery, window, document));