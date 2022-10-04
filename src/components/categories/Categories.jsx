import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../redux/filterSlice';

function Categories() {
  const activeCategory = useSelector(
    (state) => state.filterSlice.activeCategory
  );
  const dispatch = useDispatch();
  const categories = [
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
