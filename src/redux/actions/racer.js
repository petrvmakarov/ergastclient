export const GET_RACER = 'GET_RACER';
export const GET_RACER_SUCCESS = 'GET_RACER_SUCCESS';
export const GET_RACER_FAIL = 'GET_RACER_FAIL';

export function fetchRacer(driverId: string) {
  return dispatch => {
    dispatch({
      type: GET_RACER,
      payload: {
        request: {
          url: `http://ergast.com/api/f1/drivers/${driverId}.json`,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    });
  };
}
