import {useInjectReducer, useInjectSaga} from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'authProvider';

export default function useAuthProvider() {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
}
