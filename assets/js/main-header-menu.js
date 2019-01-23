const mainHeader = document.querySelector(".main-header")
const sideMenu = document.querySelector(".side-menu")
const sideMenuItems = document.querySelectorAll(".side-menu-item")
const sideMenuCloseDiv = document.querySelector(".side-menu-close-div")

const HEADER_HEIGHT = 70
const TOP_DISTANCE_TO_HIDE_THE_HEADER = 330
const SIDE_MENU_WIDTH = 1000

const DEFAULT_TRANSITION_TIME = 350

// SHOW/HIDE MAIN HEADER ON SCROLL
const showMainHeader = () => mainHeader.style.top = "0"
const hideMainHeader = () => mainHeader.style.top = `-${HEADER_HEIGHT}px`
let previousScrollPosition = window.pageYOffset

const toggleMainHeader = window.onscroll = () => {
    let currentScrollPosition = window.pageYOffset
    if (previousScrollPosition > currentScrollPosition || currentScrollPosition < TOP_DISTANCE_TO_HIDE_THE_HEADER) showMainHeader()
    else hideMainHeader()
    previousScrollPosition = currentScrollPosition
}

// TOGGLE SIDE MENU
let sideMenuState = 0
const openSideMenu = () => {
    sideMenu.style.left = "0"    
    setTimeout(() => sideMenuCloseDiv.style.background = "rgba(0, 0, 0, 0.6)" , DEFAULT_TRANSITION_TIME);
}

const closeSideMenu = () => {
    sideMenuCloseDiv.style.background = "rgba(0, 0, 0, 0)"
    setTimeout(() => sideMenu.style.left = `-${SIDE_MENU_WIDTH}px`, DEFAULT_TRANSITION_TIME);
    sideMenuState = 0
}

const toggleSideMenu = n => {
    sideMenuState += n
    switch (sideMenuState) {
        case 1:
            openSideMenu()
            break
        default:
            closeSideMenu()
    }
}

const closeSideMenuSelectingItem = (() => sideMenuItems.forEach((item) => item.addEventListener("click", closeSideMenu)))()
sideMenuCloseDiv.addEventListener("click", closeSideMenu)
