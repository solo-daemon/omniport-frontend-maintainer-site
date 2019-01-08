import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleSidebar } from '../actions/toggleSidebar'

import styles from '../css/sidebar.css'

const PATHNAME = '/maintainer_site/'
class Sidebar extends Component {
    handleHide = () => {
        this.props.toggleSidebar(false)
    }

    render() {
        return (
            <>
                {this.props.sidebarVisible && (
                    <div styleName="styles.main">
                        <div
                            styleName="styles.overlay"
                            onClick={this.handleHide}
                        />
                        <div styleName="styles.sidebar-container">
                            <div styleName="styles.sidebar">
                                <Link
                                    to={`${PATHNAME}blog/`}
                                    styleName="styles.link-color"
                                    onClick={this.handleHide}
                                >
                                    <button styleName="styles.sidebar-button">
                                        Blog
                                    </button>
                                </Link>
                                <Link
                                    to={`${PATHNAME}projects/`}
                                    styleName="styles.link-color"
                                    onClick={this.handleHide}
                                >
                                    <button styleName="styles.sidebar-button">
                                        Projects
                                    </button>
                                </Link>
                                <Link
                                    to={`${PATHNAME}team/`}
                                    styleName="styles.link-color"
                                    onClick={this.handleHide}
                                >
                                    <button styleName="styles.sidebar-button">
                                        Team
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        sidebarVisible: state.sidebarVisible,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: visible => {
            dispatch(toggleSidebar(visible))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
