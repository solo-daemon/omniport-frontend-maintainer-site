import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Container, Image, Grid, Button, Segment } from "semantic-ui-react"

import ProjectElement from "./project-element"

import styles from "../../../../css/sections/project/project-main.css"
import common from "../../../../css/sections/common-styles.css"

const ProjectSection = ({ project }) => (
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
                {Object.keys(project).map((key, index) => (
                    <ProjectElement
                        name={project[key].title}
                        number={index + 1}
                        description={project[key].shortDescription}
                        key={project[key].slug}
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

export default ProjectSection
