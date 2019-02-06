import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Grid, Icon } from "semantic-ui-react"

import logoStyles from "../../css/header/app-header-logo.css"
import mobileStyles from "../../css/header/app-header-mobile-grid.css"

const PATHNAME = "/maintainer_site/"

class AppHeaderMobile extends Component {
    constructor(props) {
        super(props)
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

    handleNavTitle = () => {
        if (window.location.pathname === PATHNAME) {
            return ""
        } else {
            return this.props.name
        }
    }

    render() {
        console.log(window.location)
        return (
            <Grid columns={3} verticalAlign="middle">
                <Grid.Column>
                    <Link to={PATHNAME} styleName="logoStyles.link">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            styleName={`logoStyles.${this.handleLogoStyle()}`}
                            viewBox="0 0 100 100"
                        >
                            <use xlinkHref="/static/maintainer_site/logo.svg#maintainer_logo" />
                        </svg>
                    </Link>
                </Grid.Column>
                <Grid.Column
                    textAlign="center"
                    styleName="mobileStyles.nav-title"
                >
                    {this.handleNavTitle()}
                </Grid.Column>
                <Grid.Column textAlign="right">
                    {!this.props.visible && (
                        <div
                            styleName={`mobileStyles.${this.handleHamburgerStyle()}`}
                        >
                            <Icon name="bars" onClick={this.props.click} />
                        </div>
                    )}
                </Grid.Column>
            </Grid>
        )
    }
}

export default AppHeaderMobile
