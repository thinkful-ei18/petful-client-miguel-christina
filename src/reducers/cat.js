import {FETCH_CAT_SUCCESS, FETCH_CAT_REQUEST, FETCH_CAT_ERROR} from '../actions/cat.js';

const initialState = {
  currentCat:{
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_1cvH240d8UYYYJgY8d-Eh9BJZkr_EyqDAlkfjU05eikqXxdWg',
    imageDescription: 'White and Brown cat frowning',
    name: 'Smiles',
    sex: 'Male',
    age: 4,
    breed: 'Common Shorthair',
    story: 'Too awesome for last owner'
  },
  loading:false,
  error:null,
}

export default function catReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_CAT_SUCCESS:
      return null;

    default:
      return state;

  }
}
