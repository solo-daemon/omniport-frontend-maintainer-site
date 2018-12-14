import { TOGGLE_SIDEBAR } from "../actions/toggleSidebar"

const sidebarVisible = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return !state
        default:
            return state
    }
}

export default sidebarVisible
