"use strict";

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

