import {
  FETCH_SEARCH_RESULTS_FULFILLED,
  FETCH_SEARCH_RESULTS,
  FETCH_SEARCH_RESULTS_FAILED,
  SET_DETAIL_ITEM
} from './actionTypes'

// only typing the relevant properties
interface SearchResult {
  owner: {
    login: string
  }
  stargazers_count: number
  language: string | null
  name: string
  description: string
}
interface InitialState {
  isLoading: boolean
  searchList: SearchResult[]
  error?: Error
  detailItem?: Record<string, any>
  count?: number
}

export const initialState: InitialState = {
  isLoading: false,
  searchList: []
}

const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS: {
      return {
        ...state,
        error: null,
        count: null,
        isLoading: true
      }
    }
    case FETCH_SEARCH_RESULTS_FULFILLED: {
      return {
        isLoading: false,
        searchList: action.payload.items,
        count: action.payload.count
      }
    }
    case FETCH_SEARCH_RESULTS_FAILED: {
      return {
        isLoading: false,
        error: { message: action.payload }
      }
    }
    case SET_DETAIL_ITEM: {
      return {
        ...state,
        detailItem: action.payload
      }
    }
    default:
      return state
  }
}
export default reducer
