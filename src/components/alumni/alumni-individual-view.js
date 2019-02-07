import React, { Component } from "react"
import axios from "axios"
import { Route } from "react-router-dom"
import {
    Card,
    Image,
    Header,
    Container,
    Icon,
    Segment,
    Divider,
    Grid,
    Reveal,
    Loader,
} from "semantic-ui-react"

import styles from "../../css/team/team-individual-view.css"
import common from "../../css/page-common-styles.css"
import ProjectDetail from "../projects/project-card"

import HobbiesCard from "../team/hobbies-card"
import TechSkillsCard from "../team/tech-skills-card"
import NoMatch from "../404/404"

class AlumniIndividualView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            memberDetails: [],
            loaded: false,
            options: [],
            role: "",
            memberProjects: [],
            designation: "",
            error: false,
        }
    }

    componentDidMount() {
        const { handle } = this.props.match.params
        const URL = `/api/maintainer_site/inactive_maintainer_info/${handle}`
        axios
            .all([axios.get(URL), axios.options(URL)])
            .then(
                axios.spread((memberRes, optionsRes) => {
                    this.setState({
                        memberDetails: memberRes.data,
                        options: optionsRes.data,
                    })
                    this.requestForProjects(memberRes.data.maintainer.id)
                })
            )
            .catch(error => {
                this.setState({
                    error: <Route component={NoMatch} />,
                })
            })
    }
    requestForProjects = id => {
        URL = `/api/maintainer_site/maintainer_project/${id}`
        axios.get(URL).then(res => {
            this.setState({
                memberProjects: res.data,
                loaded: true,
            })
        })
    }

    render() {
        const roleOptions = this.state.loaded
            ? this.state.options.actions.PUT.maintainer.children.role.choices
            : []
        const designationOptions = this.state.loaded
            ? this.state.options.actions.PUT.maintainer.children.designation
                  .choices
            : []

        if (this.state.loaded) {
            let techSkills = this.state.memberDetails.technicalSkills
            let techSkillsArray = techSkills === "" ? [] : techSkills.split(",")
            return (
                <div>
                    <Container styleName="common.margin">
                        <Grid columns={2} stackable>
                            <Grid.Column textAlign="center">
                                <div styleName="styles.pro-image">
                                    <Reveal animated="fade">
                                        <Reveal.Content visible>
                                            <Image
                                                src={
                                                    this.state.memberDetails
                                                        .normieImage
                                                }
                                                circular
                                                size="medium"
                                            />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image
                                                src={
                                                    this.state.memberDetails
                                                        .dankImage
                                                }
                                                circular
                                                size="medium"
                                            />
                                        </Reveal.Content>
                                    </Reveal>
                                </div>
                            </Grid.Column>
                            <Grid.Column verticalAlign="middle">
                                <Header as="h1">
                                    {
                                        this.state.memberDetails.maintainer
                                            .person.fullName
                                    }
                                </Header>
                                <div styleName="styles.role-designation">
                                    {roleOptions.map(
                                        (role, index) =>
                                            this.state.memberDetails.maintainer
                                                .role === role.value && (
                                                <React.Fragment key={index}>
                                                    {`${role.displayName} | `}{" "}
                                                </React.Fragment>
                                            )
                                    )}
                                    {designationOptions.map(
                                        (designation, index) =>
                                            this.state.memberDetails.maintainer
                                                .designation ===
                                                designation.value && (
                                                <React.Fragment key={index}>
                                                    {designation.displayName}
                                                </React.Fragment>
                                            )
                                    )}
                                </div>
                                <div styleName="styles.short-biography">
                                    {this.state.memberDetails.shortBiography}
                                </div>
                                <div>
                                    {this.state.memberDetails
                                        .socialInformation[0] &&
                                        this.state.memberDetails.socialInformation[0].links.map(
                                            (profile, index) => (
                                                <span
                                                    styleName="styles.f-link"
                                                    key={index}
                                                >
                                                    <Icon
                                                        fitted
                                                        title={profile.url}
                                                        name={profile.siteLogo.toLowerCase()}
                                                        onClick={() =>
                                                            window.open(
                                                                profile.url
                                                            )
                                                        }
                                                    />
                                                </span>
                                            )
                                        )}
                                </div>
                            </Grid.Column>
                        </Grid>

                        <Divider section />

                        {Boolean(this.state.memberProjects.length) && (
                            <React.Fragment>
                                <Header as="h2" textAlign="center">
                                    Projects
                                </Header>
                                <Card.Group itemsPerRow={3} doubling stackable>
                                    {this.state.memberProjects.map(
                                        (info, index) => (
                                            <ProjectDetail
                                                key={index}
                                                info={info}
                                                key={info.slug}
                                            />
                                        )
                                    )}
                                </Card.Group>
                            </React.Fragment>
                        )}

                        <Header as="h2" textAlign="center">
                            Hobbies
                        </Header>
                        {techSkillsArray.length > 0 && (
                            <TechSkillsCard
                                coverIcon="laptop"
                                array={techSkillsArray}
                                message="Tech skills"
                            />
                        )}

                        <Segment padded basic />
                    </Container>
                </div>
            )
        } else if (this.state.error) {
            return this.state.error
        } else {
            return <Loader active size="large" />
        }
    }
}

export default AlumniIndividualView
