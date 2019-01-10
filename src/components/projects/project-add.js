import React, { Component } from "react"

import axios from "axios"
import {
    Form,
    Loader,
    Button,
    Container,
    Header,
    TextArea,
    Segment,
    Label,
} from "semantic-ui-react"
import { getCookie } from "formula_one"
import { Editor } from "@tinymce/tinymce-react"
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
            loaded: false,
        }
        this.handlePost = this.handlePost.bind(this)
        this.handleEditorChange = this.handleEditorChange.bind(this)
        this.fileChange = this.fileChange.bind(this)
    }

    componentDidMount() {
        const URL = "/api/maintainer_site/active_maintainer_info"

        axios.get(URL).then(res => {
            this.setState(
                {
                    profile: res.data,
                },
                () => {
                    this.setState({ loaded: true })
                }
            )
        })
    }
    fileChange = e => {
        this.setState({
            [e.target.name]: e.target.files[0],
        })
    }
    handleEditorChange(content) {
        this.state.data.longDescription = content
    }
    handlePost() {
        const { profile, data, slug, title, loaded, uploadedFile } = this.state
        console.log(data)
        console.log(uploadedFile)
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
                    that.props.history.push("../projects/")
                })
                .catch(function(response) {
                    //handle error

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
            value: user.maintainer.id,
            text: user.maintainer.person.fullName,
        }))
        if (this.state.loaded) {
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
                        <Form.Field label="Content:" required />
                        <Editor
                            init={{
                                plugins:
                                    "contextmenu " +
                                    " lists link table image codesample charmap " +
                                    " fullscreen " +
                                    " wordcount",
                                contextmenu:
                                    "bold italic underline strikethrough | " +
                                    "superscript subscript | " +
                                    "link",
                                toolbar1:
                                    "formatselect | " +
                                    "bold italic underline strikethrough blockquote removeformat | " +
                                    "alignleft aligncenter alignright alignjustify",
                                toolbar2:
                                    "undo redo | " +
                                    "bullist numlist outdent indent | " +
                                    "link unlink | " +
                                    "table image codesample charmap | " +
                                    "fullscreen",
                                theme: "modern",
                                height: 512,
                                width: "auto",
                                menubar: false,
                                branding: false,
                            }}
                            onEditorChange={this.handleEditorChange}
                        />
                        <Segment basic />
                        <Form.Dropdown
                            placeholder="Select the Project Makers"
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
                    <Segment basic />
                </Container>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}
export default AddProjectDetails
