import React from 'react'
import { Card } from 'semantic-ui-react'

import { backgroundImageStyle } from '../../consts'

import styles from '../../css/team/team-member.css'

const TeamMember = ({ info, roleOptions, designationOptions, linkOptions }) => {
  return (
    <Card raised>
      <a href={info.handle}>
        <div style={backgroundImageStyle(info.normieImage)} />
      </a>
      <Card.Content href={info.handle}>
        <Card.Header styleName="styles.text-break">
          {info.maintainer.person.fullName}
        </Card.Header>
        <br />
        <Card.Description>
          {roleOptions.map(
            role =>
              info.maintainer.role === role.value && (
                <React.Fragment
                  key={role.displayName}
                >{`${role.displayName} | `}</React.Fragment>
              )
          )}
          {designationOptions.map(
            designation =>
              info.maintainer.designation === designation.value && (
                <React.Fragment key={designation.displayName}>
                  {designation.displayName}
                </React.Fragment>
              )
          )}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default TeamMember
