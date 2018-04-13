import {FETCH_DOG_SUCCESS, FETCH_DOG_REQUEST, FETCH_DOG_ERROR} from '../actions/dog.js';
// dummy state
// const initialState = {
//   currentDog:{
//     imageURL: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoihttps://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi',
//     imageDescription: 'A dog tilting it\'s head out of curiosity',
//     name: 'Jack',
//     sex: 'Female',
//     age: 5,
//     breed: 'Australian Shepard',
//     story: 'Rescued from an earthquake.'
//   },
//   loading:false,
//   error:null,
// }
// real state
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
