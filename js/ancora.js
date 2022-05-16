document.querySelector('.nav a[href^="#"]').addEventListener('click', function (e) {
	e.preventDefault();
	var id = document.querySelector(this).attr('href'),
		targetOffset = document.querySelector(id).offset().top;

	document.querySelector('html, body').animate({
		scrollTop: targetOffset - 100
	}, 500);
});
