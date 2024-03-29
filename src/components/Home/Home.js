import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const pizzas = [
    {
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheese-pizza',
      toppings: ['mozarella cheese'],
      description: 'A delicious cheese pizza made with our finest tomato sauce.',
      image: 'https://images.unsplash.com/photo-1548369937-47519962c11a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      price: 9.99
    },
    {
      id: '2',
      name: 'Meat Lovers',
      slug: 'meat-lovers',
      toppings: ['ham', 'bacon', 'pepperoni', 'sausage'],
      description: 'You want meat? This pizza has the essentials! Ham, bacon, pepperoni, and sausage.',
      image: 'https://images.unsplash.com/photo-1601924576374-990e34464c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      price: 15.99
    },
    {
      id: '3',
      name: 'Supreme',
      slug: 'supreme',
      toppings: ['olives', 'peppers', 'ham', 'pepperoni'],
      description: 'Our most delicious veggies and meats.',
      image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      price: 12.99
    },
    {
      id: '4',
      name: 'Pepperoni',
      slug: 'pepperoni',
      toppings: ['pepperoni'],
      description: 'The classic topping of cheese and pepperoni.',
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
      price: 10.99
    },
  ]

  const [keyword, setKeyword] = useState('');

  const filteredPizza = pizzas.filter(
    pizza =>
    pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword)
  )
  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }
  return (
    <div>
      <div className={styles.searchWrapper}>
        <input 
        placeholder="Search for pizza or toppings.." 
        className={styles.searchBar} 
        onChange={onInputChange}
        />
      </div>
      <div className={styles.pizzaContainer}>
        {filteredPizza < 1 ? 
        (
          <div className={styles.nopeContainer}>There is no pizza or topping with that.</div>
        )
        :
        (
          filteredPizza.map(pizza => {
          return(
            <div className={styles.pizzaItem} key={pizza.id}>
              <Link href={`/${pizza.slug}`}>
                <a className={styles.pizzaImageBox}>
                <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
                </a>
              </Link>
              <div className={styles.pizzaText}>
                <p className={styles.pizzaHeader}>{pizza.name}</p>
                <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
                <p className={styles.pizzaPrice}>${pizza.price}</p>
              </div>
            </div>
          )
          })
        )}
      </div>
    </div>
  )
}
