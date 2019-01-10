import React from "react"
import { Segment, Icon } from "semantic-ui-react"

import style from "../../css/team/add-member-details.css"

const ICON_OPTIONS = {
    beh: "behance",
    blo: "blogger",
    dri: "dribbble",
    fac: "facebook",
    fli: "flickr",
    git: "github",
    goo: "google",
    lin: "linkedin",
    med: "medium",
    pin: "pinterest",
    red: "reddit",
    sky: "skype",
    sna: "snapchat",
    tum: "tumblr",
    twi: "twitter",
    you: "youtube",
    oth: "globe",
    music: "music",
    book: "book",
    film: "film",
    game: "game",
    hobbies: "paint brush",
}

class Link extends React.Component {
    constructor(props) {
        super(props)
    }
    handleDelete = e => {
        this.props.handleUpdateDelete(e)
    }
    render() {
        const pop = this.props.name

        return (
            <Segment styleName="style.headingBox">
                <div styleName="style.socialBox">
                    <Icon name={ICON_OPTIONS[this.props.data.site]} />
                    <p styleName="style.link">{this.props.data.url}</p>
                </div>
                <Icon
                    name="delete"
                    id={this.props.id}
                    pop={this.props.name}
                    onClick={this.handleDelete}
                />
            </Segment>
        )
    }
}
export default Link
