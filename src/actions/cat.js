import {API_BASE_URL} from '../config.js'

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type:FETCH_CAT_REQUEST
})

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = (cat) => ({
  type:FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_ERROR= 'FETCH_CAT_ERROR'
export const fetchCatError = () => ({
  type:FETCH_CAT_SUCCESS
})

export const fetchCat = () => dispatch =>{
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/cat`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
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
