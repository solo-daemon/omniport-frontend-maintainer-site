import axios from "axios"

export const REQUEST_CONTACT_DATA = "REQUEST_CONTACT_DATA"
export const RECEIVE_CONTACT_DATA = "RECEIVE_CONTACT_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const requestContactData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveContactData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveContactData = (url, json) => ({
    type: RECEIVE_CONTACT_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestContactData }
