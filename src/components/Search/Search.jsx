import React from 'react';

import style from './Search.module.scss';
import { SearchContext } from '../../App';

function Search() {
  const { searchInput, setSearchInput } = React.useContext(SearchContext);
  return (
    <input
      value={searchInput}
      onChange={(e) =>
        setSearchInput(e.target.value.toLocaleLowerCase().trim())
      }
      className={style.input}
      placeholder="Поиск пиццы..."
    />
  );
}

export default Search;
