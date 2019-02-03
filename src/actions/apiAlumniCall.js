import axios from "axios"

export const RECEIVE_ALUMNI_DATA = "RECEIVE_ALUMNI_DATA"
export const ALUMNI_ERROR_OCCURED = "ALUMNI_ERROR_OCCURED"

const requestAlumniData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveAlumniData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveAlumniData = (url, json) => ({
    type: RECEIVE_ALUMNI_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ALUMNI_ERROR_OCCURED,
    url,
    error,
})

export { requestAlumniData }
