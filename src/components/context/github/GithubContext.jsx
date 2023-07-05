import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// create the context
const GithubContext = createContext();

// create the provider
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // return  the GithubContext.Provider
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
