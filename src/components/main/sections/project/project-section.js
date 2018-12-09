import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Container, Image, Grid, Button, Segment } from "semantic-ui-react"

import ProjectElement from "./project-element"

import styles from "../../../../css/sections/project/project-main.css"
import common from "../../../../css/sections/common-styles.css"

class ProjectSection extends Component {
    render() {
        const project = [
            {
                number: "1",
                name: "Oauth",
                description:
                    "OAuth is simply a secure authoriation protocol that allows applications to access the channel i user data without exposing their password. ",
            },
            {
                number: "2",
                name: "Lectut",
                description:
                    "Developed for the R-Land junta to help them carve their path to success.",
            },
            {
                number: "3",
                name: "NoticeBoard",
                description:
                    "The e-NoticeBoard of IIT Roorkee. Also available on Android.",
            },
            {
                number: "4",
                name: "NoticeBoard",
                description:
                    "The e-NoticeBoard of IIT Roorkee. Also available on Android.",
            },
        ]
        return (
            <div styleName="styles.container">
                <Container textAlign="center">
                    <h1 styleName="common.header">Projects</h1>
                    <Image
                        src="http://img.channeli.in/static/images/img_website/landing/Projects.png"
                        size="medium"
                        styleName="styles.image"
                        centered
                    />
                    <Grid padded>
                        {project.map(info => (
                            <ProjectElement
                                name={info.name}
                                number={info.number}
                                description={info.description}
                            />
                        ))}
                    </Grid>
                    <Segment clearing padded basic>
                        <Link to="./projects">
                            <div styleName="common.button">View more</div>
                        </Link>
                    </Segment>
                </Container>
            </div>
        )
    }
}

export default ProjectSection
