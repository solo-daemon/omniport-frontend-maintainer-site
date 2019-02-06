import React, { Component } from "react"
import Helmet from "react-helmet"
import { Container } from "semantic-ui-react"
import { isBrowser } from "react-device-detect"

import AppHeaderBrowser from "./app-header-browser-grid"
import AppHeaderMobile from "./app-header-mobile-grid"

import styles from "../../css/header/app-header.css"

class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
                        href="/static/maintainer_site/favicon/favicon.ico"
                    />
                </Helmet>
                <div styleName="styles.position">
                    <div styleName={`styles.${this.handleContainerStyle()}`}>
                        <Container styleName="styles.container-margin">
                            {isBrowser ? (
                                <AppHeaderBrowser
                                    auth={this.props.isAuthed.auth}
                                />
                            ) : (
                                <AppHeaderMobile
                                    visible={this.props.sidebarVisible.visible}
                                    name={this.props.sidebarVisible.name}
                                    click={this.props.handleClick}
                                />
                            )}
                        </Container>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AppHeader
