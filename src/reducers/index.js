import { combineReducers } from "redux"
import apiData from "./apiData"
import apiLocationData from "./apiLocationData"
import apiContactData from "./apiContactData"
import apiSocialData from "./apiSocialData"

const rootReducers = combineReducers({
    apiData,
    apiLocationData,
    apiContactData,
    apiSocialData,
})

export default rootReducers
