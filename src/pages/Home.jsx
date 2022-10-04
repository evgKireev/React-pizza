import { useEffect, useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';

import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Pogination from '../components/Pogination/Pogination';

function Home() {
  const activeCategory = useSelector(
    (state) => state.filterSlice.activeCategory
  );
  const sortValue = useSelector((state) => state.filterSlice.sortValue.sort);
  const searchInput = useSelector((state) => state.searchSlize.searchInput);
  const poginationSelect = useSelector((state)=> state.poginationSlice.poginationSelect)
  
  let [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const order = sortValue.includes('-') ? 'asc' : 'desc';
  const categories = activeCategory > 0 ? `category=${activeCategory}` : '';
  const sort = sortValue.replace('-', '');

  useEffect(() => {
    setIsLoading(true);
    async function getPizzas() {
      try {
        const res = await fetch(
          `https://6336e7175327df4c43cbdd5f.mockapi.io/items?page=${poginationSelect}&limit=4&${categories}&sortBy=${sort}&order=${order}`
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
  }, [activeCategory, sortValue, poginationSelect]);

  pizzas = pizzas.filter((el) =>
    el.title.toLocaleLowerCase().includes(searchInput)
  );

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
      <Pogination />
    </div>
  );
}

export default Home;
