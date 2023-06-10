const hamburgerBnt = document.querySelector('.menu-button')
const menuList = document.querySelector('.menu-list')

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
}

document.addEventListener('DOMContentLoaded', activeFunction)