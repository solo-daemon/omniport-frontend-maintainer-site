import React, { Component, Fragment } from "react"
import axios from "axios"
import { getCookie, CustomCropper } from "formula_one"

import {
    Form,
    Button,
    Dropdown,
    Container,
    Header,
    TextArea,
    Segment,
    Label,
    Loader,
    Modal,
    Image,
} from "semantic-ui-react"

import styles from "../../css/team/add-member-details.css"
import common from "../../css/page-common-styles.css"

import getCroppedImg from "../getCroppedImage"
import LinkList from "./linkList"

const initial = {
    data: { site: "git", url: "" },
}
class AddMemberDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: {},
            data: initial.data,
            disabled: false,
            method: "post",
            URL: "/api/maintainer_site/logged_maintainer/",
            handle: "",
            shortBio: "",
            links: [],
            skills: { array: [], entry: "" },
            linksId: [],
            errors: {
                music: "",
                book: "",
                film: "",
                game: "",
                hobbies: "",
                skills: "",
            },

            uploadedFileDank: {
                imageSrc: null,
                pixelCrop: null,
                crop: {
                    aspect: 1,
                },
            },
            uploadedFileNormie: {
                imageSrc: null,
                pixelCrop: null,
                crop: {
                    aspect: 1,
                },
            },

            prevUploadedFileD: null,
            prevUploadedFileN: null,
            errorHandle: false,
            errorShortBio: false,
            errorUrl: false,
            techSkillsOptions: [],
            socialLinksOptions: [],
            loaded: false,
            normieOpen: false,
            dankOpen: false,
        }
    }
    componentDidMount() {
        const URL1 = `/api/maintainer_site/logged_maintainer`
        const URL2 = `/api/maintainer_site/tech_skills`

        axios.all([axios.get(URL1), axios.get(URL2), axios.options(URL1)]).then(
            axios.spread((memberRes, techSkillsRes, linksRes) => {
                this.setState(
                    {
                        profile: memberRes.data,
                        techSkillsOptions: techSkillsRes.data,
                        socialLinksOptions:
                            linksRes.data.actions.POST.socialInformation.child
                                .children.links.child.children.site.choices,
                    },
                    () => {
                        if (this.state.profile.length) {
                            this.setState({ method: "patch" })
                            this.setState({
                                URL:
                                    "/api/maintainer_site/logged_maintainer/" +
                                    this.state.profile[0].handle +
                                    "/",
                            })
                            this.setState({
                                handle: this.state.profile[0].handle,
                                shortBio: this.state.profile[0].shortBiography,
                                skills: {
                                    array: this.state.profile[0].technicalSkills
                                        ? this.state.profile[0].technicalSkills.split(
                                              ","
                                          )
                                        : [],
                                    entry: "",
                                },
                                prevUploadedFileD: this.state.profile[0]
                                    .dankImage,
                                prevUploadedFileN: this.state.profile[0]
                                    .normieImage,
                            })
                            axios
                                .get(`/api/maintainer_site/social_link`)
                                .then(res => {
                                    var ids = []
                                    var arra = []
                                    for (let i = 0; i < res.data.length; i++) {
                                        ids.push(res.data[i].id)
                                        var obj = { site: "", url: "" }
                                        obj.site = res.data[i].site
                                        obj.url = res.data[i].url
                                        arra.push(obj)
                                    }
                                    this.setState({
                                        linksId: ids,
                                        links: arra,
                                    })
                                })
                            this.setState({ loaded: true })
                        } else {
                            axios
                                .get(`/api/maintainer_site/social_link`)
                                .then(res => {
                                    var ids = []
                                    var arra = []
                                    for (let i = 0; i < res.data.length; i++) {
                                        ids.push(res.data[i].id)
                                        var obj = { site: "", url: "" }
                                        obj.site = res.data[i].site
                                        obj.url = res.data[i].url
                                        arra.push(obj)
                                    }
                                    this.setState(
                                        {
                                            linksId: ids,
                                            links: arra,
                                        },
                                        () => this.setState({ loaded: true })
                                    )
                                })
                        }
                    }
                )
            })
        )
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
    handleChangeSkills = e => {
        const value = e.target.value
        this.setState({ skills: { ...this.state.skills, entry: value } })
    }
    addLinkSkills = () => {
        var arr = this.state.skills.array
        this.state.skills.entry && arr.push(this.state.skills.entry)
        this.setState({
            skills: { array: arr, entry: "" },
        })
    }
    handleUpdateDeleteSkills = e => {
        var name = "skills"
        var id = e.target.id
        var arr = []
        for (let i = 0; i < this.state[name].array.length; i++) {
            if (i != id) {
                arr.push(this.state[name].array[i])
            }
        }
        this.setState({
            [name]: { array: arr, entry: "" },
        })
    }

    addLink = e => {
        const that = this
        that.setState({ errorUrl: false })
        let headers = {
            "X-CSRFToken": getCookie("csrftoken"),
        }
        axios({
            method: "post",
            url: "/api/maintainer_site/social_link/",
            data: this.state.data,
            headers: headers,
        })
            .then(response => {
                //handle success
                var arr = this.state.links
                arr.push(this.state.data)
                this.setState({ links: arr, data: initial.data })

                var arr1 = this.state.linksId
                arr1.push(response.data.id)
                this.setState({ linksId: arr1 })
            })
            .catch(function(response) {
                //handle error
                if (response.response.data.url != null) {
                    that.setState({ errorUrl: true })
                }
            })
    }

    handleUpdateDelete = e => {
        var id1 = e.target.id
        var arr = []
        for (let i = 0; i < this.state.links.length; i++) {
            if (i != id1) {
                arr.push(this.state.links[i])
            }
        }

        let headers = {
            "X-CSRFToken": getCookie("csrftoken"),
        }

        axios({
            method: "delete",
            url:
                "/api/maintainer_site/social_link/" +
                this.state.linksId[id1] +
                "/",
            headers: headers,
        }).then(response => {})

        var arr1 = []
        for (let i = 0; i < this.state.linksId.length; i++) {
            if (i != id1) {
                arr1.push(this.state.linksId[i])
            }
        }

        this.setState({
            data: initial.data,
            links: arr,
            linksId: arr1,
        })
    }

    fileChange = async e => {
        const name = e.target.name
        const imageDataUrl = await readFile(e.target.files[0])
        console.log(this.state.uploadedFileNormie)
        this.setState({
            [name]: {
                ...this.state[name],
                imageSrc: imageDataUrl,
            },
        })
    }

    showCroppedImage = async name => {
        const croppedImage = await getCroppedImg(
            this.state[name].imageSrc,
            this.state[name].pixelCrop
        )
        var file = dataURLtoFile(croppedImage, "image.png")
        this.setState({
            [name]: {
                ...this.state[name],
                croppedImage: file,
            },
        })
    }

    handlePost = () => {
        const {
            handle,
            shortBio,
            links,
            skills,
            uploadedFileDank,
            uploadedFileNormie,
            prevUploadedFileD,
            prevUploadedFileN,
        } = this.state

        const uploadedFileD = uploadedFileDank.imageSrc
            ? uploadedFileDank.croppedImage
            : null
        const uploadedFileN = uploadedFileNormie.imageSrc
            ? uploadedFileNormie.croppedImage
            : null
        const skillsArray = skills.array

        if (
            (uploadedFileD || prevUploadedFileD) &&
            (uploadedFileN || prevUploadedFileN) &&
            handle &&
            shortBio
        ) {
            var formData = new FormData()
            formData.append("handle", handle)
            formData.append("short_biography", shortBio)
            formData.append("social_information", links)

            formData.append("technical_skills", skillsArray)

            if (uploadedFileN && uploadedFileN.type) {
                if (uploadedFileN.type.substring(0, 5) == "image") {
                    formData.append("normie_image", uploadedFileN)
                }
            }

            if (uploadedFileD && uploadedFileD.type) {
                if (uploadedFileD.type.substring(0, 5) == "image") {
                    formData.append("dank_image", uploadedFileD)
                }
            }

            let headers = {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": getCookie("csrftoken"),
            }

            const that = this
            that.setState({ errorHandle: false })
            that.setState({ errorShortBio: false })
            axios({
                method: this.state.method,
                url: this.state.URL,
                data: formData,
                headers: headers,
            })
                .then(function(response) {
                    // handle success
                    that.props.history.push("../team/")
                })
                .catch(function(response) {
                    //handle error
                    if (response.response.data.handle != null) {
                        that.setState({ errorHandle: true })
                    }
                    if (response.response.data.shortBiography != null) {
                        that.setState({ errorShortBio: true })
                    }
                })
        }
    }

    handleClose = e => {
        let triggered = e.target.name
        console.log(triggered)
        if (triggered === "uploadedFileNormie") {
            this.setState({
                normieOpen: false,
            })
        } else if (triggered === "uploadedFileDank") {
            this.setState({
                dankOpen: false,
            })
        }
    }

    handleOpen = e => {
        let triggered = e.target.name
        console.log(triggered)
        if (triggered === "uploadedFileNormie") {
            this.setState({
                normieOpen: true,
            })
        } else if (triggered === "uploadedFileDank") {
            this.setState({
                dankOpen: true,
            })
        }
    }

    render() {
        //Computation to get all social Links from options functions and for other using globe icon
        const options = []
        const linkListOptions = {}
        for (let i = 0; i < this.state.socialLinksOptions.length; i++) {
            let icon = this.state.socialLinksOptions[
                i
            ].displayName.toLowerCase()
            if (this.state.socialLinksOptions[i].value == "oth") {
                icon = "globe"
            }
            options.push({
                text: this.state.socialLinksOptions[i].displayName,
                value: this.state.socialLinksOptions[i].value,
                icon: icon,
            })
            linkListOptions[this.state.socialLinksOptions[i].value] = icon
        }

        if (this.state.loaded) {
            return (
                <div>
                    <Container styleName="common.margin">
                        <Header as="h1">Add Member Details</Header>
                        <Form>
                            <Form.Field required>
                                <label>Handle Name</label>
                                <input
                                    placeholder="Handle Name"
                                    onChange={event => {
                                        this.setState({
                                            handle: event.target.value,
                                        })
                                    }}
                                    value={this.state.handle}
                                />
                                {this.state.errorHandle && (
                                    <Label color="red" pointing>
                                        This Handle already exists
                                    </Label>
                                )}
                            </Form.Field>

                            <Form.Field
                                required
                                control={TextArea}
                                label="Short Bio"
                                placeholder="Tell us more about you..."
                                onChange={event => {
                                    this.setState({
                                        shortBio: event.target.value,
                                    })
                                }}
                                value={this.state.shortBio}
                            />
                            {this.state.errorShortBio && (
                                <Label color="red" pointing>
                                    Maximum 255 characters allowed
                                </Label>
                            )}
                        </Form>

                        <Segment
                            attached="top"
                            styleName="styles.headingBox"
                            fluid
                        >
                            <span>
                                <h3>Social media links</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom" fluid>
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
                                    {this.state.errorUrl && (
                                        <Label color="red" pointing>
                                            Enter a valid URL
                                        </Label>
                                    )}
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="music"
                                        onClick={this.addLink}
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>

                            {this.state.links.length > 0 && (
                                <LinkList
                                    data={this.state.links}
                                    handleUpdateDelete={this.handleUpdateDelete}
                                    linkListOptions={linkListOptions}
                                />
                            )}
                        </Segment>

                        <Segment attached="top">
                            <span>
                                <h3>Tech Skills</h3>
                            </span>
                        </Segment>
                        <Segment textAlign="left" attached="bottom">
                            Add your tech skills in a punctuated form. For
                            example, 'Adobe Illustrator' or 'Python'. You may
                            visit
                            <a href="https://simpleicons.org" target="_blank">
                                {" "}
                                Simple Icons{" "}
                            </a>
                            for reference.
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        onChange={this.handleChangeSkills}
                                        value={this.state.skills.entry}
                                        name="skills"
                                        placeholder="Add your Skills ..."
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <Button
                                        color="blue"
                                        name="skills"
                                        onClick={this.addLinkSkills}
                                    >
                                        Add
                                    </Button>
                                </Form.Field>
                            </Form>
                            {this.state.skills.array.length > 0 && (
                                <LinkList
                                    data={this.state.skills.array}
                                    handleUpdateDelete={
                                        this.handleUpdateDeleteSkills
                                    }
                                    name="skills"
                                />
                            )}
                        </Segment>

                        <Form>
                            <Form.Field required>
                                <label>Normie Image:</label>
                                <input
                                    type="file"
                                    onChange={this.fileChange}
                                    name="uploadedFileNormie"
                                    onClick={this.handleOpen}
                                />
                            </Form.Field>
                            <Modal
                                size="tiny"
                                open={this.state.normieOpen}
                                onClose={this.handleClose}
                            >
                                <Modal.Header>
                                    Crop <em>Normie</em> Image
                                </Modal.Header>
                                <Modal.Content image>
                                    {this.state.uploadedFileNormie.imageSrc && (
                                        <Fragment>
                                            <CustomCropper
                                                src={
                                                    this.state
                                                        .uploadedFileNormie
                                                        .imageSrc
                                                }
                                                crop={
                                                    this.state
                                                        .uploadedFileNormie.crop
                                                }
                                                onChange={crop => {
                                                    this.setState({
                                                        uploadedFileNormie: {
                                                            ...this.state
                                                                .uploadedFileNormie,
                                                            crop: crop,
                                                        },
                                                    })
                                                }}
                                                onComplete={(
                                                    crop,
                                                    pixelCrop
                                                ) => {
                                                    this.state.uploadedFileNormie.pixelCrop = pixelCrop
                                                    this.showCroppedImage(
                                                        "uploadedFileNormie"
                                                    )
                                                }}
                                            />
                                        </Fragment>
                                    )}
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button
                                        positive
                                        type="submit"
                                        onClick={this.handleClose}
                                        name="uploadedFileNormie"
                                    >
                                        Done
                                    </Button>
                                </Modal.Actions>
                            </Modal>

                            {this.state.prevUploadedFileN && (
                                <Modal
                                    trigger={
                                        <Button
                                            styleName="styles.previous-upload-button"
                                            basic
                                            color="blue"
                                        >
                                            See previous upload
                                        </Button>
                                    }
                                    size="tiny"
                                    dimmer="blurring"
                                >
                                    <Modal.Header>
                                        Previous <em>Normie</em> Image
                                    </Modal.Header>
                                    <Modal.Content image>
                                        <Image
                                            src={this.state.prevUploadedFileN}
                                        />
                                    </Modal.Content>
                                </Modal>
                            )}

                            <Form.Field required>
                                <label>Dank Image:</label>
                                <input
                                    type="file"
                                    onChange={this.fileChange}
                                    name="uploadedFileDank"
                                    onClick={this.handleOpen}
                                />
                            </Form.Field>
                            <Modal
                                size="tiny"
                                open={this.state.dankOpen}
                                onClose={this.handleClose}
                            >
                                <Modal.Header>
                                    Crop <em>Dank</em> Image
                                </Modal.Header>
                                <Modal.Content image>
                                    {this.state.uploadedFileDank.imageSrc && (
                                        <Fragment>
                                            <CustomCropper
                                                src={
                                                    this.state.uploadedFileDank
                                                        .imageSrc
                                                }
                                                crop={
                                                    this.state.uploadedFileDank
                                                        .crop
                                                }
                                                onChange={crop => {
                                                    this.setState({
                                                        uploadedFileDank: {
                                                            ...this.state
                                                                .uploadedFileDank,
                                                            crop: crop,
                                                        },
                                                    })
                                                }}
                                                onComplete={(
                                                    crop,
                                                    pixelCrop
                                                ) => {
                                                    this.state.uploadedFileDank.pixelCrop = pixelCrop
                                                    this.showCroppedImage(
                                                        "uploadedFileDank"
                                                    )
                                                }}
                                            />
                                        </Fragment>
                                    )}
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button
                                        positive
                                        type="submit"
                                        name="uploadedFileDank"
                                        onClick={this.handleClose}
                                    >
                                        Done
                                    </Button>
                                </Modal.Actions>
                            </Modal>

                            {this.state.prevUploadedFileD && (
                                <Modal
                                    trigger={
                                        <Button
                                            styleName="styles.previous-upload-button"
                                            basic
                                            color="blue"
                                        >
                                            See previous upload
                                        </Button>
                                    }
                                    dimmer="blurring"
                                    size="tiny"
                                >
                                    <Modal.Header>
                                        Previous <em>Dank</em> Image
                                    </Modal.Header>
                                    <Modal.Content image>
                                        <Image
                                            src={this.state.prevUploadedFileD}
                                        />
                                    </Modal.Content>
                                </Modal>
                            )}

                            <Button
                                onClick={this.handlePost}
                                positive
                                styleName="styles.submit-button"
                            >
                                Add Member
                            </Button>
                        </Form>
                        <Segment basic />
                    </Container>
                </div>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}
function readFile(file) {
    return new Promise(resolve => {
        const reader = new FileReader()
        reader.addEventListener("load", () => resolve(reader.result), false)
        reader.readAsDataURL(file)
    })
}

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, { type: mime })
}
export default AddMemberDetails
