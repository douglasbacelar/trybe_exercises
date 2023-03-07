import { REQUEST_API, GET_PICTURE } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  imgURL: '',
};

function characterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PICTURE:
      return {
        ...state,
        isLoading: false,
        imgURL: action.character[0],
      };
    case 'GET_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
        }
    default:
      return state;
  }
}

export default characterReducer;