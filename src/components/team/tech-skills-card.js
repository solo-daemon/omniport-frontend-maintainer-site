import React, { Component } from "react"

import { Card, Header, Icon, Segment, List, Reveal } from "semantic-ui-react"
import styles from "../../css/team/hobbies-card.css"
import dev from "../../css/team/tech-skills-card.css"
import axios from "axios"

class TechSkillsCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            devIcons: [],
        }
    }
    componentDidMount() {
        const URL = `/api/maintainer_site/tech_skills`
        axios.get(URL).then(res => {
            this.setState({ devIcons: res.data })
        })
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
                                    var label = ""
                                    var newArray = _.map(
                                        this.state.devIcons,
                                        function(item) {
                                            if (item.value == info) {
                                                label = item.label
                                            }
                                        }
                                    )
                                    return (
                                        <List.Item key={index}>
                                            <span>
                                                <i
                                                    className={label.className}
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
