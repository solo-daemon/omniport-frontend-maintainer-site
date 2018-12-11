import {
    REQUEST_BLOG_DATA,
    RECEIVE_BLOG_DATA,
    ERROR_OCCURED,
} from "../actions/apiBlogCall"

const apiBlogData = (
    state = { data: null, loaded: false, url: "" },
    action
) => {
    switch (action.type) {
        case REQUEST_BLOG_DATA:
            return {
                ...state,
                url: action.url,
            }
        case RECEIVE_BLOG_DATA:
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

export default apiBlogData
