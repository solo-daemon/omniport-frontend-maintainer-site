import React from "react"
import { Link } from "react-router-dom"
import { Grid, Segment } from "semantic-ui-react"

import styles from "../../../../css/sections/project/project-element.css"

const ProjectElement = ({ number, name, description, link }) => (
    <Grid.Column styleName="styles.element" mobile={16} tablet={8} computer={4}>
        <div styleName="styles.background">{number}</div>
        <Segment basic textAlign="right">
            <Link to={link} styleName="styles.link">
                <h2 styleName="styles.link-text">{name}</h2>
            </Link>
            <p>{description}</p>
        </Segment>
    </Grid.Column>
)

export default ProjectElement
