import {API_BASE_URL} from '..config.js'

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type:FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = (cat) => ({
  type:FETCH_DOG_SUCCESS,
  cat
})

export const FETCH_DOG_ERROR= 'FETCH_DOG_ERROR'
export const fetchDogError = () => ({
  type:FETCH_DOG_SUCCESS
})

export const fetchDog = () => dispatch =>{
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/cat`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then((res) => res.json())
  .then((res) => {
    return dispatch(fetchDogSuccess(res));
  })
  .catch((err) => {
    return dispatch(fetchDogError(err));
  })
}
