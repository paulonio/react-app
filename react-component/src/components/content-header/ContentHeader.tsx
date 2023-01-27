import React, { useContext } from 'react';
import { SearchContext } from 'context/context';

import classes from '../content/content.module.scss';
import { Action } from 'context/reducers';

type Props = {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyboardEvent: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleSearch: (query: string, page?: string) => void;
};

const ContentHeader = ({ inputValue, handleChange, handleKeyboardEvent, handleSearch }: Props) => {
  const { dispatch } = useContext(SearchContext);

  const handleClickSearch = () => {
    const action: Action = { type: 'UPDATE_PAGE_NUMBER', page: '1' };
    dispatch(action);
    handleSearch(inputValue, '1');
  };

  return (
    <div className={classes.content__header}>
      <h1 className={classes.title}>Characters</h1>
      <div className={classes.search__bar}>
        <input
          type="search"
          placeholder="Search"
          className={classes.search__input}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyboardEvent}
        />
        <button className={classes.search__button} onClick={handleClickSearch}>
          <img src="./assets/icons/search.svg" alt="search icon" className={classes.search__icon} />
        </button>
      </div>
    </div>
  );
};

export default ContentHeader;
