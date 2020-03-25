// @flow
import { GET_RACES, GET_RACES_SUCCESS, GET_RACES_FAIL } from '../actions/races';
import Race from '../../model/Race';

const initialState = {
  isFetching: true,
  items: [],
};

export function racesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RACES: {
      return { isFetching: true };
    }
    case GET_RACES_SUCCESS: {
      return { ...state, 
        isFetching: false,
        items: action.payload.data.MRData.RaceTable.Races.map(_ => Object.assign(new Race(), _)),
      };
    }
    case GET_RACES_FAIL: {
      return { ...state, isFetching: false };
    }
    default:
      return state;
  }
}
