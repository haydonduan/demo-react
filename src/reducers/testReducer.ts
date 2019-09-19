import { AnyAction } from 'redux';

export default (state = '', action: AnyAction) => {
  if (action.type === 'SIMPLE_ACTION') {
    return action.payload
  } else {
    return state
  }
}