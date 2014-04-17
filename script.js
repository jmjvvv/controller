$(document).ready(function(){
   $('#up-btn').click(function(){
      $('#player').animate({top:'-=100px'},1000);
   });
   $('#down-btn').click(function(){
      $('#player').animate({top:'+=100px'},1000);
   });
   $('#left-btn').click(function(){
      $('#player').animate({left:'-=100px'},1000);
   });
   $('#right-btn').click(function(){
      $('#player').animate({left:'+=100px'},1000);
   });
   $('#in-btn').click(function(){
      $('#player').fadeIn();
   });
   $('#out-btn').click(function(){
      $('#player').fadeOut();
   });
   
   
   $(".button").mouseenter(function(){
        $(".button").fadeTo("fast",1);
    });
    $(".button").mouseleave(function(){
        $(".button").fadeTo("fast",0.5);    
    });
    
   $('#s-btn').click(function(){
		$('#player').effect('slide');
	});
	$('#b-btn').click(function(){
		$('#player').effect('bounce',{time:5},500);
	});
	$('#e-btn').click(function(){
		$('#player').effect('explode');
	});
	
	$("#controller").accordion({collapsible: true, active: false});
   
});
