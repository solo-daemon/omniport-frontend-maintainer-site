import React from "react"
import { Container, Grid, Image, Segment, Button } from "semantic-ui-react"

import styles from "../../../../css/sections/blog/blog-section.css"

const blog1 = "Ken the ins and outs of life and moil at IMG."
const blog2 = "Find answers to the whats, the whys and the hows."

const BlogSection = () => (
    <div styleName="styles.container">
        <Container textAlign="center">
            <h1>Blogs</h1>
            <Grid>
                <Grid.Column width={8}>
                    <Image
                        src="http://img.channeli.in/static/images/img_website/landing/Blogs.png"
                        size="medium"
                    />
                </Grid.Column>
                <Grid.Column width={8} styleName="styles.text">
                    <p>{blog1}</p>
                    <p>{blog2}</p>
                </Grid.Column>
            </Grid>
            <Segment clearing padded basic>
                <Button basic color="black">
                    READ
                </Button>
            </Segment>
        </Container>
    </div>
)

export default BlogSection
