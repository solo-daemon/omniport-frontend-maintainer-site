import React from "react"
import { Grid, Segment } from "semantic-ui-react"

import styles from "../css/project-main.css"

const ProjectElement = ({ number, name, description }) => (
    <Grid.Column styleName="styles.element" mobile={16} tablet={8} computer={4}>
        <div styleName="styles.background">{number}</div>
        <Segment basic textAlign="right">
            <h2>{name}</h2>
            <p>{description}</p>
        </Segment>
    </Grid.Column>
)

export default ProjectElement
