import React, { Component } from "react"
import { Container, Image, Grid, Button, Segment } from "semantic-ui-react"

import ProjectElement from "./project-element"

import styles from "../css/project-main.css"

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
            <Container styleName="styles.container" fluid>
                <Container>
                    <h1>Projects</h1>
                    <Image
                        src="http://img.channeli.in/static/images/img_website/landing/Projects.png"
                        size="medium"
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
                        <Button basic color="black">
                            VIEW MORE
                        </Button>
                    </Segment>
                </Container>
            </Container>
        )
    }
}

export default ProjectSection
