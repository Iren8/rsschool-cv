"use strict";
//---burger-menu
const menu = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__menu-burger');
const logo = document.querySelector('.header__logo');
const logoTitle = logo.firstElementChild;
const header = document.querySelector('.header');
const body = document.body;
const shadow = document.querySelector('.shadow__block');

if (menu && menuBurger) {
	menuBurger.addEventListener('click', () => {
		menu.classList.toggle('active');
		menuBurger.classList.toggle('active');
		logo.classList.toggle('active');
		logoTitle.classList.toggle('active');
		header.classList.toggle('active');
		body.classList.toggle('lock');
		shadow.classList.toggle('active');
	})
}
if (menu && menuBurger) {
	shadow.addEventListener('click', () => {
		menu.classList.toggle('active');
		menuBurger.classList.toggle('active');
		logo.classList.toggle('active');
		logoTitle.classList.toggle('active');
		header.classList.toggle('active');
		body.classList.toggle('lock');
		shadow.classList.toggle('active');
	})
}

//progress--line---Pick and feed a friend

let radioBtn = document.querySelectorAll('.form-donate__radio-amount');//dots
let labels = document.querySelectorAll('.form-donate__radio-amount-label');
let inputField = document.querySelector('.form__input');

inputField.addEventListener('input', (event) => {
	const value = String(event.target.value);
	if (value.length > 4) {
		inputField.value = +value.slice(0, 4);
	}
	for (let i = 0; i < radioBtn.length; i++) {
		if (+radioBtn[i].value === +inputField.value) {
			radioBtn[i].checked = true;
			labels.forEach(e => e.classList.remove('active'));
			labels[i].classList.toggle('active');
			break;
		} else {
			radioBtn[i].checked = false;
			labels.forEach(e => e.classList.remove('active'));
		}
	}
})
document.querySelector('.form-donate__form-slider').addEventListener('input', name);
function name() {
	for (let i = 0; i < radioBtn.length; i++) {
		if (radioBtn[i].checked === true) {
			inputField.value = radioBtn[i].value;
			labels.forEach(e => e.classList.remove('active'));
			labels[i].classList.toggle('active');
			break;
		} else {
			inputField.value = '';
		}
	}
}
