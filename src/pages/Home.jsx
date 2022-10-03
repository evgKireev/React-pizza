import { useEffect, useState } from 'react';

import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Pogination from '../components/Pogination/Pogination';

function Home({ searchInput }) {
  let [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(0);
  const [poginationSelect, setPoginationSelect] = useState(1);
  const [sortValue, setSortValue] = useState({
    name: 'популярности',
    sort: 'rating',
  });

  const order = sortValue.sort.includes('-') ? 'asc' : 'desc';
  const categories = activeCategory > 0 ? `category=${activeCategory}` : '';
  const sort = sortValue.sort.replace('-', '');

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
        <Categories
          activeCategory={activeCategory}
          onClickIndex={(index) => setActiveCategory(index)}
        />
        <Sort
          sortValue={sortValue}
          onClickValue={(index) => setSortValue(index)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
          : pizzas.map((value, index) => <PizzaBlock key={index} {...value} />)}
      </div>
      <Pogination
        onClickSelect={(selected) => setPoginationSelect(selected + 1)}
      />
    </div>
  );
}

export default Home;
