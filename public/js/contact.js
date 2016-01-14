/**
 * Created by alisabelousova on 10/01/16.
 */

$(document).ready(function() {
	$('#fullpage').fullpage();
});


$(document).on('click', '#moveDown', function(){
	$.fn.fullpage.moveSectionDown();
});
