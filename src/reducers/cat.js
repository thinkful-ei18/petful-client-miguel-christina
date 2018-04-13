import { FETCH_CAT_SUCCESS, FETCH_CAT_REQUEST, FETCH_CAT_ERROR, ADOPT_CAT_SUCCESS, ADOPT_CAT_FAILURE, ADOPT_CAT_REQUEST } from '../actions/cat.js';
//dummy initialState
const initialState = {
  currentCat: null,
  loading: false,
  error: null,
}

export default function catReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAT_SUCCESS:
      return {
        ...state,
        currentCat: action.cat,
        loading: false,
        error: false
      };

    case FETCH_CAT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case FETCH_CAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };

    case ADOPT_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false
      };

    case ADOPT_CAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case ADOPT_CAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };


    default:
      return state;

  }
}
