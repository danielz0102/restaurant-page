import './styles.css'

export function showAbout() {
  const main = document.createElement('main')
  main.id = 'about'

  const h1 = document.createElement('h1')
  h1.textContent = 'About Us'

  const p = document.createElement('p')
  p.innerHTML = 'Welcome to <span class="brand">Lumio Pizzeria</span>, where tradition meets taste! Nestled in the heart of the city, Lumio has been serving authentic Italian pizzas since 1985. Our pizzas are crafted with the finest ingredients, from hand-tossed dough to our signature tomato sauce made from sun-ripened tomatoes. Each pizza is baked to perfection in our wood-fired oven, ensuring a crispy crust and a burst of flavors in every bite. Whether you are a fan of classic Margherita or adventurous gourmet toppings, Lumio Pizzeria promises a delightful dining experience. Join us for a slice of Italy right here in your neighborhood!'

  const h2 = document.createElement('h2')
  h2.textContent = 'Contact Us'

  const address = document.createElement('address')
  address.innerHTML = `
    <p>Phone: (123) 456-7890</p>
    <p>Email: contact@lumiopizzeria.com</p>
  `

  main.append(h1, p, h2, address)

  document.querySelector('#content').appendChild(main)
}