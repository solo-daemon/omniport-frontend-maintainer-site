import React, { Component } from "react"
import { connect } from "react-redux"
import { Container, Grid, Icon } from "semantic-ui-react"
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
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                containerStyle: "container-white-general",
            })
        } else {
            this.setState({
                containerStyle: "container-transparent-general",
            })
        }
    }

    handleContainerStyle = () => {
        if (window.scrollY > 0) {
            return "container-white-general"
        } else if (this.state.containerStyle !== "container") {
            return "container-transparent-general"
        } else {
            return "container"
        }
    }

    handleLogoStyle = () => {
        if (window.scrollY > 0) {
            return "maintainer-logo-after-scroll-main"
        } else {
            if (window.location.pathname === PATHNAME) {
                return "maintainer-logo-before-scroll-main"
            } else {
                return "maintainer-logo-after-scroll-main"
            }
        }
    }

    handleNavStyle = () => {
        if (window.scrollY > 0) {
            return "link-after-scroll-main"
        } else {
            if (window.location.pathname === PATHNAME) {
                return "link-before-scroll-main"
            } else {
                return "link-after-scroll-main"
            }
        }
    }

    handleHamburgerStyle = () => {
        if (window.scrollY > 0) {
            return "hamburger-after-scroll-main"
        } else {
            if (window.location.pathname === PATHNAME) {
                return "hamburger-before-scroll-main"
            } else {
                return "hamburger-after-scroll-main"
            }
        }
    }

    render() {
        return (
            <div styleName="styles.position">
                <div styleName={`styles.${this.handleContainerStyle()}`}>
                    <Container>
                        <Grid columns={2} verticalAlign="middle">
                            <Grid.Column>
                                <Link to={PATHNAME}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        styleName={`styles.${this.handleLogoStyle()}`}
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
                                                onClick={this.handleSwitch}
                                            >
                                                <button
                                                    name="blog"
                                                    styleName={`styles.${this.handleNavStyle()}`}
                                                >
                                                    Blog
                                                </button>
                                            </Link>
                                            <Link
                                                to={`${PATHNAME}projects/`}
                                                styleName="styles.link-color"
                                                onClick={this.handleSwitch}
                                            >
                                                <button
                                                    name="projects"
                                                    styleName={`styles.${this.handleNavStyle()}`}
                                                >
                                                    Projects
                                                </button>
                                            </Link>
                                            <Link
                                                to={`${PATHNAME}team/`}
                                                styleName="styles.link-color"
                                                onClick={this.handleSwitch}
                                            >
                                                <button
                                                    name="team"
                                                    styleName={`styles.${this.handleNavStyle()}`}
                                                >
                                                    Team
                                                </button>
                                            </Link>
                                        </React.Fragment>
                                    ) : (
                                        !this.props.sidebarVisible.visible && (
                                            <div
                                                styleName={`styles.${this.handleHamburgerStyle()}`}
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
