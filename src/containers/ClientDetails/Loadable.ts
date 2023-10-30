/**
 *
 * Asynchronously loads the component for ClientDetails
 *
 */
 
import loadable from 'utils/loadable';

export default loadable(() => import('./index'));


