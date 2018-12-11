import axios from "axios"

export const REQUEST_DATA = "REQUEST_DATA"
export const RECEIVE_DATA = "RECEIVE_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const requestData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveData = (url, json) => ({
    type: RECEIVE_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestData }
