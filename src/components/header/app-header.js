import React, { Component } from "react"
import { Container, Grid, Icon, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { isBrowser } from "react-device-detect"

import styles from "../../css/header/app-header.css"
import logo from "../../static/logo.svg"

const PATHNAME = "/maintainer_site/"

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
        //window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        // if (window.scrollY > 0) {
        //     this.setState({
        //         containerStyle: "container-white-general",
        //     })
        // } else {
        //     this.setState({
        //         containerStyle: "container-transparent-general",
        //     })
        // }
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
                            <Grid.Column style={{ height: "100%" }}>
                                <div styleName="button">
                                    {isBrowser ? (
                                        <React.Fragment>
                                            <Link
                                                to={`${PATHNAME}blog/`}
                                                styleName="styles.link-color"
                                            >
                                                <button
                                                    name="blog"
                                                    styleName="styles.link"
                                                >
                                                    Blog
                                                </button>
                                            </Link>
                                            <Link
                                                to={`${PATHNAME}projects/`}
                                                styleName="styles.link-color"
                                            >
                                                <button
                                                    name="projects"
                                                    styleName="styles.link"
                                                >
                                                    Projects
                                                </button>
                                            </Link>
                                            <Link
                                                to={`${PATHNAME}team/`}
                                                styleName="styles.link-color"
                                            >
                                                <button
                                                    name="team"
                                                    styleName="styles.link"
                                                >
                                                    Team
                                                </button>
                                            </Link>
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
