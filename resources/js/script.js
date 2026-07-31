/*
	Main JS
*/

$(document).ready(function() {
	var swiper = new Swiper('.home-hero-slider-inner', {
		spaceBetween: 40,
		pagination: {
		  el: '.home-hero-slider-inner-pagination',
		  clickable: true,
		},
	});

	$('.work-section-content-block-element').click(function() {
		var src = $(this).data('value');
		$('.work-section-content-modal').css('display', 'block');
		$('#img01').attr('src', src);
		$('body').addClass('main-overflow-hidden');
	});

	$('.work-section-content-modal-close').click(function() {
		$('.work-section-content-modal').css('display', 'none');
		$('body').removeClass('main-overflow-hidden');
	});

	if($(window).width() > 991 && $('.home-hero').length > 0) {
		var heroHeight = $('.home-hero').height();
		$(window).scroll(function() {
			if($(this).scrollTop() <= heroHeight) {
				// var blurIIndex = $(this).scrollTop() / heroHeight * 10;
				var blurIIndex = $(this).scrollTop() / 60;
				var moveSpeed = $(this).scrollTop() / heroHeight * 200;
				$('.home-hero-figures-figure').css({
					'transform': 'translateY(-'+moveSpeed+'px)',
					'filter': 'blur('+blurIIndex+'px)'
				});
			}
		});
	}

	if($('.about-work-inner-nav-filter').length > 0) {
		$('.about-work-inner-block-element').hide();
		$('.about-work-inner-nav-filter.checked').each(function() {
			$('.about-work-inner-block-element.'+$(this).data('value')).show();
		});
		$('.about-work-inner-nav-filter').click(function() {
			$(this).toggleClass('checked');
			$('.about-work-inner-block-element.'+$(this).data('value')).toggle();
		});
	}

	if($('.work-section-image').length > 0) {
        $('.work-section-image').each(function(index) {
            var position = $(this).offset().top - 150;
            $(window).scroll(function() {
                var top = $(this).scrollTop();
                if(top > position) {    
                    $('.work-section-image-hide').eq(index).fadeIn();
                } else {
                    $('.work-section-image-hide').eq(index).fadeOut();
				}
            });
        });
    }

	let menuOpen = false;

    $('.header-inner-hamburger').click(function() {
        if(!menuOpen) {
			$('.header-inner-hamburger-icon').attr('src', 'assets/images/X.svg');
            menuOpen = true;
            $('.header-inner-navigation').slideToggle();
			$('.header').addClass('open');
			$('.header-figure-2, .header-figure-1').css({
				'opacity': 1,
				'transition': 'all 1s ease-in'
			});
        } else {
            $('.header-inner-hamburger-icon').attr('src', 'assets/images/List.svg');
            menuOpen = false;
            $('.header-inner-navigation').slideUp();
			setTimeout(function(){
				$('.header').removeClass('open');
			}, 300);
			$('.header-figure-2, .header-figure-1').css({
				'opacity': 0,
				'transition': 'all 0.1s ease-out'
			});
        }
    });

	if($(window).width() < 1025) {
		var prevScrollpos = $(window).scrollTop();
		$(window).scroll(function () {
			if ($(this).scrollTop() < 150) {
				$('.header').removeClass('fixed');
			} else {
				if ($(this).scrollTop() <= prevScrollpos){
					$('.header').addClass('fixed');
					$('.header').show();
				} else {
					$('.header').removeClass('fixed');
					$('.header').hide();
				}
			}
			prevScrollpos = $(this).scrollTop();
		});	
	}
}); 