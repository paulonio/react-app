import { createContext, Dispatch } from 'react';
import { IDataRick } from 'components/content/Content';
import { IFormData } from 'components/form/FormContent';
import {
  Action,
  formDataReducer,
  paginationValueReducer,
  rickDataReducer,
  searchValueReducer,
  sortOptionReducer,
  characterIdReducer,
  pageNumberReducer,
} from './reducers';

export type InitalStateType = {
  rickData: IDataRick[] | null;
  searchValue: string;
  formData: IFormData[];
  sortOption: string;
  paginationValue: string;
  characterId: number;
  pageNumber: string;
};

export const initialState: InitalStateType = {
  rickData: null,
  searchValue: '',
  formData: [],
  sortOption: 'by-creation',
  paginationValue: '12',
  characterId: 0,
  pageNumber: '1',
};

export const mainReducer = (
  {
    rickData,
    searchValue,
    formData,
    sortOption,
    paginationValue,
    characterId,
    pageNumber,
  }: InitalStateType,
  action: Action
) => ({
  rickData: rickDataReducer(rickData!, action),
  searchValue: searchValueReducer(searchValue, action),
  formData: formDataReducer(formData, action),
  sortOption: sortOptionReducer(sortOption, action),
  paginationValue: paginationValueReducer(paginationValue, action),
  characterId: characterIdReducer(characterId, action),
  pageNumber: pageNumberReducer(pageNumber, action),
});

export const SearchContext = createContext<{
  state: InitalStateType;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});
