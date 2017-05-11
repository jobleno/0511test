$(function(){
	//movie
	$('.movieBtn').click(function(event) {
		var movie=$(this).data('target');
		$('.c-movie-overlay,.c-close-overlay-button,'+movie).fadeIn();
	});
	//c-movie-detail
	$('.c-movie-overlay,.c-close-overlay-button').click(function(event) {
		$('.c-movie-overlay,.c-close-overlay-button,.c-movie-detail').fadeOut();
	});
	//-movie
});