import React, { Component } from "react"
import { Container } from "semantic-ui-react"

import styles from "../../css/header/app-header.css"

class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            style: "container",
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                style: "container-scroll",
            })
        } else {
            this.setState({
                style: "container",
            })
        }
    }

    render() {
        return (
            <div styleName="styles.position">
                <div styleName={`styles.${this.state.style}`}>
                    <Container>
                        <h1>AppHeader</h1>
                    </Container>
                </div>
            </div>
        )
    }
}

export default AppHeader
