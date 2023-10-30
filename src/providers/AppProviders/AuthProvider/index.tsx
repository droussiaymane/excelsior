import React, {useEffect} from 'react';

import {useDispatch} from 'react-redux';
import useAuthProvider from './slice';
import {getTokenAction} from './slice/actions';

export type IAuthProviderProps = {};

const AuthProvider: React.FC<IAuthProviderProps> = ({children}) => {
  useAuthProvider();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokenAction());
  }, []);

  return <>{children}</>;
};

export {AuthProvider};
