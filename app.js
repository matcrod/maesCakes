'use strict'

const burger = document.querySelector('[data-burger]')
const navLinks = document.querySelector('.nav-links')
const bar1 = document.querySelector('[data-bar1]')
const bar3 = document.querySelector('[data-bar3]')

burger.addEventListener('click', () => {
	navLinks.classList.toggle('nav-active')
    bar1.classList.toggle('bars')
    bar3.classList.toggle('bars')
})