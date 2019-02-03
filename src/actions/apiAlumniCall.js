import axios from "axios"

export const RECEIVE_ALUMNI_DATA = "RECEIVE_ALUMNI_DATA"
export const ALUMNI_ERROR_OCCURED = "ALUMNI_ERROR_OCCURED"

const requestAlumniData = url => {
    return dispatch => {
        axios
            .all([
                axios.get(`/api/maintainer_site/${url}`),
                axios.options(`/api/maintainer_site/${url}`),
            ])
            .then(
                axios.spread((memberRes, optionsRes) => {
                    dispatch(receiveAlumniData(url, memberRes, optionsRes))
                })
            )
            .catch(error => {
                dispatch(errorOccured(url, error))
            })
    }
}

const receiveAlumniData = (url, json1, json2) => ({
    type: RECEIVE_ALUMNI_DATA,
    data: json1.data,
    options: json2.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ALUMNI_ERROR_OCCURED,
    url,
    error,
})

export { requestAlumniData }
