import { API_BASE_URL } from '../config';

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS'
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = () => ({
  type: FETCH_DOG_SUCCESS
})

// adoptDog

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST'
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS'
export const adoptDogSuccess = (dog) => ({
  type: ADOPT_DOG_SUCCESS,
  dog
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'
export const adoptDogError = () => ({
  type: ADOPT_DOG_SUCCESS
})



export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/dogs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
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


export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  return fetch(`${API_BASE_URL}/dogs`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    return dispatch(fetchDog())
  })
  .then((res) => {
    return dispatch(adoptDogSuccess(res))
  })
  .catch(err => {
    dispatch(adoptDogError(err))
  });
}
