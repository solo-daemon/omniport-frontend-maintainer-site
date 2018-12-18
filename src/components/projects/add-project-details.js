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
    Label,
} from "semantic-ui-react"
import { getCookie } from "formula_one"

import common from "../../css/page-common-styles.css"

class AddProjectDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [],
            data: {
                slug: "",
                title: "",
                shortDescription: "",
                longDescription: "",
                image: "",
                members: [],
            },

            slug: false,
            title: false,
        }
        this.handlePost = this.handlePost.bind(this)
        this.fileChange = this.fileChange.bind(this)
    }

    componentDidMount() {
        const URL = "/api/maintainer_site/active_maintainer_info"

        axios.get(URL).then(res => {
            this.setState(
                {
                    profile: res.data,
                },
                () => {}
            )
        })
    }
    fileChange = e => {
        this.setState({
            [e.target.name]: e.target.files[0],
        })
    }
    handlePost() {
        const { profile, data, slug, title, uploadedFile } = this.state
        if (
            data.longDescription &&
            data.shortDescription &&
            data.slug &&
            data.title &&
            data.members &&
            uploadedFile
        ) {
            var formData = new FormData()
            formData.append("slug", data.slug)
            formData.append("title", data.title)
            formData.append("short_description", data.shortDescription)
            formData.append("long_description", data.longDescription)
            formData.append("members", data.members)

            uploadedFile ? formData.append("image", uploadedFile) : void 0
            let headers = {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": getCookie("csrftoken"),
            }
            const that = this

            axios({
                method: "post",
                url: "/api/maintainer_site/projects/",
                data: formData,
                headers: headers,
            })
                .then(function(response) {
                    //handle success
                    console.log(response)
                    that.props.history.push("../projects/")
                })
                .catch(function(response) {
                    //handle error
                    console.log(response.response.data)

                    if (response.response.data.slug != null) {
                        that.setState({ slug: true })
                    } else {
                        that.setState({ slug: false })
                    }
                    if (response.response.data.title != null) {
                        that.setState({ title: true })
                    } else {
                        that.setState({ title: false })
                    }
                })
        }
    }

    render() {
        const maintainers = this.state.profile.map(user => ({
            image: { avatar: true, src: user.normieImage },
            value: user.maintainer,
            text: user.fullName.fullName,
        }))

        return (
            <Container styleName="common.margin">
                <Header as="h1">Add Project Details</Header>
                <Form>
                    <Form.Field required>
                        <label>Title:</label>
                        <input
                            placeholder="Title for the project"
                            name="title"
                            onChange={event => {
                                this.state.data.title = event.target.value
                            }}
                        />
                        {this.state.title && (
                            <Label color="red" pointing>
                                Title with that name already exists
                            </Label>
                        )}
                    </Form.Field>

                    <Form.Field required>
                        <label>Slug:</label>
                        <input
                            placeholder="Slug for the project"
                            onChange={event => {
                                this.state.data.slug = event.target.value
                            }}
                        />
                        {this.state.slug && (
                            <Label color="red" pointing>
                                Slug with that name already exists
                            </Label>
                        )}
                    </Form.Field>

                    <Form.Field
                        control={TextArea}
                        label="Short Description:"
                        required
                        placeholder="Short Description for the project..."
                        onChange={event => {
                            this.state.data.shortDescription =
                                event.target.value
                        }}
                    />

                    <Form.Field
                        control={TextArea}
                        label="Content:"
                        required
                        placeholder="Long Description for the project..."
                        style={{ minHeight: 150 }}
                        onChange={event => {
                            this.state.data.longDescription = event.target.value
                        }}
                    />
                    {/* <TinyMCE
                        content="<p>This is the initial content of the editor</p>"
                        config={{
                            plugins: "autolink link image lists print preview",
                            toolbar:
                                "undo redo | bold italic | alignleft aligncenter alignright",
                        }}
                        onChange={this.handleEditorChange}
                    /> */}
                    <Form.Dropdown
                        placeholder="Select the Project Makers"
                        fluid
                        search
                        required
                        multiple
                        selection
                        label="Maintainers:"
                        options={maintainers}
                        onChange={(event, { value }) => {
                            const temp = { value }
                            this.state.data.members = Number(temp.value)
                        }}
                    />
                    <Form.Field required>
                        <label>Image:</label>
                        <input
                            type="file"
                            onChange={this.fileChange}
                            name={"uploadedFile"}
                        />
                    </Form.Field>
                    <Button type="submit" onClick={this.handlePost}>
                        Add Project
                    </Button>
                </Form>
            </Container>
        )
    }
}
export default AddProjectDetails
