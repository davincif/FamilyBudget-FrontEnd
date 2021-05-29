// Third party libs
import React, { createContext, useReducer } from "react";

// Internal imports
import { LocaleReducer, initialState } from "./LocaleReducer";

export const LocaleContext = createContext({} as any);

const LocaleContextProvider = (props: any) => {
  const [locale, localeDispatch] = useReducer(LocaleReducer, initialState);

  return (
    <LocaleContext.Provider value={{ locale, localeDispatch }}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContextProvider;
