import React, { Component } from "react"
import { Grid, Container, Icon } from "semantic-ui-react"
import styles from "../../../../css/sections/info/info-section.css"

class InfoSection extends Component {
    render() {
        return (
            <div styleName="styles.container">
                <Container>
                    <Grid
                        columns={2}
                        padded="vertically"
                        stackable
                        reversed="mobile"
                    >
                        <Grid.Column>
                            <div>
                                <h5>
                                    <div styleName="styles.footer-text">
                                        CONTACT US
                                    </div>
                                </h5>
                                <p styleName="styles.footer-text-content">
                                    {this.props.info.locationData.address}
                                    <br />
                                    {this.props.info.locationData.city},
                                    <br />
                                    {this.props.info.locationData.state},{" "}
                                    {this.props.info.locationData.country &&
                                        this.props.info.locationData.country
                                            .name}
                                    - {this.props.info.locationData.postalCode}
                                </p>
                            </div>
                            <br />
                            <p>
                                <Icon inverted name="phone" />
                                <span styleName="styles.f-link">
                                    {
                                        this.props.info.contactData
                                            .primaryPhoneNumber
                                    }
                                </span>
                            </p>
                            <p>
                                <Icon inverted name="envelope" />
                                <span styleName="styles.f-link">
                                    {this.props.info.contactData.emailAddress}
                                </span>
                            </p>
                            <div>
                                {this.props.info.socialData.links &&
                                    this.props.info.socialData.links.map(
                                        profile => (
                                            <span styleName="styles.social-links">
                                                <Icon
                                                    fitted
                                                    title={profile.url}
                                                    name={profile.siteLogo}
                                                    onClick={() =>
                                                        window.open(profile.url)
                                                    }
                                                    key={profile.siteName}
                                                />
                                            </span>
                                        )
                                    )}
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div>
                                <h5>
                                    <div styleName="styles.footer-text">
                                        About
                                    </div>
                                </h5>
                                <p styleName="styles.footer-text-content">
                                    As the institute evolves, so does IMG. We
                                    are a student group, which cultivates
                                    technical innovation and drives the
                                    development of software systems and niche
                                    applications which empathize with the
                                    residents of IIT Roorkee, making their
                                    digital stay as seamless as possible. We
                                    survive on action and results, getting it
                                    done faster, better and more efficiently,
                                    with one goal in mind: Simplifying the
                                    business of college life.
                                </p>
                            </div>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default InfoSection
