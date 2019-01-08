import {
    RECEIVE_BLOG_DATA,
    RECEIVE_MEDIUM_SLUG,
    ERROR_OCCURED,
} from "../actions/apiBlogCall"

const apiBlogData = (
    state = { data: null, loaded: false, url: "", slug: "" },
    action
) => {
    switch (action.type) {
        case RECEIVE_BLOG_DATA:
            return {
                ...state,
                data: action.data,
                url: action.url,
                loaded: true,
                slug: action.slug,
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
