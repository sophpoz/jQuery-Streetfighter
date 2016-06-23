$(document).ready(function(){

	$('.ryu').mouseenter(function() {
		console.log(arguments);
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		$('.ryu-cool').hide();
	})
	.mousedown(function(e) {
		if(e.ctrlKey){return false};
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show().finish()
		.animate(
			{'left':'1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left','600px');
				$('.ryu-throwing').hide();
				$('.ryu-ready').show();
			}
		);
	})
	.mouseup(function() {
		// ryu goes back to his ready position
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});
$(document).keydown(function(e) {
	if(e.ctrlKey){return false}
	console.log(e);
		if(e.which === 88 && !e.ctrlKey)
		{
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
		}
	});
$(document).keyup(function(e) {
	if(e.which === 88) {
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').show();
	}
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}