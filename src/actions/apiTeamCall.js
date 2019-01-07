import axios from "axios"

export const RECEIVE_TEAM_DATA = "RECEIVE_TEAM_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

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
    }
}

const receiveTeamData = (url, json1, json2) => ({
    type: RECEIVE_TEAM_DATA,
    data: json1.data,
    options: json2.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestTeamData }
