$(document).ready(function() {
	$('#name').effect('bounce', {times:10}, 2500);
	$('#name').click(function() {
		$('#name').effect('bounce', {times:10}, 2500);
	});
});