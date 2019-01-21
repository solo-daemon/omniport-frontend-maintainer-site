import axios from "axios"

export const IS_MAINTAINER = "IS_MAINTAINER"
export const AUTH_ERROR_OCCURED = "AUTH_ERROR_OCCURED"

const API_URL = "/api/maintainer_site/"

export const requestMaintainerAccess = url => {
    return dispatch => {
        axios
            .get(`${API_URL}${url}`)
            .then(
                response => dispatch(receivePermission(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receivePermission = (url, response) => ({
    type: IS_MAINTAINER,
    auth: Boolean(response.data),
    url,
})

const errorOccured = (url, error) => ({
    type: AUTH_ERROR_OCCURED,
    auth: false,
    url,
    error,
})
