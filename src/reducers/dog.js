import {FETCH_DOG_SUCCESS, FETCH_DOG_REQUEST, FETCH_DOG_ERROR} from '../actions/dog.js';
const initialState = {
  currentDog: null,
  loading:false,
  error:null
}

export default function dogReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_DOG_REQUEST:
      return {
        ...state,
        loading:true
      };
    case FETCH_DOG_SUCCESS:
      return {
        ...state,
        currentDog: action.dog,
        loading:false
      }
    case FETCH_DOG_ERROR:
      return {
        ...state,
        error:action.error
      };


    default:
      return state;

  }
}
