import React, { Component } from "react"

import { Card, Header, Icon, Segment, List, Reveal } from "semantic-ui-react"
import styles from "../../css/team/hobbies-card.css"
import dev from "../../css/team/tech-skills-card.css"
import axios from "axios"

class TechSkillsCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const coverIcon = this.props.coverIcon
        const array = this.props.array
        const message = this.props.message

        return (
            <Card raised>
                <Reveal animated="move up" stylename="styles.revealHeight">
                    <Reveal.Content visible styleName="styles.reveal">
                        <Segment basic padded styleName="styles.visible">
                            <Icon name={coverIcon} size="huge" />
                        </Segment>
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Segment basic padded>
                            <Header as="h1">{message}</Header>
                            <List>
                                {array.map((info, index) => {
                                    var icon = info.toLowerCase()
                                    icon = icon.replace(/\s/g, "")
                                    return (
                                        <List.Item key={index}>
                                            <span>
                                                <img
                                                    height="20"
                                                    width="20"
                                                    src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${icon}.svg`}
                                                />{" "}
                                                {info}
                                            </span>
                                        </List.Item>
                                    )
                                })}
                            </List>
                        </Segment>
                    </Reveal.Content>
                </Reveal>
            </Card>
        )
    }
}

export default TechSkillsCard
