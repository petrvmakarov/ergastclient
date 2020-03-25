// @flow
import { GET_RACER, GET_RACER_SUCCESS, GET_RACER_FAIL } from '../actions/racer';
import Driver from '../../model/Driver';

const initialState = {
  racer: {}
};

export function racerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RACER: {
      return { ...state, isFetching: true };
    }
    case GET_RACER_SUCCESS: {
      return { ...state, 
        reacer: action.payload.data,
      };
    }
    case GET_RACER_FAIL: {
      return { ...state };
    }
    default:
      return state;
  }
}
