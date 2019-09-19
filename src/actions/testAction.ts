import { Dispatch } from 'redux';

export const testAction = (params: any) => (dispatch: Dispatch) => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: params
  })
};