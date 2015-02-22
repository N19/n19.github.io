function N(target) {
	this.e = document.querySelectorAll(target);

	this.click = function(callback) {
		for (var i in this.e) {
			this.e[i].addEventListener('click', function () {
				typeof callback == 'function' && callback()
			});
		}
	}
}

var n = function(target) {
	return new N(target);
}