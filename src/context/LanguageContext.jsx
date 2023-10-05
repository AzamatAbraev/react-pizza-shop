import { createContext } from "react";
import PropTypes from "prop-types";

export const LanguageContext = createContext();


const LanguageContextProvider = ({children}) => {
  const state = {langType: "en"};
  return <LanguageContext.Provider value={state}>
    {children}
  </LanguageContext.Provider>;
};

LanguageContextProvider.propTypes = {
  children: PropTypes.node,
}

export default LanguageContextProvider;
