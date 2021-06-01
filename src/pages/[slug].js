// dynamically creates the slug route page
// the [slug] tells next.js that this will extend other pages in same directory
// when you go to the home page, click on an option, it will change to slug view
// the route name changes in your Domain per what i assigned slugs value in Home component object

import React from 'react'
import styles from '../styles/Pizza.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Pizza({pizza, otherPizzas}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pizza.name}</title>
      </Head>

      <div className={styles.pizzaWrapperLeft}>
        <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
      </div>

      <div className={styles.pizzaWrapperRight}>
        <div className={styles.pizzaInfo}>
          <p className={styles.pizzaTitle}>{pizza.description}</p>
          <p className={styles.pizzaPrice}>${pizza.price}</p>
          <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(', ')}</p>
        </div>

        <div className={styles.otherPizzasWrapper}>
          {otherPizzas.map(otherpizza => {
            return(
              <div className={styles.otherPizzas} key={otherpizza.id}>
                <Link href={"/" + otherpizza.slug}>
                  <a>
                    <img src={otherpizza.image} alt={otherpizza.name} />
                    <p>{otherpizza.name}</p>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
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
  const paths = pizzas.map(pizza => ({
    params: {slug: `${pizza.slug}`}
  }));
  return {
    paths, 
    fallback: false,
  }
}

export const getStaticProps = async ({params}) => {
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
  // when clicking on an option, you'll be brought to the details view page of what you clicked on
  // the pizza variable filters through the other choices you had and displays them on the page for you to click on straight from the detail page of the one you chose
  const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug));
  // otherPizzas is telling next.js not to show the one you're currently viewing in detail, in the preview that pizza will create
  const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug);

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3)
    }
  }
}
