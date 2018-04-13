<<<<<<< HEAD
import {FETCH_DOG_SUCCESS, FETCH_DOG_REQUEST, FETCH_DOG_ERROR} from '../actions/dog.js';
=======
import { FETCH_DOG_SUCCESS, FETCH_DOG_REQUEST, FETCH_DOG_ERROR } from '../actions/dog.js';

>>>>>>> 5a9e39bb2067feeb9e2d97ab8d3df03c5f76900c
const initialState = {
  currentDog: null,
  loading: false,
  error: null
}

export default function dogReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DOG_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        currentDog: action.dog,
        loading: false
      }
    case FETCH_DOG_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;

  }
}
