import React, { Component } from 'react'
import { Card, Container, Loader, Segment } from 'semantic-ui-react'

import TeamMember from './team-member'
import { urlTeam } from '../../urls'

import styles from '../../css/team/team.css'
import common from '../../css/page-common-styles.css'

class Team extends Component {
  componentDidMount() {
    const URL = urlTeam()
    this.props.requestTeamData(URL)
  }

  render() {
    const roleOptions = this.props.apiTeamData.loaded
      ? this.props.apiTeamData.options.actions.POST.maintainer.children.role
          .choices
      : []
    const designationOptions = this.props.apiTeamData.loaded
      ? this.props.apiTeamData.options.actions.POST.maintainer.children
          .designation.choices
      : []
    // const linkOptions = this.props.apiTeamData.loaded
    //   ? this.props.apiTeamData.options.actions.POST.socialInformation.child
    //       .children.links.child.children.site.choices
    //   : []

    if (this.props.apiTeamData.loaded) {
      return (
        <React.Fragment>
          <Container textAlign="center" styleName="common.margin">
            <Card.Group itemsPerRow={4} stackable>
              {this.props.apiTeamData.data.map(info => (
                <TeamMember
                  info={info}
                  key={info.handle}
                  roleOptions={roleOptions}
                  designationOptions={designationOptions}
                  // linkOptions={linkOptions}
                />
              ))}
            </Card.Group>
          </Container>
          <Segment padded basic />
        </React.Fragment>
      )
    } else {
      return <Loader active size="large" />
    }
  }
}

export default Team
