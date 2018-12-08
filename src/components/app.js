import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"

import MainPage from "./main/main-page"
import Team from "./team/team-page"
import Blogs from "./blog/blog-page"
import Projects from "./projects/projects-page"

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
                    <Route exact path={`${match.path}`} component={MainPage} />
                    <Route path={`${match.path}team/`} component={Team} />
                    <Route path={`${match.path}blog/`} component={Blogs} />
                    <Route
                        path={`${match.path}projects/`}
                        component={Projects}
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
