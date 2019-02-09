import React, { Component } from "react"
import { Card, Container, Segment, Icon, Loader } from "semantic-ui-react"
import BlogDetail from "./blog-post-card"

import common from "../../css/page-common-styles.css"

import { urlBlogs } from "../../urls"

const MEDIUM_URL = "https://medium.com/"
class Blog extends Component {
    componentDidMount() {
        const URL = urlBlogs()
        this.props.requestBlogData(URL)
    }

    render() {
        if (this.props.apiBlogData.loaded) {
            let MEDIUM_PUBLICATION = this.props.apiInfoData.footerData
                .mediumSlug
            return (
                <Container styleName="common.margin">
                    <Card.Group itemsPerRow={3} stackable doubling>
                        {this.props.apiBlogData.data.map(info => (
                            <BlogDetail
                                info={info}
                                key={info.id}
                                pub={MEDIUM_PUBLICATION}
                            />
                        ))}
                    </Card.Group>
                    <Segment basic padded textAlign="center">
                        <Icon
                            name="medium"
                            size="large"
                            link={true}
                            onClick={() =>
                                window.open(
                                    MEDIUM_URL + MEDIUM_PUBLICATION,
                                    "_blank"
                                )
                            }
                        />
                    </Segment>
                </Container>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}
export default Blog
