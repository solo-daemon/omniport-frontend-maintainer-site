import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom"
import { connect } from "react-redux"

import MainPage from "../containers/main/mainPageLoader"
import Team from "./team/team-page"
import TeamIndividualView from "./team/team-individual-view"
import Blogs from "../containers/blog/blogPageLoader"
import Projects from "../containers/project/projectPageLoader"
import ProjectDetailView from "./projects/project-detail-view"
import blocks from "../css/app.css"

class App extends Component {
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

        return (
            <div styleName="blocks.content-div">
                <Switch>
                    <Route
                        path="/:url*"
                        exact
                        strict
                        render={props => (
                            <Redirect to={`${props.location.pathname}/`} />
                        )}
                    />

                    <Route exact path={`${match.path}`} component={MainPage} />
                    <Route path={`${match.path}team`} component={Team} />
                    <Route path={`${match.path}blogs`} component={Blogs} />
                    <Route
                        exact
                        path={`${match.path}projects`}
                        component={Projects}
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
            </div>
        )
    }
}

export default connect(
    null,
    null
)(App)
