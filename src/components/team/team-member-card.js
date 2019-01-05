import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import styles from "../../css/team/team-member.css"
const TeamMember = ({ info }) => {
    return (
        <Card raised href={info.handle}>
            <Image src={info.normieImage} />
            <Card.Content>
                <Card.Header>{info.maintainer.person.fullName}</Card.Header>
                <br />
                <Card.Description>
                    {info.maintainer.role}, {info.designation}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default TeamMember
