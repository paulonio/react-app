import React, { useContext } from 'react';
import { SearchContext } from 'context/context';
import { Action } from 'context/reducers';
import classes from './contentButtons.module.scss';

const ContentButtons = ({ totalPages }: { totalPages: number }) => {
  const { state, dispatch } = useContext(SearchContext);
  const page = state.pageNumber || '1';

  const increasePage = () => {
    const updatedPageNumber = (Number(page) + 1).toString();
    const action: Action = { type: 'UPDATE_PAGE_NUMBER', page: updatedPageNumber };
    Number(page) < totalPages && dispatch(action);
  };

  const decreasePage = () => {
    const updatedPageNumber = (Number(page) - 1).toString();
    const action: Action = { type: 'UPDATE_PAGE_NUMBER', page: updatedPageNumber };
    Number(page) > 1 && dispatch(action);
  };

  const setFirstPage = () => {
    const action: Action = { type: 'UPDATE_PAGE_NUMBER', page: '1' };
    dispatch(action);
  };

  const setLastPage = () => {
    const action: Action = { type: 'UPDATE_PAGE_NUMBER', page: totalPages.toString() };
    dispatch(action);
  };

  return (
    <div className={classes.content__buttons}>
      <button className={classes.content__button} onClick={setFirstPage}>
        1
      </button>
      <button className={classes.content__button} onClick={decreasePage}>
        <img src="./assets/icons/previous-page.svg" alt="Previous page logo" />
      </button>
      <button className={classes.content__button}>{page}</button>
      <button className={classes.content__button} onClick={increasePage}>
        <img src="./assets/icons/next-page.svg" alt="Next page logo" />
      </button>
      <button className={classes.content__button} onClick={setLastPage}>
        {totalPages}
      </button>
    </div>
  );
};

export default ContentButtons;
