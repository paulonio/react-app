import React, { FC, ReactElement, useReducer } from 'react';
import { initialState, mainReducer, SearchContext } from 'context/context';

export const StateProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>;
};
