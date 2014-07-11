$(document).ready(function() {
	$('#name').effect('bounce', {times:10}, 2000);
	$('#name').click(function() {
		$('#name').effect('bounce', {times:10}, 2000);
	});
});