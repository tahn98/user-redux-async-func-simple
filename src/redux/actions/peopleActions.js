import { FETCHING_PEOPLE_FAILURE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_REQUEST } from './types.js'

export const fetchingPeopleRequest = () => {
  return {
    type: FETCHING_PEOPLE_REQUEST
  }
}

export const fetchingPeopleSuccess = (json) => {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    payload: json
  }
}

export const fetchingPeopleFailure = (error) => {
  return {
    type: FETCHING_PEOPLE_FAILURE,
    payload: error
  }
}

export const fetchPeople = () => {
  return async dispatch => {
    dispatch(fetchingPeopleRequest)
    try {
      let response = await fetch("https://randomuser.me/api?results=15")
      let json = await response.json()
      dispatch(fetchingPeopleSuccess(json.results))
    } catch (e) {
      dispatch(fetchingPeopleFailure(e))
    }
  }
}