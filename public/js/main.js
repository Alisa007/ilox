/**
 * Created by alisabelousova on 07/12/2015.
 */

$(document).ready(function(){
	
	var navbarColor = $('#navbar').css("background-color");
	
	$('#fullpage').fullpage({
		controlArrows: false,
		onLeave: function (index, nextIndex, direction) {
			console.log(navbarColor);
			if (navbarColor == "rgba(0, 0, 0, 0)") {
				if (index == 1 && direction == 'down') {
					$("#navbar").css({
						transition: 'background-color 1s ease-in-out',
						"background-color": "#e43244"
					});
				} else if (index == 2 && direction == 'up') {
					$("#navbar").css({
						transition: 'background-color 1s ease-in-out',
						"background-color": "transparent"
					});
				}
			}
		}
	});
});

//
//h1 = $('h1')[0];
//h1.innerHTML = '<span>' + h1.innerHTML + '</span>';

cardTitles = $('.card-title');
for (index = 0; index < cardTitles.length; ++index) {
	var cardTitle = cardTitles[index];
	cardTitle.innerHTML = '<span>' + cardTitle.innerHTML + '</span>';
}

cards = $('.card-border');
console.log(cards[0]);
for (index = 0; index < cards.length; ++index) {
	var card = cards[index];
	card.innerHTML = card.innerHTML + '<div class="left-top"></div><div class="right-top"></div>';
}


$(window).bind("load", function() {
	$( "#loader" ).remove();
});

$(document).on('click', '#moveDown', function(){
	$.fn.fullpage.moveSectionDown();
});

$(document).on('click', '#moveLeft', function () {
	$.fn.fullpage.moveSlideLeft();
});
$(document).on('click', '#moveRight', function () {
	$.fn.fullpage.moveSlideRight();
});


$(window).bind('orientationchange resize', function(event){
	if (event.orientation) {
		if (event.orientation == 'landscape') {
			console.log("Dddd")
			if (window.rotation == 90) {
				rotate(this, -90);
			} else {
				rotate(this, 90);
			}
		}
	}
});

function rotate(el, degs) {
	iedegs = degs/90;
	if (iedegs < 0) iedegs += 4;
	transform = 'rotate('+degs+'deg)';
	iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation='+iedegs+')';
	styles = {
		transform: transform,
		'-webkit-transform': transform,
		'-moz-transform': transform,
		'-o-transform': transform,
		filter: iefilter,
		'-ms-filter': iefilter
	};
	$(el).css(styles);
}
