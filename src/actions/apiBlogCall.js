import axios from "axios"

export const REQUEST_BLOG_DATA = "REQUEST_BLOG_DATA"
export const RECEIVE_BLOG_DATA = "RECEIVE_BLOG_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

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

const receiveBlogData = (url, json) => ({
    type: RECEIVE_BLOG_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestBlogData }
