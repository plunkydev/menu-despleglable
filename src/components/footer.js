export default function createFooter () {
  const footer = document.createElement('footer')
  footer.classList.add('footer')
  footer.innerHTML = `
        <div id="footer">
            <p>Plunkydev All rights to Share, Enjoy &copy; 2024</p>
        </div>`
  return footer
}
