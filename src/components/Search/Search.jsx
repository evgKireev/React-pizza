import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchInput } from '../../redux/searchSlize';

import style from './Search.module.scss';

function Search() {
  const searchInput = useSelector((state) => state.searchSlize.searchInput);
  const dispatch = useDispatch();
  return (
    <input
      value={searchInput}
      onChange={(e) =>
        dispatch(setSearchInput(e.target.value.toLocaleLowerCase().trim()))
      }
      className={style.input}
      placeholder="Поиск пиццы..."
    />
  );
}

export default Search;
