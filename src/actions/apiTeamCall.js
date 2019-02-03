import axios from "axios"

export const RECEIVE_TEAM_DATA = "RECEIVE_TEAM_DATA"
export const TEAM_ERROR_OCCURED = "TEAM_ERROR_OCCURED"

const requestTeamData = url => {
    return dispatch => {
        axios
            .all([
                axios.get(`/api/maintainer_site/${url}`),
                axios.options(`/api/maintainer_site/${url}`),
            ])
            .then(
                axios.spread((memberRes, optionsRes) => {
                    dispatch(receiveTeamData(url, memberRes, optionsRes))
                })
            )
            .catch(error => {
                dispatch(errorOccured(url, error))
            })
    }
}

const receiveTeamData = (url, json1, json2) => ({
    type: RECEIVE_TEAM_DATA,
    data: json1.data,
    options: json2.data,
    url,
})

const errorOccured = (url, error) => ({
    type: TEAM_ERROR_OCCURED,
    url,
    error,
})

export { requestTeamData }
