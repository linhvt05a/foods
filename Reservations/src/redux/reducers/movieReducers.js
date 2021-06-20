import * as types from '../types';

const initialState = {
  loading: false,
  error: null,
  movie: {},
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.GET_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.res
      };
    case types.GET_MOVIE_FAILURE:
      return {
        ...state,
        loading: true,
        error: action.message
      };

    default:
      return state;
  }
}
