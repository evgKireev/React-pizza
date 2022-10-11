import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import Skeleton from '../components/pizzaBlock/Skeleton';

function OnePizzaBlock() {
  const [pizza, setsPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const [error, setError] = useState('');

  const { id } = useParams();

  useEffect(() => {
    async function getPizza() {
      try {
        const { data } = await axios.get(
          `https://6336e7175327df4c43cbdd5f.mockapi.io/items/` + id
        );
        setsPizza(data);
      } catch (error) {
        setError(error.message);
      }
    }
    getPizza();
  }, [id]);
  if (!pizza) {
    return <Skeleton className="pizza-block-one" />;
  }

  return (
    <div className="pizza-block-one">
      {error ? (
        <div className="cart cart--empty">
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>
            К сожалению, не удалось получить питсу. Попробуйте повторить попытку
            позже!
          </p>
        </div>
      ) : (
        <>
          <div>
            <img
              className="pizza-block__image"
              src={pizza.imageUrl}
              alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizza.title}</h4>
            <h5 className="pizza-block__price">{pizza.price} ₽</h5>
          </div>
          <div>
            <p>
              Традиционное итальянское блюдо в виде круглой дрожжевой лепёшки,
              выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и
              зачастую других ингредиентов, таких как мясо, овощи, грибы и
              других продуктов.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default OnePizzaBlock;
