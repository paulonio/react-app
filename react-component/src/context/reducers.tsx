import { IDataRick } from 'components/content/Content';
import { IFormData } from 'components/form/FormContent';

export type sortValue = 'by-name' | 'by-creation' | 'by-species';

export type Action =
  | { type: 'GET_RICK_DATA'; data: IDataRick[] }
  | { type: 'UPDATE_SEARCH_VALUE'; value: string }
  | { type: 'UPDATE_FORM_DATA'; data: IFormData }
  | { type: 'UPDATE_SORT_OPTION'; option: string }
  | { type: 'UPDATE_ITEMS_PER_PAGE'; value: string }
  | { type: 'GET_CHARACTER_ID'; id: number }
  | { type: 'UPDATE_PAGE_NUMBER'; page: string };

export const rickDataReducer = (state: IDataRick[] | null, action: Action) => {
  switch (action.type) {
    case 'GET_RICK_DATA':
      return action.data;
    default:
      return state;
  }
};

export const formDataReducer = (state: IFormData[], action: Action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return state && [...state, action.data];
    default:
      return state;
  }
};

export const searchValueReducer = (state: string, action: Action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_VALUE':
      return action.value;
    default:
      return state;
  }
};

export const sortOptionReducer = (state: string, action: Action) => {
  switch (action.type) {
    case 'UPDATE_SORT_OPTION':
      return action.option;
    default:
      return state;
  }
};

export const paginationValueReducer = (state: string, action: Action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS_PER_PAGE':
      return action.value;
    default:
      return state;
  }
};

export const pageNumberReducer = (state: string, action: Action) => {
  switch (action.type) {
    case 'UPDATE_PAGE_NUMBER':
      return action.page;
    default:
      return state;
  }
};

export const characterIdReducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'GET_CHARACTER_ID':
      return action.id;
    default:
      return state;
  }
};
