import { API_BASE_URL } from '../config.js'

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = () => ({
  type: FETCH_CAT_SUCCESS
})


// adopt cat

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST'
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS'
export const adoptCatSuccess = (cat) => ({
  type: ADOPT_CAT_SUCCESS,
  cat
})

export const ADOPT_CAT_FAILURE = 'ADOPT_CAT_FAILURE'
export const adoptCatError = () => ({
  type: ADOPT_CAT_FAILURE
})


export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/cat`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.json())
    .then((res) => {
      return dispatch(fetchCatSuccess(res));
    })
    .catch((err) => {
      return dispatch(fetchCatError(err));
    })
}

export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  return fetch(`${API_BASE_URL}/dogs`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      return dispatch(fetchCat())
    })
    .then((res) => {
      return dispatch(adoptCatSuccess(res))
    })
    .catch(err => {
      dispatch(adoptCatError(err))
    });
}

