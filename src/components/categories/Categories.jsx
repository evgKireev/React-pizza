function Categories({ activeCategory, onClickIndex }) {
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
              onClickIndex(index);
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
