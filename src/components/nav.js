import imgMenuHamburgesa from '../images/menuIcon.png'

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

export default nav
