const hamburgerBnt = document.querySelector('.button .activeButton')
const menuList = document.querySelector('.nav .list')

const activeFunction = () => {
	menuList.addEventListener('click', menuHide)
	hamburgerBnt.addEventListener('click', showMenu)
}

const showMenu = () => {
	if (hamburgerBnt.checked) {
		menuList.style.left = '0'
	} else {
		menuList.style.left = '-100%'
	}
}

const menuHide = () => {
	menuList.style.left = '-100%'
	hamburgerBnt.checked = false
}

document.addEventListener('DOMContentLoaded', activeFunction)
