import axios from "axios"

export const RECEIVE_BLOG_DATA = "RECEIVE_BLOG_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const requestBlogData = url => {
    return dispatch => {
        axios
            .all([
                axios.get(`/api/maintainer_site/${url}`),
                axios.get(`/api/maintainer_site/maintainer_group`),
            ])
            .then(
                axios.spread((blogRes, slugRes, error) => {
                    dispatch(receiveBlogData(url, blogRes, slugRes)),
                        dispatch(errorOccured(url, error))
                })
            )
    }
}

const receiveBlogData = (url, json1, json2) => ({
    type: RECEIVE_BLOG_DATA,
    data: json1.data,
    slug: json2.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestBlogData }
