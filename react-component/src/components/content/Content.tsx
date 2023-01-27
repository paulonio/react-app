import React, { useContext, useEffect, useState } from 'react';

import { fetchByCharacterName, fetchData } from 'fetch/fetch';
import { SearchContext } from 'context/context';
import { Action } from 'context/reducers';

import Cards from 'components/cards/Cards';
import ContentHeader from 'components/content-header/ContentHeader';
import Loader from 'components/loader/Loader';
import Modal from 'components/modal/Modal';
import CustomSelect from './utils/CustomSelect';
import ContentButtons from './content-buttons/ContentButtons';

import classes from './content.module.scss';

export interface IDataRick {
  name?: string;
  created?: string;
  episode?: string[];
  gender?: string;
  id?: number;
  image?: string;
  location?: {
    name: string;
    url: string;
  };
  origin?: {
    name: string;
    url: string;
  };
  species?: string;
  status?: string;
  type?: string;
  url?: string;
}

export type OptionsType = { value: string; label: string };

const sortOptions: OptionsType[] = [
  { value: 'by-creation', label: 'By creation' },
  { value: 'by-name', label: 'By name' },
  { value: 'by-species', label: 'By species' },
];

const paginationOptions: OptionsType[] = [
  { value: '12', label: '12 per page' },
  { value: '16', label: '16 per page' },
  { value: '20', label: '20 per page' },
];

const Content = () => {
  const [modalIsActive, setModalActive] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IDataRick>({});
  const [isLoading, setLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { state, dispatch } = useContext(SearchContext);
  const page = state.pageNumber || '1';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const action: Action = { type: 'UPDATE_SEARCH_VALUE', value: e.target.value };
    dispatch(action);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const action: Action = { type: 'UPDATE_SORT_OPTION', option: e.target.value };
    dispatch(action);
  };

  const handlePaginationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const action: Action = { type: 'UPDATE_ITEMS_PER_PAGE', value: e.target.value };
    dispatch(action);
  };

  const sortData = (data: IDataRick[]) => {
    const option = state.sortOption;
    if (option === 'by-name') {
      return data.sort((a, b) => a.name!.localeCompare(b.name!) - b.name!.localeCompare(a.name!));
    }
    if (option === 'by-creation') {
      return data.sort((a, b) => Date.parse(a.created!) - Date.parse(b.created!));
    }
    if (option === 'by-species') {
      return data.sort(
        (a, b) => a.species!.localeCompare(b.species!) - b.species!.localeCompare(a.species!)
      );
    }
    return data;
  };

  const sliceResults = (data: IDataRick[]) => {
    const maxCardsOnPage = Number(state.paginationValue);
    return data.slice(0, maxCardsOnPage);
  };

  const getDataOnMount = async () => {
    setLoading(true);
    const response = await fetchData(page);
    if (response) {
      setTotalPages(response.info.pages);
      const result: IDataRick[] = response.results;
      const correctNumber = sliceResults(result);
      const sortedData = sortData(correctNumber);
      const action: Action = { type: 'GET_RICK_DATA', data: sortedData };
      dispatch(action);
    }
    setLoading(false);
  };

  const handleSearch = async (query: string, page?: string) => {
    setLoading(true);
    const currentPage = state.pageNumber;
    const response = await fetchByCharacterName(query, page || currentPage);
    if (response) {
      setTotalPages(response.info.pages);
      const result: IDataRick[] = response.results;
      const correctNumber = result && sliceResults(result);
      const sortedData = correctNumber && sortData(correctNumber);
      const action: Action = { type: 'GET_RICK_DATA', data: sortedData };
      dispatch(action);
    } else {
      const action: Action = { type: 'GET_RICK_DATA', data: [] };
      dispatch(action);
    }
    setLoading(false);
  };

  const handleKeyboardEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      const actionPage: Action = { type: 'UPDATE_PAGE_NUMBER', page: '1' };
      dispatch(actionPage);
      handleSearch(state.searchValue, '1');
    }
  };

  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget as HTMLElement;
    const idx = target.dataset.id && target.dataset.id;
    const [targetData] = state.rickData!.filter((item) => idx === String(item.id));
    setModalData(targetData);
  };

  useEffect(() => {
    const value = state.searchValue;
    value ? handleSearch(value) : getDataOnMount();
  }, [state.sortOption, state.paginationValue, state.pageNumber]);

  return (
    <section className={classes.home__content}>
      <ContentHeader
        inputValue={state.searchValue}
        handleChange={handleChange}
        handleKeyboardEvent={handleKeyboardEvent}
        handleSearch={handleSearch}
      />
      <div className={classes.select__container}>
        <CustomSelect handler={handleSortChange} options={sortOptions} />
        <CustomSelect handler={handlePaginationChange} options={paginationOptions} />
      </div>
      {state.rickData && (
        <Cards
          data={state.rickData}
          modalSetActive={setModalActive}
          handleCardClick={handleCardClick}
        />
      )}
      {!state.rickData && <div className={classes.error__message}>Sorry, data not found.</div>}
      {modalData.name && (
        <Modal isActive={modalIsActive} setActive={setModalActive} targetData={modalData} />
      )}
      {isLoading && <Loader />}
      {!!state.rickData && <ContentButtons totalPages={totalPages} />}
    </section>
  );
};

export default Content;
