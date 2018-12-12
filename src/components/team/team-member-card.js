import React from "react"
import { Card, Icon, Image } from "semantic-ui-react"
import styles from "../../css/team/team-member.css"
const TeamMember = ({ info }) => {
    return (
        <Card raised>
            <Image src={info.normieImage} />
            <Card.Content>
                <Card.Header>{info.fullName.fullName}</Card.Header>
                <br />
                <Card.Description>
                    {info.socialInformation.map(profile =>
                        profile.links.map(link => (
                            <Icon
                                name={link.siteName.toLowerCase()}
                                size="large"
                                link
                                onClick={() => window.open(link.url, "__blank")}
                                key={link.siteName}
                            />
                        ))
                    )}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default TeamMember
