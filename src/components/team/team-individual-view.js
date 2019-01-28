import React, { Component } from "react"
import axios from "axios"
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

import HobbiesCard from "./hobbies-card"
import TechSkillsCard from "./tech-skills-card"

class TeamIndividualView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            memberDetails: [],
            loaded: false,
            options: [],
            role: "",
            member_projects: [],
            designation: "",
        }
        this.requestForProjects = this.requestForProjects.bind(this)
    }
    componentDidMount() {
        const { handle } = this.props.match.params
        const URL = `/api/maintainer_site/active_maintainer_info/${handle}`
        const URL2 = axios.all([axios.get(URL), axios.options(URL)]).then(
            axios.spread((memberRes, optionsRes) => {
                this.setState({
                    memberDetails: memberRes.data,
                    options: optionsRes.data,
                })
                this.requestForProjects(memberRes.data.maintainer.id)
            })
        )
    }
    requestForProjects(id) {
        URL = `/api/maintainer_site/maintainer_project/${id}`
        axios.get(URL).then(res => {
            this.setState({
                member_projects: res.data,
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
            let temp = this.state.memberDetails.technicalSkills[0]
            let tempArr = temp.split(",")
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
                                                size="medium"
                                            />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image
                                                src={
                                                    this.state.memberDetails
                                                        .dankImage
                                                }
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

                        <Header as="h2" textAlign="center">
                            Projects
                        </Header>
                        <Card.Group itemsPerRow={3} doubling>
                            {this.state.member_projects.map((info, index) => (
                                <ProjectDetail
                                    key={index}
                                    info={info}
                                    key={info.slug}
                                />
                            ))}
                        </Card.Group>

                        <Header as="h2" textAlign="center">
                            Hobbies
                        </Header>
                        <Card.Group itemsPerRow={3} doubling>
                            <HobbiesCard
                                coverIcon="music"
                                array={this.state.memberDetails.favouriteMusic}
                                message="Favourite Music"
                            />
                            <HobbiesCard
                                coverIcon="book"
                                array={
                                    this.state.memberDetails.favouriteLiterature
                                }
                                message="Favourite Literature"
                            />
                            <HobbiesCard
                                coverIcon="film"
                                array={this.state.memberDetails.favouriteVideo}
                                message="Movies/TV Series"
                            />
                            <HobbiesCard
                                coverIcon="paint brush"
                                array={
                                    this.state.memberDetails.favouriteHobbies
                                }
                                message="Hobbies"
                            />
                            <TechSkillsCard
                                coverIcon="laptop"
                                array={tempArr}
                                message="Tech skills"
                            />
                            <HobbiesCard
                                coverIcon="game"
                                array={this.state.memberDetails.favouriteGames}
                                message="Favourite Games"
                            />
                        </Card.Group>

                        <Segment padded basic />
                    </Container>
                </div>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}

export default TeamIndividualView
