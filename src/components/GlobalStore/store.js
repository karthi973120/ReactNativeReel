import React, { createContext, useReducer } from 'react';

const initialState = {
};
const actions = {
  EQUIPMENT_DATA: 'EQUIPMENT_DATA',
};
const contextStore = createContext(initialState);
const { Provider } = contextStore;

const StateProvider = ({ children }) => {
  const [state, contextDispatch] = useReducer((state, action) => {
    // switch (action.type) {
    //   case actions.EQUIPMENT_DATA:
    //     return { ...state, equipmentData: action.value };
    //   default:
    //     console.log('Context error');
    // }
  }, initialState);

  return <Provider value={{ state, contextDispatch }}>{children}</Provider>;
};

export { contextStore, StateProvider };
