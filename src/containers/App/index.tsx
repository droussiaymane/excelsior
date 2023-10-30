/**
 *
 * App
 *
 */

import React, {FC, useEffect, useState} from 'react';
import {InitialNavigator} from '../../navigators/InitialNavigator';

import ClientDetails from '../ClientDetails';

const key = 'app';
export type IAppProps = {};
const App: FC<IAppProps> = ({}) => {
  return (
    <>
      <ClientDetails />
      <InitialNavigator />
    </>
  );
};

App.propTypes = {};

export {App};
