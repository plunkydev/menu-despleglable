import './style.css'
import { home, about, contact } from './pages.js'
import { displayCurrentPage } from './utils/navigation.js'
import { showMenu, closeMenu } from './utils/menu.js'
import page from './components/page.js'
import footer from './components/footer.js'
import nav from './components/nav.js'
const container = document.getElementById('container')

container.append(nav, page(), footer())

export const btn = document.getElementById('btn')
export const img = document.getElementById('imgMenuHamburgesa')
export const btnHome = document.getElementById('btnHome')
export const btnAbout = document.getElementById('btnAbout')
export const btnContact = document.getElementById('btnContact')
export const menuList = document.getElementById('menuList')
export const currentPage = document.getElementById('page')

btn.addEventListener('mouseover', showMenu)
btn.addEventListener('click', closeMenu)

btnHome.addEventListener('click', () => displayCurrentPage(home))
btnAbout.addEventListener('click', () => displayCurrentPage(about))
btnContact.addEventListener('click', () => displayCurrentPage(contact))

displayCurrentPage(home)
