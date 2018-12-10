import axios from "axios"

export const REQUEST_SOCIAL_DATA = "REQUEST_SOCIAL_DATA"
export const RECEIVE_SOCIAL_DATA = "RECEIVE_SOCIAL_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const requestSocialData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveSocialData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveSocialData = (url, json) => ({
    type: RECEIVE_SOCIAL_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestSocialData }
