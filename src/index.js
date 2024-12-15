import './style.css'
import imgMenuHamburgesa from './images/menuIcon.png'
const container = document.getElementById('container')
let nav = `<nav class="navContainer">
            <div class="logo">Logo</div>
            <div class="btnContainer" id="btnContiner">
                <button id="btn" class="btn"><img id="imgMenuHamburgesa" class="imgMenuHamburgesa" src="${imgMenuHamburgesa}" alt="menu hamburgesa"></button>
                <div class="menuList" id="menuList">
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </div>
    </nav>`
let page = `<div class="page">
                <h1>Page</h1>
            </div>`

container.innerHTML = nav + page

const btn = document.getElementById('btn')
btn.addEventListener('mouseover', () => {
  const btnContainer = document.getElementById('btnContiner')
  const menuList = document.getElementById('menuList')
  btnContainer.style.display = 'grid'
  menuList.style.display = 'flex'
})
