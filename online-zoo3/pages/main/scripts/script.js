"use strict"; // email validation

const emailInput = document.querySelector('.input__email');
const submitButton = document.querySelector('.submit__btn');

function isValid(value) {
	const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	return regExp.test(value);
};

function onInput(event) {
	if (isValid(event.target.value)) {
		emailInput.classList.remove('default__email');
		emailInput.classList.add('valid__email');
		submitButton.classList.remove('submit__mistake');
		submitButton.classList.add('submit__valid');
	} else {
		submitButton.classList.remove('submit__default'); 
		submitButton.classList.add('submit__mistake');
		emailInput.classList.remove('default__email');
		emailInput.classList.add('mistake__email');
	}
};
emailInput.addEventListener('input', onInput);


//-----------------Testimonials-slider-------------------------

function testimonialsSlider() {
	const scrollBtn = document.querySelector('.range_btn');
	const parentBox = document.querySelector('.testimonials__items');
	const item = document.querySelector('.testimonials__item');
	const width = item.clientWidth;

	scrollBtn.addEventListener("input", () => {
		let scrollValue = scrollBtn.value;
		let offset = -scrollValue * (width + 30);
		parentBox.style.transform = `translateX(${offset}px)`;
	});
}
testimonialsSlider();






