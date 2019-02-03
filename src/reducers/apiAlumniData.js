import {
    RECEIVE_ALUMNI_DATA,
    ALUMNI_ERROR_OCCURED,
} from "../actions/apiAlumniCall"

const apiAlumniData = (
    state = { data: null, loaded: false, url: "" },
    action
) => {
    switch (action.type) {
        case RECEIVE_ALUMNI_DATA:
            return {
                ...state,
                data: action.data,
                url: action.url,
                loaded: true,
            }

        case ALUMNI_ERROR_OCCURED:
            return {
                ...state,
                url: action.url,
                error: action.error,
            }
        default:
            return state
    }
}

export default apiAlumniData
