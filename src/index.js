import './styles.css'
import { initPage } from './modules/home/home.js'
import { showMenu } from './modules/menu/menu.js'
import { showAbout } from './modules/about/about.js'

const loadFunctions = {
  home: initPage,
  menu: showMenu,
  about: showAbout
}

initPage()

document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', e => {
    const page = e.target.textContent.toLowerCase()
    document.querySelector('#content').innerHTML = ''
    loadFunctions[page]()
  })
})