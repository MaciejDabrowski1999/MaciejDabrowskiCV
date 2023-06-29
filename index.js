const hamburgerBnt = document.querySelector('.button .activeButton')
const menuList = document.querySelector('.nav .list')
const lines = document.querySelectorAll('.button .line')

let media = window.matchMedia('(min-width:650px)')

const activeFunction = () => {
	menuList.addEventListener('click', menuHide)
	hamburgerBnt.addEventListener('click', showMenu)
	media.addListener(mediaQuery)
}

const showMenu = () => {
	if (hamburgerBnt.checked) {
		menuList.style.left = '0'
		lines[1].style.top = '20px'
		lines[2].style.top = '20px'
		lines[1].classList.toggle('line1')
		lines[0].classList.toggle('line2')
		lines[2].classList.toggle('line3')
	} else {
		menuList.style.left = '-100%'
		lines[1].style.top = '22px'
		lines[2].style.top = '40px'
		lines[1].classList.toggle('line1')
		lines[0].classList.toggle('line2')
		lines[2].classList.toggle('line3')
	}
}

const menuHide = () => {
	if (media.matches === false) {
		menuList.style.left = '-100%'
		hamburgerBnt.checked = false
		lines[1].style.top = '20px'
		lines[2].style.top = '10px'
		lines[1].classList.toggle('line1')
		lines[0].classList.toggle('line2')
		lines[2].classList.toggle('line3')
	} else {
		menuList.style.left = '0'
	}
}

const mediaQuery = () => {
	//animation for menu
	if (media.matches === false && lines[0].classList.contains('line1')) {
		lines[1].classList.toggle('line1')
		lines[0].classList.toggle('line2')
		lines[2].classList.toggle('line3')
		menuList.style.left = '-100%'
		hamburgerBnt.checked = false
	} else if (media.matches) {
		lines[1].classList.remove('line1')
		lines[0].classList.remove('line2')
		lines[2].classList.remove('line3')
	}
}

document.addEventListener('DOMContentLoaded', activeFunction)
