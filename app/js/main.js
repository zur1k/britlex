// ------------------------ MONILE NAV -------------------------
const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNav = document.querySelector('.mobile-nav')

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active')
	document.body.classList.toggle('no-scroll')

})

// no scroll in burger menu
$(".mobile-nav__link").on("click", function () {

	$(mobileNavIcon).toggleClass("active");
	$(mobileNav).toggleClass("active");
	document.body.classList.remove('no-scroll')
});

// slider !!!!
$(document).ready(function () {
	$('.testimoni__slider').slick({
		arrows: false,
		dots: true
	});
});


// ------------------------  smooth scroll   -------------------------

$(".nav").on("click", "a", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
		top = $(id).offset().top;
	$('body,html').animate({ scrollTop: top }, 1500);
});
