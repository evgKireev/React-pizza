import { useEffect, useState } from 'react';

import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPizzas() {
      try {
        const res = await fetch(
          'https://6336e7175327df4c43cbdd5f.mockapi.io/items'
        );
        const pizza = await res.json();
        setPizzas(pizza);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    }
    getPizzas();
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((value, index) => <PizzaBlock key={index} {...value} />)}
      </div>
    </div>
  );
}

export default Home;
