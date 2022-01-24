// ------------------------ MONILE NAV -------------------------
const mobileNavButton = document.querySelector('.mobile-nav-button')
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon')
const mobileNav = document.querySelector('.mobile-nav')

mobileNavButton.addEventListener('click', function () {
	mobileNavIcon.classList.toggle('active');
	mobileNav.classList.toggle('active')
	document.body.classList.toggle('no-scroll')

})


$(".mobile-nav__link").on("click", function (event) {
	//

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