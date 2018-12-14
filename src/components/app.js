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
import {
    Button,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from "semantic-ui-react"
import { requestInfoData } from "../actions/apiInfoCall"
import { toggleSidebar } from "../actions/toggleSidebar"

import AppHeader from "../components/header/app-header"
import MainPage from "../components/main/main-page"
import Team from "../containers/team/teamPageLoader"
import TeamIndividualView from "./team/team-individual-view"
import Blogs from "../containers/blog/blogPageLoader"
import Projects from "../containers/project/projectPageLoader"
import ProjectDetailView from "./projects/project-detail-view"
import AppFooter from "../components/footer/app-footer"

import blocks from "../css/app.css"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarStyle: "sidebar-container",
        }
    }

    componentDidMount() {
        const URL1 = "location"
        const URL2 = "contact"
        const URL3 = "social"
        const URL4 = "maintainer_group"
        const URL5 = "projects"
        this.props.requestInfoData(URL1, URL2, URL3, URL4, URL5)
        if (this.props.sidebarVisible) {
            this.setState({
                sidebarStyle: "sidebar-container-hide",
            })
        }
    }

    handleToggle = () => {
        this.props.toggleSidebar()
    }

    render() {
        console.log(this.props.sidebarVisible)
        const creators = [
            {
                name: "Aman Sharma",
                role: "Full Stack Developer",
            },
            {
                name: "Harshit Khetan",
                role: "Full Stack Developer",
            },
        ]
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
                <Route path={`${match.path}blogs`} component={Blogs} />
                <Route
                    exact
                    path={`${match.path}projects`}
                    component={Projects}
                />
                <Route path={`${match.path}team`} component={Team} />
                <Route
                    exact
                    path={`${match.path}projects/:slug`}
                    component={ProjectDetailView}
                />
                <Route
                    path={`${match.path}dhruv`}
                    component={TeamIndividualView}
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
                        handleClick={this.props.toggleSidebar}
                        visible={this.props.sidebarVisible}
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
                            {this.props.sidebarVisible && (
                                <div
                                    styleName={`blocks.${
                                        this.state.sidebarStyle
                                    }`}
                                >
                                    <div styleName="blocks.sidebar">
                                        <button styleName="blocks.sidebar-button">
                                            Blog
                                        </button>
                                        <button styleName="blocks.sidebar-button">
                                            Projects
                                        </button>
                                        <button styleName="blocks.sidebar-button">
                                            Team
                                        </button>
                                    </div>
                                </div>
                            )}
                            <div
                                styleName="blocks.content-div-mobile"
                                onClick={this.handleToggle}
                            >
                                <Switcher />
                            </div>
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
        sidebarVisible: state.sidebarVisible,
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
        toggleSidebar: () => {
            dispatch(toggleSidebar())
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
