import { createContext, useContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

// Wrap our app
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull the information from the data layer

export const useStateValue = () => useContext(StateContext);
