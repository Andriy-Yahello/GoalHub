import { combineReducers} from 'redux';

import user from './reducer-user';
import goals from './reducer-goals';
import completegoals from './reducer-completed-goals';

export default combineReducers({
  user,
  goals,
  completegoals
})
