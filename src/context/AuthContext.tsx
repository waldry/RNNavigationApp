import React, {createContext} from 'react';
import {useReducer} from 'react';
import {authReducer} from './authReducer';

// Definir como luce, que informacion tendre aqui.
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Estado Inicial
export const authInitialState: AuthState = {
  isLoggedIn: false,
};

// Lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logOut: () => void;
  changeUserName: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente que es el proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const signIn = () => {
    dispatch({type: 'signIn'});
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };
  const logOut = () => {
    dispatch({type: 'logout'});
  };
  const changeUserName = (username: string) => {
    dispatch({type: 'changeName', payload: username});
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavoriteIcon,
        logOut,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
