import React, { Component } from "react"
import { connect } from "react-redux"

import styles from "../css/sidebar.css"

class Sidebar extends Component {
    render() {
        return (
            <>
                {this.props.sidebarVisible && (
                    <React.Fragment>
                        <div styleName="styles.sidebar-container">
                            <div styleName="styles.sidebar">
                                <button styleName="styles.sidebar-button">
                                    Blog
                                </button>
                                <button styleName="styles.sidebar-button">
                                    Projects
                                </button>
                                <button styleName="styles.sidebar-button">
                                    Team
                                </button>
                            </div>
                        </div>
                    </React.Fragment>
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

export default connect(mapStateToProps)(Sidebar)
