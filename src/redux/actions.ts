import { Dispatch } from 'redux'
import {
  FETCH_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS_FULFILLED,
  FETCH_SEARCH_RESULTS_FAILED,
  SET_DETAIL_ITEM
} from './actionTypes'

export const fetchSearchResultsFulfilled = (payload: any) => {
  return {
    type: FETCH_SEARCH_RESULTS_FULFILLED,
    payload
  }
}

export const fetchSearchResultsFailed = (payload: any) => {
  return {
    type: FETCH_SEARCH_RESULTS_FAILED,
    payload
  }
}

export const fetchSearchResults = (searchTerm: string) => async (
  dispatch: Dispatch
) => {
  dispatch({ type: FETCH_SEARCH_RESULTS })

  try {
    await fetch(`https://api.github.com/search/repositories?q=${searchTerm}`, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network Error')
        }
        return response.json()
      })
      .then((data) => {
        const payload = {
          items: data.items,
          count: data.total_count
        }
        return dispatch(fetchSearchResultsFulfilled(payload))
      })
  } catch (e) {
    return dispatch(fetchSearchResultsFailed(e))
  }
}

export const setDetailItem = (item: any) => {
  return {
    type: SET_DETAIL_ITEM,
    payload: item
  }
}
