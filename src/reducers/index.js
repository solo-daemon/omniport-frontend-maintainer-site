import { combineReducers } from "redux"
import apiBlogData from "./apiBlogData"
import apiProjectData from "./apiProjectData"
import apiInfoData from "./apiInfoData"

const rootReducers = combineReducers({
    apiBlogData,
    apiProjectData,
    apiInfoData,
})

export default rootReducers
