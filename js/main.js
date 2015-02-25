$(document).on('ready', function(){

	var template = $('#template-product-modal').html();

	$('.show').on('click', function(){
		window.parent = $(this).parent();
		window.title = parent.data('title');
		window.price = parent.data('price');
		window.description = parent.data('description');
	});

	$('.show').fancybox({
		autoSize: false,
		width: 500,
		height: 'auto',
		content: template,

		beforeShow: function(){
			$('.fancybox-overlay #product-modal')
				.find('.product-title').html(window.title).end()
				.find('.product-price').html(window.price).end()
				.find('.product-description').html(window.description).end();
			
			$('.fancybox-overlay .product-buy').on('click', function(){
				alert('Debes estar registrado para comprar');
			});
		},

		afterClose: function(){
			$('.fancybox-overlay .product-buy').off('click');
		}
	});	


});
