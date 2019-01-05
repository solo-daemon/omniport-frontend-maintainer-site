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
    List,
    Grid,
    Reveal,
    Loader,
} from "semantic-ui-react"

import styles from "../../css/team/team-individual-view.css"
import common from "../../css/sections/common-styles.css"

import HobbiesCard from "./hobbies-card"
class TeamIndividualView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            member_details: [],
            loaded: false,
        }
    }
    componentDidMount() {
        const { handle } = this.props.match.params
        const URL = `/api/maintainer_site/active_maintainer_info/${handle}`

        axios.get(URL).then(res => {
            this.setState(
                {
                    member_details: res.data,
                    loaded: true,
                },
                () => {}
            )
        })
    }

    render() {
        if (this.state.loaded) {
            return (
                <div>
                    <Container>
                        <Grid columns={2} stackable>
                            <Grid.Column textAlign="center">
                                <div styleName="styles.pro-image">
                                    <Reveal
                                        animated="move up"
                                        // as='Segment'
                                        // textAlign="center"
                                        // circular
                                    >
                                        <Reveal.Content visible>
                                            <Image
                                                src={
                                                    this.state.member_details
                                                        .normieImage
                                                }
                                                size="medium"
                                                circular
                                            />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image
                                                src={
                                                    this.state.member_details
                                                        .dankImage
                                                }
                                                size="medium"
                                                circular
                                            />
                                        </Reveal.Content>
                                    </Reveal>
                                </div>
                                <h1 styleName="common.header">
                                    {
                                        this.state.member_details.fullName
                                            .fullName
                                    }
                                </h1>
                                <p>
                                    {this.state.member_details.role},{" "}
                                    {this.state.member_details.designation}
                                </p>
                            </Grid.Column>
                            <Grid.Column verticalAlign="middle">
                                <p>
                                    {this.state.member_details.shortBiography}
                                </p>
                                <p>
                                    {this.state.member_details
                                        .socialInformation[0] &&
                                        this.state.member_details.socialInformation[0].links.map(
                                            profile => (
                                                <span styleName="styles.f-link">
                                                    <Icon
                                                        fitted
                                                        title={profile.url}
                                                        size="large"
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
                                </p>
                            </Grid.Column>
                        </Grid>
                        <Divider section />
                        <Card.Group itemsPerRow={3} stackable doubling>
                            <HobbiesCard
                                coverIcon="music"
                                array={this.state.member_details.favouriteMusic}
                                message="Favourite Music"
                            />
                            <HobbiesCard
                                coverIcon="book"
                                array={
                                    this.state.member_details
                                        .favouriteLiterature
                                }
                                message="Favourite Literature"
                            />
                            <HobbiesCard
                                coverIcon="film"
                                array={this.state.member_details.favouriteVideo}
                                message="Movies/TV Series"
                            />
                            <HobbiesCard
                                coverIcon="paint brush"
                                array={
                                    this.state.member_details.favouriteHobbies
                                }
                                message="Hobbies"
                            />
                            <HobbiesCard
                                coverIcon="laptop"
                                array={
                                    this.state.member_details.technicalSkills
                                }
                                message="Tech skills"
                            />
                            <HobbiesCard
                                coverIcon="game"
                                array={this.state.member_details.favouriteGames}
                                message="Favourite Games"
                            />
                        </Card.Group>
                    </Container>
                </div>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}

export default TeamIndividualView
