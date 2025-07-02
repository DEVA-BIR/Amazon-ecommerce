// src/Component/DataProvider/DataProvider.jsx
import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from '../../Utility/reducer.jsx';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
