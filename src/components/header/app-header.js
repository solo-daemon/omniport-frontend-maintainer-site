import React, { Component } from "react"
import { connect } from "react-redux"
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
            logoStyle: "maintainer-logo",
            navStyle: "link",
            hamburgerStyle: "hamburger",
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
        if (
            window.location.pathname === PATHNAME &&
            this.state.containerStyle === "container"
        ) {
            this.setState({
                logoStyle: "maintainer-logo-yellow-start-main",
                navStyle: "link-blue-start-main",
                hamburgerStyle: "hamburger-yellow-start-main",
            })
        } else {
            this.setState({
                logoStyle: "maintainer-logo-black-start-main",
                navStyle: "link-black-start-main",
                hamburgerStyle: "hamburger-black-start-main",
            })
        }
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            console.log(window.location.pathname)
            this.setState({
                containerStyle: "container-white-general",
                logoStyle: "maintainer-logo-after-scroll-main",
                navStyle: "link-after-scroll-main",
                hamburgerStyle: "hamburger-after-scroll-main",
            })
        } else {
            this.setState({
                containerStyle: "container-transparent-general",
            })
            if (window.location.pathname === PATHNAME) {
                this.setState({
                    logoStyle: "maintainer-logo-before-scroll-main",
                    navStyle: "link-before-scroll-main",
                    hamburgerStyle: "hamburger-before-scroll-main",
                })
            } else {
                this.setState({
                    logoStyle: "maintainer-logo-after-scroll-main ",
                    navStyle: "link-after-scroll-main",
                    hamburgerStyle: "hamburger-after-scroll-main",
                })
            }
        }
    }

    render() {
        return (
            <div styleName="styles.position">
                <div styleName={`styles.${this.state.containerStyle}`}>
                    <Container>
                        <Grid columns={2} verticalAlign="middle">
                            <Grid.Column>
                                <Link to={PATHNAME}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        styleName={`styles.${
                                            this.state.logoStyle
                                        }`}
                                        viewBox="0 0 100 100"
                                    >
                                        <use href={`${logo}#maintainer_logo`} />
                                    </svg>
                                </Link>
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
                                                    styleName={`styles.${
                                                        this.state.navStyle
                                                    }`}
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
                                                    styleName={`styles.${
                                                        this.state.navStyle
                                                    }`}
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
                                                    styleName={`styles.${
                                                        this.state.navStyle
                                                    }`}
                                                >
                                                    Team
                                                </button>
                                            </Link>
                                        </React.Fragment>
                                    ) : (
                                        !this.props.sidebarVisible.visible && (
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

const mapStateToProps = state => {
    return {
        sidebarVisible: state.sidebarVisible,
    }
}

export default connect(mapStateToProps)(AppHeader)
