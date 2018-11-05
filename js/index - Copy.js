var $slider = $("#slider");




$slider.on('init', function () {
	mouseWheel($slider);
}).slick({
	dots: true,
	vertical: true,
	infinite: false,
	Accessibility: false
	});


function mouseWheel($slider) {
	$(window).on('wheel', { $slider: $slider }, mouseWheelHandler);
	}


		
function mouseWheelHandler(event) {
	//event.preventDefault();
	var $slider = event.data.$slider;
	var delta = event.originalEvent.deltaY;
	if (delta > 0) {
		$slider.slick('slickNext');
	} else
	{
		$slider.slick('slickPrev');
	}
}

$slider.on('edge', function(event, slick, direction){

	  $slider.unslick();

	});