import axios from "axios"

export const REQUEST_PROJECT_DATA = "REQUEST_PROJECT_DATA"
export const RECEIVE_PROJECT_DATA = "RECEIVE_PROJECT_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const requestProjectData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveProjectData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveProjectData = (url, json) => ({
    type: RECEIVE_PROJECT_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestProjectData }
