import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link'

export default function Home() {
  const pizzas = [
    {
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheese-pizza',
      toppings: ['mozarella cheese'],
      image: 'https://images.unsplash.com/photo-1548369937-47519962c11a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      price: 9.99
    },
    {
      id: '2',
      name: 'Meat Lovers',
      slug: 'meat-lovers',
      toppings: ['ham', 'bacon', 'pepperoni', 'sausage'],
      image: 'https://images.unsplash.com/photo-1601924576374-990e34464c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      price: 15.99
    },
    {
      id: '3',
      name: 'Supreme',
      slug: 'supreme',
      toppings: ['olives', 'peppers', 'ham', 'pepperoni'],
      image: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
      price: 12.99
    },
    {
      id: '4',
      name: 'Pepperoni',
      slug: 'pepperoni',
      toppings: ['pepperoni'],
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80',
      price: 10.99
    },
  ]
  return (
    <div>
      <div className={styles.searchWrapper}>
        <input placeholder="Search for pizza or toppings.." className={styles.searchBar} />
      </div>
      <div className={styles.pizzaContainer}>
        {pizzas.map(pizza => {
          return(
            <div className={styles.pizzaItem} key={pizza.id}>
              <Link href={`/${pizza.slug}`}><a className={styles.pizzaImageBox}>
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
        })}
      </div>
    </div>
  )
}
