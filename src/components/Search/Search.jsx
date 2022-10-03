import style from './Search.module.scss';
function Search({onInput}) {
  return <input onInput={onInput} className={style.input} placeholder="Поиск пиццы..." />;
}


export default Search