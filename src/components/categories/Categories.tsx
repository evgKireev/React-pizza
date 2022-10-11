import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { setActiveCategory } from '../../redux/filterSlice';

function Categories() {
  const activeCategory = useSelector(
    (state: RootState) => state.filterSlice.activeCategory
  );
  const dispatch = useDispatch();
  const categories: string[] = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch(setActiveCategory(index));
            }}
            className={activeCategory === index ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
