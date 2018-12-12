import React, { Component } from "react"
import { Card, Container, Loader } from "semantic-ui-react"

import TeamMember from "./team-member-card"

import styles from "../../css/team/team.css"

class Team extends Component {
    componentDidMount() {
        const URL = "active_maintainer_info"
        this.props.requestTeamData(URL)
    }

    render() {
        console.log(this.props.apiTeamData)
        if (this.props.apiTeamData.loaded) {
            return (
                <Container textAlign="center">
                    <Card.Group itemsPerRow={4} stackable>
                        {this.props.apiTeamData.data.map(info => (
                            <TeamMember info={info} key={info.handle} />
                        ))}
                    </Card.Group>
                </Container>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}

export default Team
