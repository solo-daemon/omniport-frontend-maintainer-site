import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { AppHeader, AppFooter, AppMain } from "formula_one";
import MainPage from "./main-page"
import Team from "./team";
import Blogs from "./blog";

import main from "formula_one/src/css/app.css";
import blocks from "../css/app.css";

class App extends Component {
  render() {
    const creators = [
      {
        name: "Dhruv Bhanushali",
        role: "Mentor"
      },
      {
        name: "Praduman Goyal",
        role: "Frontend Developer"
      }
    ];
    const { match } = this.props;
    
    return (
      <div styleName="main.app">
        <AppHeader
          appName="Maintainer Site"
          appLogo={false}
          appLink={`http://${window.location.host}${match.path}`}
          userDropdown
        />


        <div styleName="main.app-main">
          <Container styleName="blocks.content-div">
            <Switch>
              {/* <Route exact path={`${match.path}`} component={Team} /> */}
              <Route exact path={`${match.path}`} component={MainPage} />
              <Route path={`${match.path}team/`} component={Team} />
              <Route path={`${match.path}blog/`} component={Blogs} />
            </Switch>
          </Container>
        </div>
        <AppFooter creators={creators} />
      </div>
    );
  }
}

export default connect(
  null,
  null
)(App);
