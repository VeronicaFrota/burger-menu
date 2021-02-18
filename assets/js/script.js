(function( $, window ) {
	$.fn.ResponsiveMenu = function( options ) {
		
		// Opções	
		var settings = $.extend({
				breakpoint: 768,
				top: 50,
				color: 'white',
				background: 'black'
		}, options );
		
		var mobileWidth = settings.breakpoint,
				color = settings.color,
				background = settings.background,
				hambugerActive = false,
				hamburger = '<a id="responsive-icon"></a>',
				menu = $(this);
		
		var styles = '<style>\
						#responsive-menu { background-color: ' + background + '; top: ' + settings.top + 'px; }\
						#responsive-menu li { border-color: ' + color + '; }\
						#responsive-menu li:last-of-type { border-color: ' + color + '; }\
						#responsive-menu li a { color: ' + color + '; }\
						#responsive-menu li a:hover { color: ' + background + '; background: ' + color + '; }\
						#responsive-icon::before { background:' + color + '; }\
						#responsive-icon::after { box-shadow: 0 4px 0 0 ' + color + ', 0 -4px 0 0 ' + color + '; }\
						#responsive-icon.active::before, #responsive-icon.active::after { background:' + color + '; }\
					</style>';
	
		var menuFunction = function() {
			var width = $(window).width();
			if (width < mobileWidth) {
				menu.attr('id', 'responsive-menu');
				if(!hambugerActive) {
					hambugerActive = true;
					menu.before(hamburger);
					$('#responsive-menu').append(styles);
				} else {
					return false;
				}
	
			} else if (width > mobileWidth) {
				hambugerActive = false;
				$('#responsive-icon').remove();
				$('#responsive-menu style').remove();
				menu.attr('id', '');
			}
	
			$('#responsive-icon').on('click touchstart', function(e) {
				e.preventDefault();
				$('#responsive-icon').toggleClass('active');
				menu.toggleClass('active');
			});
		}
		
		menuFunction();
		$(window).resize(menuFunction);
	};
	}( jQuery, window ));
	
	$('ul').ResponsiveMenu({
		breakpoint: 960,
		top: 30,
		background: "#010101",
		color: "white"
	});
	
	$('nav a').click(function(e){
		e.preventDefault();
		var id = $(this).attr('href'),
				menuHeight = $('nav').innerHeight(),
				targetOffset = $(id).offset().top;
		$('html, body').animate({
			scrollTop: targetOffset - menuHeight
		}, 500);
	});
	