import React from "react"
import { isBrowser } from "react-device-detect"
import { Segment } from "semantic-ui-react"

import styles from "../../../../css/sections/main/main-section-text.css"

const MainText = () => (
    <div styleName="styles.text">
        <div>
            <h1 styleName="styles.site-title">Playing with</h1>
            <br />
            <h1 styleName="styles.site-title">new ideas</h1>
            <p styleName="styles.site-para">
                The group flaunts a wide spectrum of projects, influencing over
                eight thousand lives on campus.
            </p>
        </div>
    </div>
)

export default MainText
