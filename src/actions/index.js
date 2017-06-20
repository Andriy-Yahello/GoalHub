import {SIGNED_IN, SET_GOALS, SET_COMPLETED} from '../constants';

export function LogUser(email){
  const action={
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setGoals(goals){
  const action={
    type: SET_GOALS,
    goals
  }
  return action;
}

export function setCompleted(completegoals){
  const action={
    type: SET_COMPLETED,
    completegoals
  }
  return action;
}
