import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom"

import { connect } from "react-redux"
import { Loader } from "semantic-ui-react"
import { requestInfoData } from "../actions/apiInfoCall"

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
    componentDidMount() {
        const URL1 = "location"
        const URL2 = "contact"
        const URL3 = "social"
        const URL4 = "maintainer_group"
        const URL5 = "projects"
        this.props.requestInfoData(URL1, URL2, URL3, URL4, URL5)
    }

    render() {
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

        if (
            apiInfoData.locationLoaded &&
            apiInfoData.contactLoaded &&
            apiInfoData.socialLoaded &&
            apiInfoData.footerLoaded &&
            apiInfoData.projectLoaded
        ) {
            return (
                <div styleName="blocks.container">
                    <AppHeader />
                    <div styleName="blocks.content-div">
                        <Switch>
                            <Route
                                path="/:url*"
                                exact
                                strict
                                render={props => (
                                    <Redirect
                                        to={`${props.location.pathname}/`}
                                    />
                                )}
                            />

                            <Route
                                exact
                                path={`${match.path}`}
                                component={routeProps => (
                                    <MainPage {...routeProps} {...this.props} />
                                )}
                            />
                            <Route
                                path={`${match.path}blogs`}
                                component={Blogs}
                            />
                            <Route
                                exact
                                path={`${match.path}projects`}
                                component={Projects}
                            />
                            <Route
                                path={`${match.path}team`}
                                component={Team}
                            />
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
                        <AppFooter info={apiInfoData.footerData} />
                    </div>
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
