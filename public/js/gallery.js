/**
 * Created by alisabelousova on 10/01/16.
 */

$(document).ready(function(){
	$('#fullpage').fullpage();
	
	$('.gallery').flickity({
		accessibility: true,

		autoPlay: true,
		// advances to the next cell
		// if true, default is 3 seconds
		// or set time between advances in milliseconds
		// i.e. `autoPlay: 1000` will advance every 1 second

		cellAlign: 'center',

		cellSelector: undefined,
		// specify selector for cell elements

		contain: false,
		// will contain cells to container
		// so no excess scroll at beginning or end
		// has no effect if wrapAround is enabled

		draggable: true,
		freeScroll: false,
		// enables content to be freely scrolled and flicked
		// without aligning cells

		friction: 0.2,
		// smaller number = easier to flick farther

		initialIndex: 0,
		// zero-based index of the initial selected cell

		lazyLoad: true,
		// enable lazy-loading images
		// set img data-flickity-lazyload="src.jpg"
		// set to number to load images adjacent cells

		percentPosition: true,
		prevNextButtons: true,
		pageDots: true,
		resize: true,
		rightToLeft: false,

		setGallerySize: true,
		// sets the height of gallery
		// disable if gallery already has height set with CSS

		watchCSS: false,
		// watches the content of :after of the element
		// activates if #element:after { content: 'flickity' }
		// IE8 and Android 2.3 do not support watching :after
		// set watch: 'fallbackOn' to enable for these browsers

		wrapAround: true
		// at end of cells, wraps-around to first for infinite scrolling
	});
});

$(document).on('click', '#moveDown', function(){
	$.fn.fullpage.moveSectionDown();
});
