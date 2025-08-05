/*
Theme: vOne - Free Business HTML5 Responsive WebsiteDescription: Free to use for personal and commercial use
Author: WebThemez.com
Website: http://webthemez.com
Note: Please do not remove the footer backlink (webthemez.com)--(if you want to remove contact: webthemez@gmail.com)
Licence: Creative Commons Attribution 3.0** - http://creativecommons.org/licenses/by/3.0/
*/
jQuery(document).ready(function ($) {
//da slider
	$('#da-slider').cslider({
		autoplay: true,
		bgincrement: 0
	});
//Set the carousel options
	$('#quote-carousel').carousel({
		pause: true,
		interval: 4000,
	});
// fancybox
    $(".fancybox").fancybox({
        closeBtn: true,
        closeClick: 'overlay',
        helpers: {
            overlay: {
                locked: false
            }
        },
        beforeShow: function() {
            // Ensure close button is visible and clickable
            setTimeout(function() {
                $('.fancybox-close').css({
                    'z-index': '100000',
                    'opacity': '1',
                    'visibility': 'visible',
                    'cursor': 'pointer'
                });
            }, 100);
        },
        onComplete: function() {
            // Remove any filters from the opened image
            setTimeout(function() {
                $('.fancybox-opened img').css({
                    'filter': 'none',
                    '-webkit-filter': 'none',
                    'z-index': '100001'
                });
                $('.fancybox-wrap, .fancybox-skin, .fancybox-inner').css({
                    'filter': 'none',
                    '-webkit-filter': 'none'
                });
            }, 200);
        }
    });

// Navbar collapse on mobile
$('.navbar-inverse').on('click', 'li a', function () {
    $('.navbar-collapse').collapse('hide');
});

//isotope
    if ($('.isotopeWrapper').length) {
        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }
        });
        $("a[href='#top']").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });
        $('#filter a').click(function () {
            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 1000,
                    easing: 'easeOutQuart',
                    queue: false
                }
            });
            return false;
        });
		$(window).load(function() { 
			  $('#filter .current').trigger('click');
		});
        $(window).smartresize(function () {
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
    }
});