import './style.css'
import imgMenuHamburgesa from './images/menuIcon.png'
import close from './images/close.png'
const container = document.getElementById('container')

const nav = document.createElement('nav')
nav.innerHTML = `<nav class="navContainer">
                <div class="logo">Plunky Dev</div>
                <div class="btnContainer" id="btnContiner">
                    <button id="btn" class="btn"><img id="imgMenuHamburgesa" class="imgMenuHamburgesa" src="${imgMenuHamburgesa}" alt="menu hamburgesa"></button>
                    <div class="menuList" id="menuList">
                        <div class="menuItem">
                            <button id="btnHome">Home</button>
                            <button id="btnAbout">About</button>
                            <button id="btnContact">Contact</button>
                        </div>
                    </div>
                </div>
        </nav>`

const page = document.createElement('main')
page.innerHTML = `<div class="page">
                    <h1>Home</h1>
                </div>`

const footer = document.createElement('footer')
footer.classList.add('footer')
footer.innerHTML = `<p>Footer</p>`

container.append(nav, page, footer)
const btn = document.getElementById('btn')
const img = document.getElementById('imgMenuHamburgesa')
function closeMenu () {
  const menuList = document.getElementById('menuList')
  menuList.style.display = 'none'
  img.src = imgMenuHamburgesa
  img.style.width = '30px'
  img.style.height = '30px'
  btn.removeEventListener('click', closeMenu)
  btn.addEventListener('click', showMenu)
}

function showMenu () {
  const menuList = document.getElementById('menuList')
  menuList.style.display = 'flex'
  img.src = close
  img.style.width = '20px'
  img.style.height = '20px'
  btn.removeEventListener('click', showMenu)
  btn.addEventListener('click', closeMenu)
}
btn.addEventListener('mouseover', showMenu)
btn.addEventListener('click', closeMenu)
