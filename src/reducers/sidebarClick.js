import { TOGGLE_SIDEBAR, NAV_MOBILE_TITLE } from "../actions/sidebarClick"

const PATHNAME = "/maintainer_site/"

const sidebarVisible = (
    state = { visible: false, style: "sidebar-container", name: "" },
    action
) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                visible: action.visible,
                style: action.style,
            }
        case NAV_MOBILE_TITLE:
            return {
                ...state,
                name: action.name,
            }
        default:
            let name = action.name

            if (window.location.pathname === `${PATHNAME}`) {
                name = ""
            } else if (window.location.pathname === `${PATHNAME}blog/`) {
                name = "blog"
            } else if (window.location.pathname === `${PATHNAME}projects/`) {
                name = "projects"
            } else if (window.location.pathname === `${PATHNAME}team/`) {
                name = "team"
            } else if (window.location.pathname === `${PATHNAME}alumni/`) {
                name = "alumni"
            } else if (
                window.location.pathname === `${PATHNAME}add_member_details/`
            ) {
                name = "add member details"
            } else if (
                window.location.pathname === `${PATHNAME}add_project_details/`
            ) {
                name = "add project details"
            }

            return {
                ...state,
                name: name,
            }
    }
}

export default sidebarVisible
