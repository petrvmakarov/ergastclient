export const GET_RACES = 'GET_RACES';
export const GET_RACES_SUCCESS = 'GET_RACES_SUCCESS';
export const GET_RACES_FAIL = 'GET_RACES_FAIL';

export function fetchRaces(driverId: string) {
  return dispatch => {
    dispatch({
      type: GET_RACES,
      payload: {
        request: {
          url: `http://ergast.com/api/f1/drivers/${driverId}/results.json`,
        },
      },
    });
  };
}
