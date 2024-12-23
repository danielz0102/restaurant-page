import './styles.css'
import landingImg from './landing-img.jpg'

export function initPage() {
  const main = document.createElement('main')

  const h1 = document.createElement('h1')
  h1.textContent = 'Lumio'

  const img = new Image()
  img.src = landingImg

  const p = document.createElement('p')
  p.textContent = "Welcome to our restaurant, where we serve the most delicious and mouth-watering dishes. Our chefs use only the freshest ingredients to create culinary masterpieces that will tantalize your taste buds. Whether you're here for a quick bite or a leisurely meal, we strive to provide an exceptional dining experience. Come and enjoy the warm and inviting atmosphere, and let us take care of the rest. We look forward to serving you!"

  main.append(h1, img, p)
  document.querySelector('#content').appendChild(main)
}