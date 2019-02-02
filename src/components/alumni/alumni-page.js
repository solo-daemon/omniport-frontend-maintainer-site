import React, { Component } from "react"
import { Card, Container, Loader, Segment } from "semantic-ui-react"

import AlumniMember from "./alumni-card"

import styles from "../../css/team/team.css"
import common from "../../css/page-common-styles.css"

class Alumni extends Component {
    componentDidMount() {
        const URL = "inactive_maintainer_info"
        this.props.requestAlumniData(URL)
    }

    render() {
        const roleOptions = this.props.apiAlumniData.loaded
            ? this.props.apiAlumniData.options.actions.POST.maintainer.children
                  .role.choices
            : []
        const designationOptions = this.props.apiAlumniData.loaded
            ? this.props.apiAlumniData.options.actions.POST.maintainer.children
                  .designation.choices
            : []
        const linkOptions = this.props.apiAlumniData.loaded
            ? this.props.apiAlumniData.options.actions.POST.socialInformation
                  .child.children.links.child.children.site.choices
            : []

        if (this.props.apiAlumniData.loaded) {
            return (
                <React.Fragment>
                    <Container textAlign="center" styleName="common.margin">
                        <Card.Group itemsPerRow={3} stackable>
                            {this.props.apiAlumniData.data.map(info => (
                                <AlumniMember
                                    info={info}
                                    key={info.handle}
                                    roleOptions={roleOptions}
                                    designationOptions={designationOptions}
                                    linkOptions={linkOptions}
                                />
                            ))}
                        </Card.Group>
                    </Container>
                    <Segment padded basic />
                </React.Fragment>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}

export default Alumni
