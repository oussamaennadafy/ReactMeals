import { createContext, useReducer, useState } from "react";

const toasterContext = createContext();

export const ToasterProvider = ({ children }) => {
  const initialToasterState = {
    display: false,
    status: "",
    message: "",
  };
  const ToasterReducer = (state, action) => {
    if (action.type === "SHOW") {
      return {
        display: true,
        status: action.status,
        message: action.message,
      };
    }
    if (action.type === "HIDE") {
      return {
        display: false,
        status: "",
        message: "",
      };
    }
  };
  const [toasterState, dispatchToaster] = useReducer(
    ToasterReducer,
    initialToasterState
  );
  return (
    <toasterContext.Provider value={{ toasterState, dispatchToaster }}>
      {children}
    </toasterContext.Provider>
  );
};

export default toasterContext;
