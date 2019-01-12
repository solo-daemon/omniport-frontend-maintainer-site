import React from "react"
import { Card, Image } from "semantic-ui-react"

import styles from "../../css/team/team-member.css"

const TeamMember = ({ info, roleOptions, designationOptions }) => {
    return (
        <Card raised href={info.handle}>
            <Image src={info.normieImage} />
            <Card.Content>
                <Card.Header styleName="styles.text-break">
                    {info.maintainer.person.fullName}
                </Card.Header>
                <br />
                <Card.Description>
                    {roleOptions.map(
                        role =>
                            info.maintainer.role === role.value && (
                                <React.Fragment>{`${
                                    role.displayName
                                } | `}</React.Fragment>
                            )
                    )}
                    {designationOptions.map(
                        designation =>
                            info.maintainer.designation ===
                                designation.value && (
                                <React.Fragment>
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
