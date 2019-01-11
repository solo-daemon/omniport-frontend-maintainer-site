import React from "react"
import { Link } from "react-router-dom"
import { Container, Grid, Image, Segment } from "semantic-ui-react"

import styles from "../../../../css/sections/blog/blog-section.css"
import common from "../../../../css/sections/common-styles.css"

const blog1 = "Ken the ins and outs of life and moil at IMG."
const blog2 = "Find answers to all your whats, whys and hows."

const BlogSection = () => (
    <div styleName="styles.container">
        <Container textAlign="center">
            <h1 styleName="common.header">Blogs</h1>
            <Grid verticalAlign="middle" centered stackable padded>
                <Grid.Column width={8} textAlign="center">
                    <Image
                        src="/static/maintainer_site/blog.png"
                        size="medium"
                        inline
                    />
                </Grid.Column>
                <Grid.Column width={8} textAlign="center">
                    <p>
                        {blog1}
                        <br />
                        {blog2}
                    </p>
                </Grid.Column>
            </Grid>
            <Segment clearing padded basic>
                <Link to="./blog">
                    <div styleName="common.button">Read</div>
                </Link>
            </Segment>
        </Container>
    </div>
)

export default BlogSection
