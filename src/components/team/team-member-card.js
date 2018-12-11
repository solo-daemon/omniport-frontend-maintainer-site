import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import styles from "../../css/team/team-member.css"
const TeamMember = ({ info }) => {
    return (
        <Card raised>
            <Image src={info.image} />
            <Card.Content>
                <Card.Header>{info.name}</Card.Header>
                <br />
                <Card.Description>
                    {info.social.map(profile => (
                        <Icon
                            name={profile.name.toLowerCase()}
                            size="large"
                            link
                            onClick={() => window.open(profile.url, "__blank")}
                        />
                    ))}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default TeamMember
