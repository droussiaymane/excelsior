/*
 * Popup Messages
 *
 * This contains all the text for the Popup component.
 */

import {defineMessages} from 'react-intl';

export const scope = 'app.components.Popup';

export default defineMessages({
  header: {
    scope: `${scope}.header`,
    options: {
      defaultValue: 'This is the Popup component!',
    },
  },
});
