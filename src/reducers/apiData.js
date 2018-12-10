import { REQUEST_DATA, RECEIVE_DATA, ERROR_OCCURED } from "../actions/apiCalls"

const apiData = (state = { data: [], loaded: false, url: "" }, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                url: action.url,
            }
        case RECEIVE_DATA:
            return {
                ...state,
                data: action.data,
                url: action.url,
                loaded: true,
            }
        case ERROR_OCCURED:
            return {
                ...state,
                url: action.url,
                error: action.error,
            }
        default:
            return state
    }
}

export default apiData
