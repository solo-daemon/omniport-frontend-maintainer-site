import {
    REQUEST_LOCATION_DATA,
    RECEIVE_LOCATION_DATA,
    ERROR_OCCURED,
} from "../actions/apiLocationCall"

const apiLocationData = (
    state = { data: null, loaded: false, url: "" },
    action
) => {
    switch (action.type) {
        case REQUEST_LOCATION_DATA:
            return {
                ...state,
                url: action.url,
            }
        case RECEIVE_LOCATION_DATA:
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

export default apiLocationData
