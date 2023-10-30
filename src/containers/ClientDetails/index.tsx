/**
 *
 * ClientDetails
 *
 */

import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {useInjectReducer, useInjectSaga} from 'redux-injectors';
import {selectClientDetailsToken} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {View, Text} from 'react-native';

const stateSelector = createStructuredSelector({});

const key = 'clientDetails';

function ClientDetails() {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});

  /* eslint-disable no-unused-vars */
  const {} = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */
  // console.log(clientToken);

  return <></>;
}

ClientDetails.propTypes = {};

export default ClientDetails;
