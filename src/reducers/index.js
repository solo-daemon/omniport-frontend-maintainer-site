import { combineReducers } from "redux"
import apiBlogData from "./apiBlogData"
import apiProjectData from "./apiProjectData"
import apiTeamData from "./apiTeamData"
import apiInfoData from "./apiInfoData"
import sidebarVisible from "./toggleSidebar"

const rootReducers = combineReducers({
    apiBlogData,
    apiProjectData,
    apiTeamData,
    apiInfoData,
    sidebarVisible,
})

export default rootReducers
