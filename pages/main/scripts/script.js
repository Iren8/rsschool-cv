// email validation

const emailInput = document.querySelector('.input-email');
const submitButton = document.querySelector('.subscribe__btn');

const greenColor = '#4B9200';
const redColor = '#D31414';

emailInput.addEventListener('input', onInput);

function isValid(value) {
	const regExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
	return regExp.test(value);
};

function onInput(event) {

	if (isValid(event.target.value)) {
		submitButton.classList.remove('submit-mistake');
		emailInput.classList.remove('mistake-email');

		emailInput.classList.add('valid-email');
	} else {
		submitButton.classList.remove('submit-default'); //disabled-submit

		submitButton.classList.add('submit-mistake-');
		emailInput.classList.add('mistake-email');
	}
};