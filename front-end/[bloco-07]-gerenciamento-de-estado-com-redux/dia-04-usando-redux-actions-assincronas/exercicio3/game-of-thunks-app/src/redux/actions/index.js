export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';
export const GET_ERROR = 'GET_ERROR';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (character) => ({ type: GET_PICTURE, character });

export const getError = (error) => ({ type: GET_PICTURE, error });

export function fetchAPI(name) {
  return async (dispatch) => {
    try {
      dispatch(requestAPI());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data = await response.json();
      dispatch(getPicture(data));
    } catch (error) {
      dispatch(getError(error));
    }
  };
}