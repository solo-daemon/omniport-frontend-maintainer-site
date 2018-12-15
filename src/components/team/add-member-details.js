import React, { Component } from "react"
import axios from "axios"
import {
    Card,
    Form,
    Checkbox,
    Button,
    Dropdown,
    Container,
    Header,
    TextArea,
    Input,
    Segment,
    Icon,
} from "semantic-ui-react"
import style from "../../css/team/add-member-details.css"
import LinkList from "./linkList"
const initial = {
    data: { site: "git", url: "" },
}
class AddMemberDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [],
            data: initial.data,
            links: [],
        }
    }
    componentDidMount() {
        const URL = `/api/maintainer_site/active_maintainer_info`

        axios.get(URL).then(res => {
            this.setState(
                {
                    profile: res.data,
                },
                () => {}
            )
        })
    }
    onChange = (event, data) => {
        const { value } = data

        this.setState({ data: { ...this.state.data, site: value } })
    }
    handleChange = e => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({ data: { ...this.state.data, [name]: value } })
    }
    addLink = e => {
        var arr = this.state.links
        arr.push(this.state.data)
        this.setState({ links: arr, data: initial.data }, () =>
            console.log(this.state.links)
        )
    }
    handleUpdateDelete = id => {
        console.log("bhosdike")

        var arr = []
        for (let i = 0; i < this.state.links.length; i++) {
            if (i != id) {
                arr.push(this.state.links[i])
            }
        }

        this.setState({
            data: initial.data,
            links: arr,
        })
    }

    render() {
        const options = [
            { icon: "behance", text: "Behance", value: "beh" },
            { icon: "blogger", text: "Blogger", value: "blo" },
            { icon: "dribbble", text: "Dribbble", value: "dri" },
            { icon: "facebook", text: "Facebook", value: "fac" },
            { icon: "flickr", text: "Flickr", value: "fli" },
            { icon: "github", text: "Github", value: "git" },
            { icon: "google", text: "Google", value: "goo" },
            { icon: "linkedin", text: "LinkedIn", value: "lin" },
            { icon: "medium", text: "Medium", value: "med" },
            { icon: "pinterest", text: "Pinterest", value: "pin" },
            { icon: "reddit", text: "Reddit", value: "red" },
            { icon: "skype", text: "Skype", value: "sky" },
            { icon: "snapchat", text: "Snapchat", value: "sna" },
            { icon: "tumblr", text: "Tumblr", value: "tum" },
            { icon: "twitter", text: "Twitter", value: "twi" },
            { icon: "youtube", text: "Youtube", value: "you" },
            { icon: "globe", text: "Other website", value: "oth" },
        ]
        return (
            <Container>
                <Segment basic>
                    <Segment attached="top" styleName="style.headingBox">
                        <span>
                            <h3 styleName="style.heading">
                                Social media links
                            </h3>
                        </span>
                    </Segment>
                    <Segment textAlign="left" attached="bottom">
                        <Form>
                            <Form.Field>
                                <label>Site</label>
                                <Dropdown
                                    selection
                                    name="site"
                                    value={this.state.data.site}
                                    onChange={this.onChange}
                                    options={options}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    label="URL"
                                    onChange={this.handleChange}
                                    value={this.state.data.url}
                                    name="url"
                                    placeholder="Add URl ..."
                                />
                            </Form.Field>

                            <Form.Field>
                                <Button color="blue" onClick={this.addLink}>
                                    Add
                                </Button>
                            </Form.Field>
                        </Form>

                        <LinkList
                            data={this.state.links}
                            handleUpdateDelete={this.handleUpdateDelete}
                        />
                    </Segment>
                </Segment>
            </Container>
        )
    }
}
export default AddMemberDetails
