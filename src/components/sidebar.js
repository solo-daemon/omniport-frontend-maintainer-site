import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { toggleSidebar } from "../actions/toggleSidebar"

import styles from "../css/sidebar.css"

const PATHNAME = "/maintainer_site/"
class Sidebar extends Component {
    handleHide = () => {
        this.props.toggleSidebar(false, "sidebar-container-shrink")
    }

    render() {
        return (
            <React.Fragment>
                {this.props.sidebarVisible.visible && (
                    <div styleName="styles.main">
                        <div
                            styleName="styles.overlay"
                            onClick={this.handleHide}
                        />
                        <div
                            styleName={`styles.${
                                this.props.sidebarVisible.style
                            }`}
                        >
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
                                <Link
                                    to={`${PATHNAME}alumni/`}
                                    styleName="styles.link-color"
                                    onClick={this.handleHide}
                                >
                                    <button styleName="styles.sidebar-button">
                                        Alumni
                                    </button>
                                </Link>
                                {this.props.isAuthed.auth && (
                                    <React.Fragment>
                                        <Link
                                            to={`${PATHNAME}add_member_details/`}
                                            styleName="styles.link-color"
                                            onClick={this.handleHide}
                                        >
                                            <button styleName="styles.sidebar-button">
                                                * Member
                                            </button>
                                        </Link>
                                        <Link
                                            to={`${PATHNAME}add_project_details/`}
                                            styleName="styles.link-color"
                                            onClick={this.handleHide}
                                        >
                                            <button styleName="styles.sidebar-button">
                                                * Project
                                            </button>
                                        </Link>
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    </div>
                )}
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

const mapDispatchToProps = dispatch => {
    return {
        toggleSidebar: (visible, style) => {
            dispatch(toggleSidebar(visible, style))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
