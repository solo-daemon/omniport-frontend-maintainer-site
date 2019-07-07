import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
import { Header, Segment, Container, Loader } from 'semantic-ui-react'

import NoMatch from '../404/404'

import common from '../../css/page-common-styles.css'
import styles from '../../css/projects/project-detail.css'

class ProjectDetailView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      projects: [],
      error: false,
    }
  }
  componentDidMount() {
    const { slug } = this.props.match.params
    const URL = `/api/maintainer_site/projects/${slug}`

    axios
      .get(URL)
      .then(res => {
        this.setState(
          {
            loaded: true,
            projects: res.data,
          },
          () => {}
        )
      })
      .catch(error => {
        this.setState({
          error: <Route component={NoMatch} />,
        })
      })
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <Container styleName="common.margin">
            <Header as="h1" styleName="styles.fonts">
              {this.state.projects.title}
            </Header>

            <Segment basic compact>
              <div
                align="left"
                dangerouslySetInnerHTML={{
                  __html: this.state.projects.longDescription,
                }}
              />
            </Segment>
            <Segment basic padded />
          </Container>
        </div>
      )
    } else if (this.state.error) {
      return this.state.error
    } else {
      return <Loader active size="large" />
    }
  }
}
export default ProjectDetailView
