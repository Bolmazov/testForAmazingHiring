/*eslint-disable */
import { browserHistory } from 'react-router';

export const redirect = store => next => action => {
  if (action.type === 'SET_USER' && action.payload.id) {
    browserHistory.push(`?assignee=${action.payload.id}`);
  } else if (action.type === 'EDIT_VACANCY') {
    browserHistory.push('/');
  }
  return next(action);
};
/*eslint-enable */
