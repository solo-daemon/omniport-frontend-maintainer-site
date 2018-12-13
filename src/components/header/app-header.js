import React, { Component } from "react"
import { Container, Grid, Image, Button } from "semantic-ui-react"

import styles from "../../css/header/app-header.css"

class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: "container",
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                style: "container-scroll",
            })
        } else {
            this.setState({
                style: "container",
            })
        }
    }

    render() {
        return (
            <div styleName="styles.position">
                <div styleName={`styles.${this.state.style}`}>
                    <Container>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Image
                                    src="http://img.channeli.in/static/images/imglogo.png"
                                    size="tiny"
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <div styleName="button">
                                    <Button basic size="large">
                                        Blogs
                                    </Button>
                                    <Button basic size="large">
                                        Projects
                                    </Button>
                                    <Button basic size="large">
                                        Team
                                    </Button>
                                </div>
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            </div>
        )
    }
}

export default AppHeader
