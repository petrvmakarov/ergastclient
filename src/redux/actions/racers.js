export const GET_RACERS = 'GET_RACERS';
export const GET_RACERS_SUCCESS = 'GET_RACERS_SUCCESS';
export const GET_RACERS_FAIL = 'GET_RACERS_FAIL';

export function fetchRacers(fetched: Number = 0) {
  return dispatch => {
    dispatch({
      type: GET_RACERS,
      payload: {
        request: {
          url: `http://ergast.com/api/f1/drivers.json?limit=50&offset=${fetched}`,
        },
      },
    });
  };
}
