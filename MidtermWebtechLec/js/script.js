/* toggle for drop down*/
$('.button_menu').click(function () {
    $("#css-preference-content").toggle();
	if ($('.button_menu').hasClass('active')) {
        $('.button_menu').removeClass('active');

		$('.menu-container').removeClass('show');
		setTimeout(function () {
			$('.content_menu').removeClass('active');
		}, 1000);

	} else {
		$('.button_menu').addClass('active');
		$('.menu-container').addClass('show');
		setTimeout(function () {
			$('.content_menu').addClass('active');
		}, 1000);

	}
});

/*drop down menu*/
$('.content_on_menu').click(function () {
	$('.button_menu').removeClass('active');
	$('.menu-container').removeClass('show');
	setTimeout(function () {
        $('.content_menu').removeClass('active');
	}, 1000);
})

/* home */
$('.HOME').click(function() {
	$('.main').removeClass('hide');
	$('.container_box').fadeIn(400);
	$('.PRELIMS').fadeOut(0);
	$('.MIDTERMS').fadeOut(0);
})

/*prelims */
$('.PRELIM').click(function() {
	$('.main').addClass('hide');
	$('.PRELIMS').fadeIn(400);
	$('.MIDTERMS').fadeOut(0);
})
/* midterms */
$('.MIDTERM').click(function() {
	$('.main').addClass('hide');
	$('.PRELIMS').fadeOut(0);
	$('.MIDTERMS').fadeIn(400);
})

/* finals */
$('.FINALS').click(function() {
	$('.main').removeClass('hide');
	$('.container_box').fadeIn(400);
	$('.PRELIMS').fadeOut(0);
	$('.MIDTERMS').fadeOut(0);
})