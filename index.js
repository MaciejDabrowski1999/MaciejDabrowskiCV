const hamburgerBnt = document.querySelector('.menu-button')
const menuList = document.querySelector('.menu-list')
const portfolioItems = document.querySelectorAll('.portfolio-item')
const portfolioTumbnail = document.querySelectorAll('.portfolio-thumbnail')
const portfolioNextBnt = document.querySelector('.next-button')
const portfolioPrevBnt = document.querySelector('.prev-button')

let numSlide = 0
let thumbnailSlide = [
    './assets/thumbnail-currency-excange.jpg',
    './assets/thumbnail-Ai-4-sectors.jpg',
    './assets/thumbnail-company-website.jpg',
    './assets/thumbnail-to-do-app.jpg'


]

const activeFunction = () => {
    portfolioSliderStart()
    sliderPic()
    menuList.addEventListener('click', menuHide)
    hamburgerBnt.addEventListener('click', showMenu)
    portfolioNextBnt.addEventListener('click', nextPortfolio)
    portfolioPrevBnt.addEventListener('click', prevPortfolio)
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
const sliderPic = () => {
    portfolioTumbnail.forEach((el, index) =>{
        el.style.backgroundImage = `url(${thumbnailSlide[index]})`
        el.style.backgroundSize = 'contain';
        el.style.backgroundRepeat = 'no-repeat';
    })
}

const portfolioSliderStart = () => {
    portfolioItems[numSlide].style.width = '100%'
    portfolioItems[numSlide].style.height = '100%'
}

const portfolioItemSlider = (number) => {
    portfolioItems.forEach((slide, index) => {
        if (index != number) {
            slide.style.width = '15%'
            slide.style.height = '15%'
            slide.style.margin = '0px'
        } else {
            slide.style.width = '100%'
            slide.style.height = '100%'
            slide.style.margin = '20px'
        }
    })
}
const portfolioSlider = (number) => {
    if (number <= portfolioItems.length - 1) {
        portfolioItemSlider(number)
    } else if (number >= portfolioItems.length - 1) {
        numSlide = 0
        portfolioItemSlider(numSlide)
    } else if (number <= 0) {
        numSlide = portfolioItems.length - 1
        portfolioItemSlider(numSlide)
    }

}

const nextPortfolio = () => {
    numSlide++
    portfolioSlider(numSlide)
}
const prevPortfolio = () => {
    if (numSlide === 0) {
        numSlide = portfolioItems.length
    }
    numSlide--
    portfolioSlider(numSlide)
}

document.addEventListener('DOMContentLoaded', activeFunction)