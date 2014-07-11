$(document).ready(function() {
	$('#name').effect('bounce', {times:10}, 3000);
	$('#name').click(function() {
		$('#name').effect('bounce', {times:10}, 3000);
	});
});