/**
 if (response.status === 204 || response.status === 205) {
	 if (response.status >= 200 && response.status < 300) {
		 * Parses the JSON returned by a network request
		*/

import axios from 'axios';
import {AxiosConfigs} from './constants';

import {store} from '../../src/providers/AppProviders';
import {getTokenAction} from '../providers/AppProviders/AuthProvider/slice/actions';

// theFileYouDeclaredTheCustomConfigIn.ts
declare module 'axios' {
  export interface AxiosRequestConfig {}
}

const request = axios.create(AxiosConfigs);

request.interceptors.request.use(
  async config => {
    const token = store.getState().authProvider.token;

    // console.log(token);

    if (token) config.headers.Authorization = `bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  async res => {
    return res;
  },
  async err => {
    console.log('=============API ERROR==============');
    console.log(err.config?.baseURL + err.config?.url);
    console.log({status: err.response?.status});
    console.log({err});
    /**
     * NB: _ ==> .
     * What can I still log:
     * err_code as status,
     * err_stack,
     * err_message,
     * Object_keys (err),
     * err_toJSON ()
     */
    console.log('====================================');

    if (err.response?.status === 401) {
      store.dispatch(getTokenAction());
    }

    return Promise.reject(err);
  },
);

export default request;
