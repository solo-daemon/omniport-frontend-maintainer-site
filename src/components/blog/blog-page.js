import React, { Component } from "react"
import axios from "axios"
import { Card, Container, Segment, Icon, Loader } from "semantic-ui-react"
import BlogDetail from "./blog-post-card"

import styles from "../../css/insert-it.css"

const MEDIUM_URL = "https://medium.com/"
const MEDIUM_PUBLICATION = "img-iit-roorkee"

class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        const URL = "/api/maintainer_site/blogs"
        axios.get(URL).then(res => {
            this.setState(
                {
                    blogs: res.data,
                    loading: false,
                },
                () => {}
            )
        })
    }

    render() {
        if (this.state.loading) {
            return <Loader active={this.state.loading} />
        } else {
            return (
                <Container>
                    <Card.Group
                        itemsPerRow={3}
                        stackable
                        doubling
                        styleName="styles.insert-it"
                    >
                        {this.state.blogs.map(info => (
                            <BlogDetail info={info} />
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
        }
    }
}
export default Blogs
