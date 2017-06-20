import {SET_COMPLETED} from '../constants';

export default (state = [], action) =>{
  switch(action.type){
    case SET_COMPLETED:
        const {completegoals} = action;
        return completegoals;
      default:
        return state;

  }
}
