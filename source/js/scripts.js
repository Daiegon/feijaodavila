$(document).ready(function(){
	// $('ul.lista-cardapio li a').on('click',function(){
	//     var src = $(this).attr('href');
	//     var img = '<img src="' + src + '" class="img-responsive"/>';

	//     var index = $(this).parent('li').index();
	// 	var html = '';
	// 	html += img;
	// 	html += '<div class="row controles-galeria">';
	// 	html += '<div class="col-xs-6 text-center">';
	// 		html += '<a class="controls previous botao botao-light" href="' + (index) + '">';
	// 					html += '<span class="glyphicon glyphicon-circle-arrow-left"></span></a>';
	// 	html += '</div>';
	// 	html += '<div class="col-xs-6 text-center">';
	// 		html += '<a class="controls next botao botao-light" href="'+ (index+2) + '">';
	// 					html += '<span class="glyphicon glyphicon-circle-arrow-right"></span></a>';
	// 	html += '</div>';
	// 	html += '</div>';

	//     $('#galeria').modal();
	//     $('#galeria').on('shown.bs.modal', function(){
	//         $('#galeria .modal-body').html(html);
	//     });
	//     $('#galeria').on('hidden.bs.modal', function(){
	//         $('#galeria .modal-body').html('');
	//     });
	//     return false;
	// });
	
	
	$('.mobmenu').click(function(){
		$('.menu-nav').slideToggle();
		$(this).toggleClass('active')

		return false;
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
    	$('.mobmenu').toggleClass('active');
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


});


$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
}); 
