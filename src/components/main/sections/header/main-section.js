import React, { Component } from "react"
import { isBrowser } from "react-device-detect"
import MainText from "./main-section-text"
import MainImage from "./main-section-image"

import styles from "../../../../css/sections/main/main-section.css"

class MainSection extends Component {
    render() {
        return (
            <div styleName="styles.container">
                <MainText />
                {isBrowser && <MainImage />}
            </div>
        )
    }
}

export default MainSection
