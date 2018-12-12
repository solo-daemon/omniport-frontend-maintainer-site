import axios from "axios"

export const RECEIVE_TEAM_DATA = "RECEIVE_TEAM_DATA"
export const ERROR_OCCURED = "ERROR_OCCURED"

const requestTeamData = url => {
    return dispatch => {
        axios
            .get(`/api/maintainer_site/${url}`)
            .then(
                response => dispatch(receiveTeamData(url, response)),
                error => dispatch(errorOccured(url, error))
            )
    }
}

const receiveTeamData = (url, json) => ({
    type: RECEIVE_TEAM_DATA,
    data: json.data,
    url,
})

const errorOccured = (url, error) => ({
    type: ERROR_OCCURED,
    url,
    error,
})

export { requestTeamData }
