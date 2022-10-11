import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPizzas, CartPizzas } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
};

function PizzaBlock({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
}: PizzaBlockProps) {
  const dispatch = useDispatch();
  const [sizesIndex, setSizesIndex] = useState<number>(0);
  const [typesIndex, setTypesIndex] = useState<number>(0);
  const typeName:string[] = ['тонкое', 'традиционное'];
  const cartItem:CartPizzas = {
    id,
    title,
    imageUrl,
    price,
    types: typeName[typesIndex],
    sizes: sizes[sizesIndex],
    count: 0,
  };
  const countItem = useSelector((state: RootState) =>
    state.cartSlice.pizzas.find((value) => value.id === id)
  );
  const count = countItem ? countItem.count : 0;
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        </Link>
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((value, index) => (
              <li
                key={index}
                className={typesIndex === index ? 'active' : ''}
                onClick={() => setTypesIndex(index)}
              >
                {typeName[value]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((value, index) => (
              <li
                key={index}
                className={sizesIndex === index ? 'active' : ''}
                onClick={() => setSizesIndex(index)}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div
            onClick={() => dispatch(addPizzas(cartItem))}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {countItem && <i>{count}</i>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
