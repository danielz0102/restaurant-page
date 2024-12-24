import './styles.css'

const menus = {
  drinks: [
    {
      name: 'Coca Cola',
      price: 1.5
    },
    {
      name: 'Fanta',
      price: 1.5
    },
    {
      name: 'Sprite',
      price: 1.5
    },
    {
      name: 'Water',
      price: 1
    }
  ],
  pizzas: [
    {
      name: 'Margherita',
      price: 5
    },
    {
      name: 'Pepperoni',
      price: 6
    },
    {
      name: 'Vegetarian',
      price: 6
    },
    {
      name: 'Hawaiian',
      price: 7
    }
  ]
}

export function showMenu() {
  const main = document.createElement('main')
  main.id = 'menus'

  const drinks = document.createElement('section')
  drinks.classList.add('menu')
  drinks.innerHTML = `
    <h2>Drinks 🍹</h2>
    <ul>
      ${menus.drinks.map(drink => `<li>${drink.name} <em>$${drink.price}</em></li>`).join('')}
    </ul>
  `

  const pizzas = document.createElement('section')
  pizzas.classList.add('menu')
  pizzas.innerHTML = `
    <h2>Pizzas 🍕</h2>
    <ul>
      ${menus.pizzas.map(pizza => `<li>${pizza.name} <em>$${pizza.price}</em></li>`).join('')}
    </ul>
  `

  main.append(drinks, pizzas)
  document.querySelector('#content').append(main)
}