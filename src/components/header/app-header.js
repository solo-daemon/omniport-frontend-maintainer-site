import React, { Component } from "react"
import { connect } from "react-redux"
import Helmet from "react-helmet"
import { Container, Grid, Icon } from "semantic-ui-react"
import { Link, NavLink } from "react-router-dom"
import { isBrowser } from "react-device-detect"

import styles from "../../css/header/app-header.css"

const PATHNAME = "/maintainer_site/"

const ACTIVE_NAV_STYLE = {
    borderBottom: "2.5px solid #000000",
}

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

    handleSelection = (match, location) => {
        console.log(match)
        console.log(location)
    }

    pageHead = () => {
        return this.props.title
    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{this.pageHead()}</title>
                    <link
                        rel="icon"
                        sizes="16x16"
                        href="/static/maintainer_site/favicon/favicon.ico"
                    />
                </Helmet>
                <div styleName="styles.position">
                    <div styleName={`styles.${this.handleContainerStyle()}`}>
                        <Container styleName="styles.container-margin">
                            <Grid columns={2} verticalAlign="middle">
                                <Grid.Column>
                                    <Link to={PATHNAME}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            styleName={`styles.${this.handleLogoStyle()}`}
                                            viewBox="0 0 100 100"
                                        >
                                            <use xlinkHref="/static/maintainer_site/logo.svg#maintainer_logo" />
                                        </svg>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <div styleName="button">
                                        {isBrowser ? (
                                            <React.Fragment>
                                                <NavLink
                                                    to={`${PATHNAME}blog/`}
                                                    styleName="styles.link-color"
                                                    activeStyle={
                                                        ACTIVE_NAV_STYLE
                                                    }
                                                >
                                                    <button
                                                        name="blog"
                                                        styleName={`styles.${this.handleNavStyle()}`}
                                                    >
                                                        Blog
                                                    </button>
                                                </NavLink>
                                                <NavLink
                                                    to={`${PATHNAME}projects/`}
                                                    styleName="styles.link-color"
                                                    activeStyle={
                                                        ACTIVE_NAV_STYLE
                                                    }
                                                >
                                                    <button
                                                        name="projects"
                                                        styleName={`styles.${this.handleNavStyle()}`}
                                                    >
                                                        Projects
                                                    </button>
                                                </NavLink>
                                                <NavLink
                                                    to={`${PATHNAME}team/`}
                                                    styleName="styles.link-color"
                                                    activeStyle={
                                                        ACTIVE_NAV_STYLE
                                                    }
                                                >
                                                    <button
                                                        name="team"
                                                        styleName={`styles.${this.handleNavStyle()}`}
                                                    >
                                                        Team
                                                    </button>
                                                </NavLink>
                                                <NavLink
                                                    to={`${PATHNAME}alumni/`}
                                                    styleName="styles.link-color"
                                                    activeStyle={
                                                        ACTIVE_NAV_STYLE
                                                    }
                                                >
                                                    <button
                                                        name="team"
                                                        styleName={`styles.${this.handleNavStyle()}`}
                                                    >
                                                        Alumni
                                                    </button>
                                                </NavLink>
                                                {this.props.isAuthed.auth && (
                                                    <React.Fragment>
                                                        <NavLink
                                                            to={`${PATHNAME}add_member_details/`}
                                                            styleName="styles.link-color"
                                                            activeStyle={
                                                                ACTIVE_NAV_STYLE
                                                            }
                                                        >
                                                            <button
                                                                name="add_member"
                                                                styleName={`styles.${this.handleNavStyle()}`}
                                                            >
                                                                * Member
                                                            </button>
                                                        </NavLink>
                                                        <NavLink
                                                            to={`${PATHNAME}add_project_details/`}
                                                            styleName="styles.link-color"
                                                            activeStyle={
                                                                ACTIVE_NAV_STYLE
                                                            }
                                                        >
                                                            <button
                                                                name="add_project"
                                                                styleName={`styles.${this.handleNavStyle()}`}
                                                            >
                                                                * Project
                                                            </button>
                                                        </NavLink>
                                                    </React.Fragment>
                                                )}
                                            </React.Fragment>
                                        ) : (
                                            !this.props.sidebarVisible
                                                .visible && (
                                                <div
                                                    styleName={`styles.${this.handleHamburgerStyle()}`}
                                                >
                                                    <Icon
                                                        name="bars"
                                                        onClick={
                                                            this.props
                                                                .handleClick
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
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        sidebarVisible: state.sidebarVisible,
        isAuthed: state.isAuthed,
    }
}

export default connect(mapStateToProps)(AppHeader)
