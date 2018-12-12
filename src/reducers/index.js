import { combineReducers } from "redux"
import apiBlogData from "./apiBlogData"
import apiProjectData from "./apiProjectData"
import apiTeamData from "./apiTeamData"
import apiInfoData from "./apiInfoData"

const rootReducers = combineReducers({
    apiBlogData,
    apiProjectData,
    apiTeamData,
    apiInfoData,
})

export default rootReducers
