// @flow
import { GET_RACERS, GET_RACERS_SUCCESS, GET_RACERS_FAIL } from '../actions/racers';
import Driver from '../../model/Driver';

const initialState = {
  isFetching: true,
  items: [],
};

export function racersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RACERS: {
      return { ...state, isFetching: true };
    }
    case GET_RACERS_SUCCESS: {
      return { ...state, 
        isFetching: false,
        items: [].concat(state.items, action.payload.data.MRData.DriverTable.Drivers.map(_ => Object.assign(new Driver(), _))),
      };
    }
    case GET_RACERS_FAIL: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
}
