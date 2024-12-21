import imgMenuHamburgesa from '../images/menuIcon.png'
import close from '../images/close.png'
import { menuList, img, btn } from '../index.js'

export function closeMenu () {
  menuList.style.display = 'none'
  img.src = imgMenuHamburgesa
  img.style.width = '30px'
  img.style.height = '30px'
  btn.removeEventListener('click', closeMenu)
  btn.addEventListener('click', showMenu)
}

export function showMenu () {
  menuList.style.display = 'flex'
  img.src = close
  img.style.width = '20px'
  img.style.height = '20px'
  btn.removeEventListener('click', showMenu)
  btn.addEventListener('click', closeMenu)
}
