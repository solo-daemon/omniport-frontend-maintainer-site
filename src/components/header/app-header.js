import React, { Component } from "react"
import { Container, Grid, Icon, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { isBrowser } from "react-device-detect"

import styles from "../../css/header/app-header.css"
import logo from "../../static/logo.svg"

class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            containerStyle: "container",
            hamburgerStyle: "hamburger",
            visibility: false,
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
        })
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                containerStyle: "container-white",
                hamburgerStyle: "hamburger-yellow",
            })
        } else {
            this.setState({
                containerStyle: "container-transparent",
                hamburgerStyle: "hamburger-black",
            })
        }
    }

    render() {
        return (
            <div styleName="styles.position">
                <div styleName={`styles.${this.state.containerStyle}`}>
                    <Container>
                        <Grid columns={2} verticalAlign="middle">
                            <Grid.Column>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        styleName="styles.maintainer-logo"
                                        viewBox="0 0 100 100"
                                    >
                                        <use href={`${logo}#maintainer_logo`} />
                                    </svg>
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div styleName="button">
                                    {isBrowser ? (
                                        <React.Fragment>
                                            <Button
                                                as={Link}
                                                to="/maintainer_site/blogs/"
                                                basic
                                                styleName="link"
                                            >
                                                Blogs
                                            </Button>
                                            <Button
                                                as={Link}
                                                to="/maintainer_site/projects/"
                                                basic
                                                styleName="link"
                                            >
                                                Projects
                                            </Button>
                                            <Button
                                                as={Link}
                                                to="/maintainer_site/team/"
                                                basic
                                                styleName="link"
                                            >
                                                Team
                                            </Button>
                                        </React.Fragment>
                                    ) : (
                                        !this.props.visible && (
                                            <div
                                                styleName={`styles.${
                                                    this.state.hamburgerStyle
                                                }`}
                                            >
                                                <Icon
                                                    name="bars"
                                                    onClick={
                                                        this.props.handleClick
                                                    }
                                                />
                                            </div>
                                        )
                                    )}
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
