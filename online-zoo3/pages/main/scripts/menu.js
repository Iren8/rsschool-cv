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

let radioBtn = document.querySelectorAll('.form-donate__radio-amount');
let labels = document.querySelectorAll('.form-donate__radio-amount-label');
document.querySelector('.form__input').addEventListener('input', (event) => {
	const value = String(event.target.value);
	if (value.length > 4) {
		document.querySelector('.form__input').value = +value.slice(0, 4);
	}
	for (let i = 0; i < radioBtn.length; i++) {
		if (+radioBtn[i].value === +value) {
			radioBtn[i].checked = true;
			labels.forEach(e => e.classList.remove('active'));
			labels[i].classList.toggle('active');
			break;
		} else {
			radioBtn[i].checked = false;
		}
	}
})
document.querySelector('.form-donate__form-slider').addEventListener('input', name);
function name() {
	for (let i = 0; i < radioBtn.length; i++) {
		if (radioBtn[i].checked === true) {
			document.querySelector('.form__input').value = radioBtn[i].value;
			labels.forEach(e => e.classList.remove('active'));
			labels[i].classList.toggle('active');
			break;
		} else {
			document.querySelector('.form__input').value = '';
		}
	}
}



