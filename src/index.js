import "./styles.css"
import { menuData } from "./data/menuData.js" 
import { createHomePage } from "./pages/home.js"
import { createMenuPage } from "./pages/menu.js"
import { createAboutPage } from "./pages/about.js"

// createHomePage(contentElement)
// createMenuPage(contentElement, menuData)
// createAboutPage(contentElement)

function Page() {
    const contentElement = document.querySelector('#content')
    const header = document.querySelector('header')
    const homePage = createHomePage(contentElement)
    const menuPage = createMenuPage(contentElement, menuData)
    const aboutPage = createAboutPage(contentElement)

    const clearPage = () => {
        // contentElement.innerHTML = ''
        ;[menuPage, aboutPage, homePage].forEach(el => {
            el.classList.add('disp-none')
        })
    }

    const clearSelection = () => {
        document.querySelectorAll('header button').forEach(button => button.classList.remove('active'))
    }

    const showPage = (navSelected) => {
        if(navSelected === 'HOME') {
            homePage.classList.remove('disp-none')
        }
        
        if(navSelected === 'MENU') {
            menuPage.classList.remove('disp-none')
        }
        
        if(navSelected === 'ABOUT') {
            aboutPage.classList.remove('disp-none')
        }
    }

    const handlePageClick = (e) => {
        const pageClicked = e.target.closest('button') 
        if(!pageClicked) return

        clearPage()
        clearSelection()

        console.log(e.target.closest('button'))

        showPage(pageClicked.textContent)
        
        pageClicked.classList.add('active')
    }

    // init
    clearPage()
    showPage('HOME')
    header.addEventListener('click', (e) => handlePageClick(e))
} 

Page()