import config from "../config.json"

export function urlAppBase() {
    return config.baseUrl
}
export function urlMainApp() {
    return "/api/maintainer_site/"
}

export function urlSocial() {
    return `${urlMainApp()}social/`
}
export function urlLocation() {
    return `${urlMainApp()}location/`
}
export function urlContact() {
    return `${urlMainApp()}contact/`
}
export function urlMaintainerGroup() {
    return `${urlMainApp()}maintainer_group/`
}
export function urlLoggedMaintainer() {
    return `${urlMainApp()}logged_maintainer/`
}
export function urlBlogs() {
    return `${urlMainApp()}blogs/`
}

export function urlProjects() {
    return `${urlMainApp()}projects/`
}
export function urlProjectsDetails(slug) {
    return `${urlProjects()}${slug}/`
}

export function urlTeam() {
    return `${urlMainApp()}active_maintainer_info/`
}
export function urlTeamDetails(slug) {
    return `${urlTeam()}${slug}/`
}

export function urlAlumni() {
    return `${urlMainApp()}inactive_maintainer_info/`
}
export function urlAlumniDetails(slug) {
    return `${urlAlumni()}${slug}/`
}

export function urlMaintainerProject(id) {
    return `${urlMainApp()}maintainer_project/${id}/`
}

export function urlSocialLink() {
    return `${urlMainApp()}social_link/`
}
