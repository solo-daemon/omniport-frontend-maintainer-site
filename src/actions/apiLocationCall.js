import axios from "axios"

export const REQUEST_LOCATION_DATA = "REQUEST_LOCATION_DATA"
export const RECEIVE_LOCATION_DATA = "RECEIVE_LOCATION_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const requestLocationData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveLocationData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveLocationData = (url, json) => ({
    type: RECEIVE_LOCATION_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestLocationData }
