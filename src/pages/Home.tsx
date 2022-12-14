import { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { fetchPizzas } from '../redux/pizzas.Slice';
import { RootState, useAppDispatch } from '../redux/store';

import Categories from '../components/categories/Categories';
import Sort from '../components/sort/Sort';
import PizzaBlock from '../components/pizzaBlock/PizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';
import Pogination from '../components/Pogination/Pogination';

function Home() {
  let { data, status } = useSelector((state: RootState) => state.pizzasSlice);
  const activeCategory = useSelector(
    (state: RootState) => state.filterSlice.activeCategory
  );
  const sortValue = useSelector(
    (state: RootState) => state.filterSlice.sortValue.sort
  );
  const searchInput = useSelector(
    (state: RootState) => state.searchSlize.searchInput
  );
  const poginationSelect = useSelector(
    (state: RootState) => state.poginationSlice.poginationSelect
  );
  const dispatch = useAppDispatch();

  const order = sortValue.includes('-') ? 'asc' : 'desc';
  const categories = activeCategory > 0 ? `category=${activeCategory}` : '';
  const sort = sortValue.replace('-', '');
  useEffect(() => {
    dispatch(
      fetchPizzas({
        order,
        categories,
        sort,
        poginationSelect: String(poginationSelect),
      })
    );
    window.scrollTo(0, 0);
  }, [activeCategory, sortValue, poginationSelect]);
  data = data.filter((el) =>
    el.title.toLocaleLowerCase().includes(searchInput)
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'rejected' ? (
        <div className="cart cart--empty">
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>
            К сожалению, не удалось получить питсы. Попробуйте повторить попытку
            позже!
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'pending'
            ? [...new Array(9)].map((_, index) => <Skeleton key={index} />)
            : data.map((value, index: number) => (
                <PizzaBlock key={index} {...value} />
              ))}
        </div>
      )}
      <Pogination />
    </div>
  );
}

export default Home;
