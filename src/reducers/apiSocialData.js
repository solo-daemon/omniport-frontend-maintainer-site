import {
    REQUEST_SOCIAL_DATA,
    RECEIVE_SOCIAL_DATA,
    ERROR_OCCURED,
} from "../actions/apiSocialCall"

const apiSocialData = (
    state = { data: null, loaded: false, url: "" },
    action
) => {
    switch (action.type) {
        case REQUEST_SOCIAL_DATA:
            return {
                ...state,
                url: action.url,
            }
        case RECEIVE_SOCIAL_DATA:
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

export default apiSocialData
