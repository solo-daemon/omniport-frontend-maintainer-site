import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom"

import { connect } from "react-redux"
import { isBrowser } from "react-device-detect"
import { Loader } from "semantic-ui-react"
import { requestInfoData } from "../actions/apiInfoCall"
import { toggleSidebar } from "../actions/toggleSidebar"

import AppHeader from "../components/header/app-header"
import MainPage from "../components/main/main-page"
import Team from "../containers/team/teamPageLoader"
import TeamIndividualView from "./team/team-individual-view"
import AddMemberDetails from "./team/add-member-details"
import AddProjectDetails from "./projects/project-add"
import Blogs from "../containers/blog/blogPageLoader"
import Projects from "../containers/project/projectPageLoader"
import ProjectDetailView from "./projects/project-detail-view"
import Sidebar from "./sidebar"

import AppFooter from "../components/footer/app-footer"

import blocks from "../css/app.css"

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const URL1 = "location"
        const URL2 = "contact"
        const URL3 = "social"
        const URL4 = "maintainer_group"
        const URL5 = "projects"
        this.props.requestInfoData(URL1, URL2, URL3, URL4, URL5)
    }

    handleHide = () => {
        this.props.toggleSidebar(false, "sidebar-container-shrink")
    }

    handleShow = () => {
        this.props.toggleSidebar(true, "sidebar-container-expand")
    }

    render() {
        const { match } = this.props

        const { apiInfoData } = this.props

        const Switcher = () => (
            <Switch>
                <Route
                    path="/:url*"
                    exact
                    strict
                    render={props => (
                        <Redirect to={`${props.location.pathname}/`} />
                    )}
                />

                <Route
                    exact
                    path={`${match.path}`}
                    component={routeProps => (
                        <MainPage {...routeProps} {...this.props} />
                    )}
                />
                <Route path={`${match.path}blog`} component={Blogs} />
                <Route
                    exact
                    path={`${match.path}projects`}
                    component={Projects}
                />
                <Route exact path={`${match.path}team`} component={Team} />
                <Route
                    exact
                    path={`${match.path}projects/:slug`}
                    component={ProjectDetailView}
                />
                <Route
                    path={`${match.path}team/:handle`}
                    component={TeamIndividualView}
                />
                <Route
                    path={`${match.path}add_project_details`}
                    component={AddProjectDetails}
                />

                <Route
                    path={`${match.path}add_member_details`}
                    component={AddMemberDetails}
                />
            </Switch>
        )

        if (
            apiInfoData.locationLoaded &&
            apiInfoData.contactLoaded &&
            apiInfoData.socialLoaded &&
            apiInfoData.footerLoaded &&
            apiInfoData.projectLoaded
        ) {
            return (
                <div styleName="blocks.container">
                    <AppHeader
                        handleClick={this.handleShow}
                        onClick={this.handleHide}
                    />
                    {isBrowser ? (
                        <React.Fragment>
                            <div styleName="blocks.content-div">
                                <Switcher />
                            </div>
                            <AppFooter info={apiInfoData.footerData} />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <div
                                styleName="blocks.content-div-mobile"
                                onClick={this.handleHide}
                            >
                                <Switcher />
                            </div>
                            <Sidebar />
                            <AppFooter info={apiInfoData.footerData} />
                        </React.Fragment>
                    )}
                </div>
            )
        } else {
            return <Loader active />
        }
    }
}

const mapStateToProps = state => {
    return {
        apiInfoData: state.apiInfoData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestInfoData: (
            locationUrl,
            socialUrl,
            contactUrl,
            footerUrl,
            projectUrl
        ) => {
            dispatch(
                requestInfoData(
                    locationUrl,
                    socialUrl,
                    contactUrl,
                    footerUrl,
                    projectUrl
                )
            )
        },
        toggleSidebar: (visible, style) => {
            dispatch(toggleSidebar(visible, style))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
