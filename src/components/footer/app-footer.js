import React from "react"
import { Segment, Container } from "semantic-ui-react"

import styles from "../../css/footer/app-footer.css"

const FooterSection = ({ info }) => {
    let date = new Date()
    return (
        <footer styleName="styles.container">
            <Container>{`© ${date.getFullYear()} ${info.name}`}</Container>
        </footer>
    )
}

export default FooterSection
