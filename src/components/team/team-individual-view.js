import React, { Component } from "react"
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
} from "semantic-ui-react"
import styles from "../../css/team/team-individual-view.css"
import HobbiesCard from "./hobbies-card"
class TeamIndividualView extends Component {
    constructor(props) {
        super(props)
        // this.state = {

        // }
    }
    render() {
        const member = {
            name: "Dhruv Kanti Bhanushali",
            normieImage:
                "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            dankImage:
                "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
            social: [
                {
                    name: "GitHub",
                    url: "https://github.com/algomaster99",
                },
                {
                    name: "Facebook",
                    url: "#",
                },
                {
                    name: "dribbble",
                    url: "#",
                },
            ],
            role: "Developer",
            designation: "Webmaster",
            shortBio:
                " I am an experienced developer and a newbie designer at IMG, who likes building applications in ridiculously short amounts of time. I also enjoy reading humorous books, watching humorous films, writing humorous emails and listening to music. ",
            music: [
                "kendrik lamar",
                "lamar",
                "kendrik lamar",
                "lamar",
                "kendrik lamar",
            ],
            book: ["kendrik", "lamar", "believer", "mine", "deadlines"],
            movies: ["kendrik", "lamar", "believer", "mine", "deadlines"],
            TechSkills: ["kendrik", "lamar", "believer", "mine", "deadlines"],
            hobbies: ["kendrik", "lamar", "believer", "mine", "deadlines"],
            videoGames: ["kendrik", "lamar", "believer", "mine", "deadlines"],
        }

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
                                            src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                                            size="small"
                                            circular
                                        />
                                    </Reveal.Content>
                                    <Reveal.Content hidden>
                                        <Image
                                            src="https://react.semantic-ui.com/images/avatar/large/justen.jpg"
                                            size="small"
                                            circular
                                        />
                                    </Reveal.Content>
                                </Reveal>
                            </div>
                            <Header as="h1">{member.name}</Header>
                            <p>
                                {member.role},{member.designation}
                            </p>
                            <p>
                                {member.social.map(profile => (
                                    <span styleName="styles.f-link">
                                        <Icon
                                            title={profile.url}
                                            size="large"
                                            name={profile.name.toLowerCase()}
                                            onClick={() =>
                                                window.open(profile.url)
                                            }
                                        />
                                    </span>
                                ))}
                            </p>
                        </Grid.Column>
                        <Grid.Column verticalAlign="middle">
                            <p>{member.shortBio}</p>
                        </Grid.Column>
                    </Grid>
                    <Divider section />
                    <Card.Group itemsPerRow={3} stackable doubling>
                        <HobbiesCard
                            coverIcon="music"
                            array={member.music}
                            message="Favourite Music"
                        />
                        <HobbiesCard
                            coverIcon="book"
                            array={member.book}
                            message="Favourite Literature"
                        />
                        <HobbiesCard
                            coverIcon="film"
                            array={member.movies}
                            message="Movies/TV Series"
                        />
                        <HobbiesCard
                            coverIcon="paint brush"
                            array={member.hobbies}
                            message="Hobbies"
                        />
                        <HobbiesCard
                            coverIcon="laptop"
                            array={member.movies}
                            message="Tech skills"
                        />
                        <HobbiesCard
                            coverIcon="game"
                            array={member.videoGames}
                            message="Favourite VideoGames"
                        />
                    </Card.Group>
                </Container>
            </div>
        )
    }
}

export default TeamIndividualView
