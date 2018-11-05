var $slider = $("#slider");




$slider.on('init', function () {
	mouseWheel($slider);
}).slick({
	dots: true,
	vertical: true,
	infinite: false,
	
	});


function mouseWheel($slider) {
	$(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
	}

var $sliderElm = $('.slider');
		
$sliderElm.on('wheel', function(event) {
    event.preventDefault();
    if (event.originalEvent.deltaY < 0) {
        $(this).slick('slickPrev');
    } else {
        $(this).slick('slickNext');
    }
})