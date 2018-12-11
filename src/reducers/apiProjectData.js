import {
    REQUEST_PROJECT_DATA,
    RECEIVE_PROJECT_DATA,
    ERROR_OCCURED,
} from "../actions/apiProjectCall"

const apiProjectData = (
    state = { data: null, loaded: false, url: "" },
    action
) => {
    switch (action.type) {
        case REQUEST_PROJECT_DATA:
            return {
                ...state,
                url: action.url,
            }
        case RECEIVE_PROJECT_DATA:
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

export default apiProjectData
