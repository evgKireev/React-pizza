import style from './Search.module.scss';
function Search({onInput, searchInput}) {
  return <input value={searchInput} onInput={onInput} className={style.input} placeholder="Поиск пиццы..." />;
}


export default Search