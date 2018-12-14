import React, { Component } from "react"
import { Card, Container, Segment, Icon, Loader } from "semantic-ui-react"
import BlogDetail from "./blog-post-card"

import styles from "../../css/insert-it.css"
import common from "../../css/page-common-styles.css"

const MEDIUM_URL = "https://medium.com/"
const MEDIUM_PUBLICATION = "img-iit-roorkee"

class Blogs extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const URL = "blogs"
        this.props.requestBlogData(URL)
    }

    render() {
        console.log(this.props.apiBlogData)
        if (this.props.apiBlogData.loaded) {
            return (
                <Container styleName="common.margin">
                    <Card.Group
                        itemsPerRow={3}
                        stackable
                        doubling
                        styleName="styles.insert-it"
                    >
                        {this.props.apiBlogData.data.map(info => (
                            <BlogDetail info={info} key={info.id} />
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
export default Blogs
