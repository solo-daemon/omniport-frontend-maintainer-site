import axios from "axios"

export const RECEIVE_BLOG_DATA = "RECEIVE_BLOG_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const API_URL = "/api/maintainer_site/"

const requestBlogData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveBlogData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveBlogData = (url, json1, json2) => ({
    type: RECEIVE_BLOG_DATA,
    data: json1.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestBlogData }
