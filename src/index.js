import './styles.css'
import { showHome } from './modules/home/home.js'
import { showMenu } from './modules/menu/menu.js'
import { showAbout } from './modules/about/about.js'

const loadFunctions = {
  home: showHome,
  menu: showMenu,
  about: showAbout
}

showHome()

document.querySelectorAll('.link').forEach((link, i, arr) => {
  link.addEventListener('click', e => {
    const page = e.target.textContent.toLowerCase()
    document.querySelector('#content').innerHTML = ''
    loadFunctions[page]()
  })
})