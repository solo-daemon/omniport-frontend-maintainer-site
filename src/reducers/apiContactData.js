import {
    REQUEST_CONTACT_DATA,
    RECEIVE_CONTACT_DATA,
    ERROR_OCCURED,
} from "../actions/apiContactCall"

const apiContactData = (
    state = { data: null, loaded: false, url: "" },
    action
) => {
    switch (action.type) {
        case REQUEST_CONTACT_DATA:
            return {
                ...state,
                url: action.url,
            }
        case RECEIVE_CONTACT_DATA:
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

export default apiContactData
