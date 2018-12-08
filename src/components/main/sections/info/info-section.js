import React, { Component } from "react"
import { Grid, Container, Icon } from "semantic-ui-react"
import styles from "../../../../css/sections/info/info-section.css"
const InfoSection = () => (
    <div styleName="styles.container">
        <Container>
            <Grid columns={2} padded="vertically" stackable reversed="mobile">
                <Grid.Column>
                    <div>
                        <h5>
                            <div styleName="styles.footer-text">CONTACT US</div>
                        </h5>
                        <p styleName="styles.footer-text-content">
                            Ground floor, Institute Computer Centre,
                            <br />
                            IIT Roorkee, Roorkee,
                            <br />
                            Uttrakhand, India- 247667
                        </p>
                    </div>
                    <br />
                    <p>
                        <Icon inverted name="phone" />
                        <span styleName="styles.f-link">01332 284 521</span>
                    </p>
                    <p>
                        <Icon inverted name="envelope" />
                        <span styleName="styles.f-link">img@iitr.ac.in</span>
                    </p>
                    <div>
                        <Icon
                            styleName="styles.social-links"
                            name="facebook"
                            onClick={() => window.open("")}
                        />
                        <Icon
                            styleName="styles.social-links"
                            name="github"
                            onClick={() => window.open("")}
                        />
                        <Icon
                            styleName="styles.social-links"
                            name="twitter"
                            onClick={() => window.open("")}
                        />
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <h5>
                            <div styleName="styles.footer-text">About</div>
                        </h5>
                        <p styleName="styles.footer-text-content">
                            As the institute evolves, so does IMG. We are a
                            student group, which cultivates technical innovation
                            and drives the development of software systems and
                            niche applications which empathize with the
                            residents of IIT Roorkee, making their digital stay
                            as seamless as possible. We survive on action and
                            results, getting it done faster, better and more
                            efficiently, with one goal in mind: Simplifying the
                            business of college life.
                        </p>
                    </div>
                </Grid.Column>
            </Grid>
        </Container>
    </div>
)
export default InfoSection
