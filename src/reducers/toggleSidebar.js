import { TOGGLE_SIDEBAR } from "../actions/toggleSidebar"

const sidebarVisible = (
    state = { visible: false, style: "sidebar-container" },
    action
) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                visible: action.visible,
                style: action.style,
            }
        default:
            return state
    }
}

export default sidebarVisible
