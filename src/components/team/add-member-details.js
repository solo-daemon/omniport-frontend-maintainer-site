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
    Label,
} from "semantic-ui-react"
import style from "../../css/team/add-member-details.css"
import LinkList from "./linkList"
import { getCookie } from "formula_one"
const initial = {
    data: { site: "git", url: "" },
}
class AddMemberDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: [],
            data: initial.data,

            handle: "",
            shortBio: "",
            links: [],
            skills: [],
            music: { array: [], entry: "" },
            book: { array: [], entry: "" },
            film: { array: [], entry: "" },
            game: { array: [], entry: "" },
            hobbies: { array: [], entry: "" },
            errors: {
                music: "",
                book: "",
                film: "",
                game: "",
                hobbies: "",
                skills: "",
            },
            error_handle: false,
            error_shortBio: false,
        }
        this.fileChange = this.fileChange.bind(this)
        this.handlePost = this.handlePost.bind(this)
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
    handleChange2 = e => {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({ [name]: { ...this.state[name], entry: value } })
    }
    addLink2 = e => {
        const name = e.target.name
        if (this.state[name].entry.length <= 63) {
            var arr = this.state[name].array
            var temp = { site: [name], url: this.state[name].entry }
            arr.push(temp)
            this.setState({ [name]: { array: arr, entry: "" } })
        }
    }
    addLink = e => {
        var arr = this.state.links
        arr.push(this.state.data)
        this.setState({ links: arr, data: initial.data })
    }
    handleUpdateDelete = e => {
        var id1 = e.target.id

        var arr = []
        for (let i = 0; i < this.state.links.length; i++) {
            if (i != id1) {
                arr.push(this.state.links[i])
            }
        }

        this.setState({
            data: initial.data,
            links: arr,
        })
    }
    handleUpdateDelete2 = e => {
        var name = e.target.getAttribute("pop")

        var id = e.target.id
        var arr = []
        for (let i = 0; i < this.state[name].array.length; i++) {
            if (i != id) {
                arr.push(this.state[name].array[i])
            }
        }
        this.setState({
            [name]: { array: arr },
        })
    }
    fileChange = e => {
        this.setState({
            [e.target.name]: e.target.files[0],
        })
    }
    handlePost() {
        console.log("fljsdalkfjsd")
        console.log(this.state.links)

        const {
            handle,
            shortBio,
            links,
            skills,
            uploadedFileN,
            uploadedFileD,
        } = this.state

        var book = [],
            music = [],
            film = [],
            game = [],
            hobbies = []

        for (let i = 0; i < this.state.book.array.length; i++) {
            book.push(this.state.book.array[i].url)
        }
        for (let i = 0; i < this.state.music.array.length; i++) {
            music.push(this.state.music.array[i].url)
        }
        for (let i = 0; i < this.state.film.array.length; i++) {
            film.push(this.state.film.array[i].url)
        }
        for (let i = 0; i < this.state.game.array.length; i++) {
            game.push(this.state.game.array[i].url)
        }
        for (let i = 0; i < this.state.hobbies.array.length; i++) {
            hobbies.push(this.state.hobbies.array[i].url)
        }
        if (
            uploadedFileD &&
            uploadedFileN &&
            handle &&
            shortBio &&
            links &&
            book.length &&
            music.length &&
            film.length &&
            game.length &&
            hobbies.length
        ) {
            var formData = new FormData()
            formData.append("handle", handle)
            formData.append("short_biography", shortBio)
            formData.append("social_information", links)

            formData.append("favourite_music", music)
            formData.append("favourite_literature", book)
            formData.append("technical_skills", skills)
            formData.append("favourite_video", film)
            formData.append("favourite_games", game)
            formData.append("favourite_hobbies", hobbies)

            formData.append("normie_image", uploadedFileN)
            formData.append("dank_image", uploadedFileD)

            let headers = {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": getCookie("csrftoken"),
            }

            const that = this
            axios({
                method: "post",
                url: "/api/maintainer_site/active_maintainer_info/",
                data: formData,
                headers: headers,
            })
                .then(function(response) {
                    //handle success
                    console.log(response)
                    that.props.history.push("../team/")
                })
                .catch(function(response) {
                    //handle error
                    if (response.response.data.handle != null) {
                        that.setState({ error_handle: true })
                    } else {
                        that.setState({ error_handle: false })
                    }
                    if (response.response.data.shortBiography != null) {
                        that.setState({ error_shortBio: true })
                    } else {
                        that.setState({ error_shortBio: false })
                    }
                    console.log(response.response.data)
                })
        }
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
        const ll = [
            {
                text: "amazonwebservices",
                value: "amazonwebservices",
                label: { className: "devicon-amazonwebservices-original" },
            },
            {
                text: "android",
                value: "android",
                label: { className: "devicon-android-plain" },
            },
            {
                text: "Angular.js",
                value: "angular.js",
                label: { className: "devicon-angularjs-plain" },
            },
            {
                text: "apache",
                value: "apache",
                label: { className: "devicon-apache-plain" },
            },
            {
                text: "appcelerator",
                value: "appcelerator",
                label: { className: "devicon-appcelerator-original" },
            },
            {
                text: "apple",
                value: "apple",
                label: { className: "devicon-apple-original" },
            },
            {
                text: "atom",
                value: "atom",
                label: { className: "devicon-atom-original" },
            },
            {
                text: "babel",
                value: "babel",
                label: { className: "devicon-babel-plain" },
            },
            {
                text: "backbonejs",
                value: "backbonejs",
                label: { className: "devicon-backbonejs-plain" },
            },

            {
                text: "bitbucket",
                value: "bitbucket",
                label: { className: "devicon-bitbucket-plain" },
            },
            {
                text: "bootstrap",
                value: "bootstrap",
                label: { className: "devicon-bootstrap-plain" },
            },
            {
                text: "bower",
                value: "bower",
                label: { className: "devicon-bower-plain" },
            },
            { text: "c", value: "c", label: { className: "devicon-c-plain" } },

            {
                text: "chrome",
                value: "chrome",
                label: { className: "devicon-chrome-plain" },
            },
            {
                text: "codeigniter",
                value: "codeigniter",
                label: { className: "devicon-codeigniter-plain" },
            },
            {
                text: "coffeescript",
                value: "coffeescript",
                label: { className: "devicon-coffeescript-original" },
            },
            {
                text: "confluence",
                value: "confluence",
                label: { className: "devicon-confluence-plain" },
            },
            {
                text: "couchdb",
                value: "couchdb",
                label: { className: "devicon-couchdb-plain" },
            },
            {
                text: "csharp",
                value: "csharp",
                label: { className: "devicon-csharp-plain" },
            },
            {
                text: "css3",
                value: "css3",
                label: { className: "devicon-css3-plain" },
            },
            {
                text: "cucumber",
                value: "cucumber",
                label: { className: "devicon-cucumber-plain" },
            },
            {
                text: "d3js",
                value: "d3js",
                label: { className: "devicon-d3js-plain" },
            },
            {
                text: "debian",
                value: "debian",
                label: { className: "devicon-debian-plain" },
            },
            {
                text: "devicon",
                value: "devicon",
                label: { className: "devicon-devicon-plain" },
            },
            {
                text: "django",
                value: "django",
                label: { className: "devicon-django-plain" },
            },
            {
                text: "docker",
                value: "docker",
                label: { className: "devicon-docker-plain" },
            },
            {
                text: "doctrine",
                value: "doctrine",
                label: { className: "devicon-doctrine-plain" },
            },
            {
                text: "dot-net",
                value: "dot-net",
                label: { className: "devicon-dot-net-plain" },
            },
            {
                text: "drupal",
                value: "drupal",
                label: { className: "devicon-drupal-plain" },
            },
            {
                text: "electron",
                value: "electron",
                label: { className: "devicon-electron-original" },
            },
            {
                text: "elm",
                value: "elm",
                label: { className: "devicon-elm-plain" },
            },
            {
                text: "ember",
                value: "ember",
                label: { className: "devicon-ember-original-wordmark" },
            },
            {
                text: "erlang",
                value: "erlang",
                label: { className: "devicon-erlang-plain" },
            },
            {
                text: "express",
                value: "express",
                label: { className: "devicon-express-original" },
            },
            {
                text: "facebook",
                value: "facebook",
                label: { className: "devicon-facebook-plain" },
            },
            {
                text: "firefox",
                value: "firefox",
                label: { className: "devicon-firefox-plain" },
            },
            {
                text: "foundation",
                value: "foundation",
                label: { className: "devicon-foundation-plain" },
            },
            {
                text: "gatling",
                value: "gatling",
                label: { className: "devicon-gatling-plain" },
            },
            {
                text: "gimp",
                value: "gimp",
                label: { className: "devicon-gimp-plain" },
            },
            {
                text: "git",
                value: "git",
                label: { className: "devicon-git-plain" },
            },
            {
                text: "github",
                value: "github",
                label: { className: "devicon-github-plain" },
            },
            {
                text: "gitlab",
                value: "gitlab",
                label: { className: "devicon-gitlab-plain" },
            },
            {
                text: "go",
                value: "go",
                label: { className: "devicon-go-plain" },
            },
            {
                text: "google",
                value: "google",
                label: { className: "devicon-google-plain" },
            },
            {
                text: "gradle",
                value: "gradle",
                label: { className: "devicon-gradle-plain" },
            },
            {
                text: "grunt",
                value: "grunt",
                label: { className: "devicon-grunt-plain" },
            },
            {
                text: "gulp",
                value: "gulp",
                label: { className: "devicon-gulp-plain" },
            },
            {
                text: "handlebars",
                value: "handlebars",
                label: { className: "devicon-handlebars-plain" },
            },
            {
                text: "heroku",
                value: "heroku",
                label: { className: "devicon-heroku-original" },
            },
            {
                text: "html5",
                value: "html5",
                label: { className: "devicon-html5-plain" },
            },
            {
                text: "ie10",
                value: "ie10",
                label: { className: "devicon-ie10-original" },
            },
            {
                text: "illustrator",
                value: "illustrator",
                label: { className: "devicon-illustrator-plain" },
            },
            {
                text: "inkscape",
                value: "inkscape",
                label: { className: "devicon-inkscape-plain" },
            },
            {
                text: "intellij",
                value: "intellij",
                label: { className: "devicon-intellij-plain" },
            },
            {
                text: "ionic",
                value: "ionic",
                label: { className: "devicon-ionic-original" },
            },
            {
                text: "java",
                value: "java",
                label: { className: "devicon-java-plain" },
            },
            {
                text: "jasmine",
                value: "jasmine",
                label: { className: "devicon-jasmine-plain" },
            },
            {
                text: "javascript",
                value: "javascript",
                label: { className: "devicon-javascript-plain" },
            },
            {
                text: "jeet",
                value: "jeet",
                label: { className: "devicon-jeet-plain" },
            },
            {
                text: "jetbrains",
                value: "jetbrains",
                label: { className: "devicon-jetbrains-plain" },
            },
            {
                text: "jquery",
                value: "jquery",
                label: { className: "devicon-jquery-plain" },
            },
            {
                text: "krakenjs",
                value: "krakenjs",
                label: { className: "devicon-krakenjs-plain" },
            },
            {
                text: "laravel",
                value: "laravel",
                label: { className: "devicon-laravel-plain" },
            },
            {
                text: "less",
                value: "less",
                label: { className: "devicon-less-plain-wordmark" },
            },
            {
                text: "linkedin",
                value: "linkedin",
                label: { className: "devicon-linkedin-plain" },
            },
            {
                text: "linux",
                value: "linux",
                label: { className: "devicon-linux-plain" },
            },
            {
                text: "meteor",
                value: "meteor",
                label: { className: "devicon-meteor-plain" },
            },
            {
                text: "mocha",
                value: "mocha",
                label: { className: "devicon-mocha-plain" },
            },
            {
                text: "mongodb",
                value: "mongodb",
                label: { className: "devicon-mongodb-plain" },
            },
            {
                text: "moodle",
                value: "moodle",
                label: { className: "devicon-moodle-plain" },
            },
            {
                text: "mysql",
                value: "mysql",
                label: { className: "devicon-mysql-plain" },
            },
            {
                text: "nginx",
                value: "nginx",
                label: { className: "devicon-nginx-original" },
            },
            {
                text: "nodejs",
                value: "nodejs",
                label: { className: "devicon-nodejs-plain" },
            },
            {
                text: "nodewebkit",
                value: "nodewebkit",
                label: { className: "devicon-nodewebkit-plain" },
            },
            // {
            //     text: "npm",
            //     value: "npm",
            //     label: { className: "devicon-npm-original-wordmark" },
            // },
            {
                text: "oracle",
                value: "oracle",
                label: { className: "devicon-oracle-original" },
            },
            {
                text: "photoshop",
                value: "photoshop",
                label: { className: "devicon-photoshop-plain" },
            },
            {
                text: "php",
                value: "php",
                label: { className: "devicon-php-plain" },
            },
            {
                text: "phpstorm",
                value: "phpstorm",
                label: { className: "devicon-phpstorm-plain" },
            },
            {
                text: "protractor",
                value: "protractor",
                label: { className: "devicon-protractor-plain" },
            },
            {
                text: "postgresql",
                value: "postgresql",
                label: { className: "devicon-postgresql-plain" },
            },
            {
                text: "python",
                value: "python",
                label: { className: "devicon-python-plain" },
            },
            {
                text: "pycharm",
                value: "pycharm",
                label: { className: "devicon-pycharm-plain" },
            },
            {
                text: "rails",
                value: "rails",
                label: { className: "devicon-rails-plain" },
            },
            {
                text: "react",
                value: "react",
                label: { className: "devicon-react-original" },
            },
            {
                text: "redhat",
                value: "redhat",
                label: { className: "devicon-redhat-plain" },
            },
            {
                text: "redis",
                value: "redis",
                label: { className: "devicon-redis-plain" },
            },
            {
                text: "ruby",
                value: "ruby",
                label: { className: "devicon-ruby-plain" },
            },
            {
                text: "rubymine",
                value: "rubymine",
                label: { className: "devicon-rubymine-plain" },
            },
            {
                text: "safari",
                value: "safari",
                label: { className: "devicon-safari-plain" },
            },
            {
                text: "sass",
                value: "sass",
                label: { className: "devicon-sass-original" },
            },
            {
                text: "sequelize",
                value: "sequelize",
                label: { className: "devicon-sequelize-plain" },
            },
            {
                text: "sketch",
                value: "sketch",
                label: { className: "devicon-sketch-line" },
            },
            {
                text: "slack",
                value: "slack",
                label: { className: "devicon-slack-plain" },
            },
            {
                text: "sourcetree",
                value: "sourcetree",
                label: { className: "devicon-sourcetree-plain" },
            },
            {
                text: "ssh",
                value: "ssh",
                label: { className: "devicon-ssh-plain" },
            },
            {
                text: "stylus",
                value: "stylus",
                label: { className: "devicon-stylus-original" },
            },
            {
                text: "swift",
                value: "swift",
                label: { className: "devicon-swift-plain" },
            },
            {
                text: "symfony",
                value: "symfony",
                label: { className: "devicon-symfony-original" },
            },
            {
                text: "tomcat",
                value: "tomcat",
                label: { className: "devicon-tomcat-line" },
            },
            {
                text: "travis",
                value: "travis",
                label: { className: "devicon-travis-plain" },
            },
            {
                text: "trello",
                value: "trello",
                label: { className: "devicon-trello-plain" },
            },
            {
                text: "twitter",
                value: "twitter",
                label: { className: "devicon-twitter-plain" },
            },
            {
                text: "typescript",
                value: "typescript",
                label: { className: "devicon-typescript-plain" },
            },
            {
                text: "ubuntu",
                value: "ubuntu",
                label: { className: "devicon-ubuntu-plain" },
            },
            {
                text: "vagrant",
                value: "vagrant",
                label: { className: "devicon-vagrant-plain" },
            },
            {
                text: "vim",
                value: "vim",
                label: { className: "devicon-vim-plain" },
            },
            {
                text: "visualstudio",
                value: "visualstudio",
                label: { className: "devicon-visualstudio-plain" },
            },
            {
                text: "vuejs",
                value: "vuejs",
                label: { className: "devicon-vuejs-plain" },
            },
            {
                text: "webpack",
                value: "webpack",
                label: { className: "devicon-webpack-plain" },
            },
            {
                text: "webstorm",
                value: "webstorm",
                label: { className: "devicon-webstorm-plain" },
            },
            {
                text: "windows8",
                value: "windows8",
                label: { className: "devicon-windows8-original" },
            },
            {
                text: "wordpress",
                value: "wordpress",
                label: { className: "devicon-wordpress-plain" },
            },
            // {
            //     text: "yarn",
            //     value: "yarn",
            //     label: { className: "devicon-yarn-plain" },
            // },
            {
                text: "yii",
                value: "yii",
                label: { className: "devicon-yii-plain" },
            },
            {
                text: "zend",
                value: "zend",
                label: { className: "devicon-zend-plain" },
            },
        ]
        return (
            <div>
                <Header as="h1">Add Member Details</Header>
                <Form>
                    <Form.Field required>
                        <label>Handle Name</label>
                        <input
                            placeholder="Handle Name"
                            onChange={event => {
                                this.state.handle = event.target.value
                            }}
                        />
                        {this.state.error_handle && (
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
                            this.state.shortBio = event.target.value
                        }}
                    />
                    {this.state.error_shortBio && (
                        <Label color="red" pointing>
                            Maximum 255 characters allowed
                        </Label>
                    )}
                </Form>

                <Segment basic fluid>
                    <Segment attached="top" styleName="style.headingBox" fluid>
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

                        <LinkList
                            data={this.state.links}
                            handleUpdateDelete={this.handleUpdateDelete}
                        />
                    </Segment>
                </Segment>
                <Segment basic>
                    <Segment attached="top">
                        <span>
                            <h3>Music</h3>
                        </span>
                    </Segment>
                    <Segment textAlign="left" attached="bottom">
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    onChange={this.handleChange2}
                                    value={this.state.music.entry}
                                    name="music"
                                    placeholder="Add Music preferences ..."
                                />
                                {this.state.music.entry.length > 63 && (
                                    <Label color="red" pointing>
                                        Maximum 63 characters are allowed only
                                    </Label>
                                )}
                            </Form.Field>

                            <Form.Field>
                                <Button
                                    color="blue"
                                    name="music"
                                    onClick={this.addLink2}
                                >
                                    Add
                                </Button>
                            </Form.Field>
                        </Form>

                        <LinkList
                            data={this.state.music.array}
                            handleUpdateDelete={this.handleUpdateDelete2}
                            name="music"
                        />
                    </Segment>
                </Segment>

                <Segment basic>
                    <Segment attached="top">
                        <span>
                            <h3>Literature</h3>
                        </span>
                    </Segment>
                    <Segment textAlign="left" attached="bottom">
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    onChange={this.handleChange2}
                                    value={this.state.book.entry}
                                    name="book"
                                    placeholder="Add Books that u read/like ..."
                                />
                                {this.state.book.entry.length > 63 && (
                                    <Label color="red" pointing>
                                        Maximum 63 characters are allowed only
                                    </Label>
                                )}
                            </Form.Field>

                            <Form.Field>
                                <Button
                                    color="blue"
                                    name="book"
                                    onClick={this.addLink2}
                                >
                                    Add
                                </Button>
                            </Form.Field>
                        </Form>

                        <LinkList
                            data={this.state.book.array}
                            handleUpdateDelete={this.handleUpdateDelete2}
                            name="book"
                        />
                    </Segment>
                </Segment>
                <Segment basic>
                    <Segment attached="top">
                        <span>
                            <h3>Movies/TV Series</h3>
                        </span>
                    </Segment>
                    <Segment textAlign="left" attached="bottom">
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    onChange={this.handleChange2}
                                    value={this.state.film.entry}
                                    name="film"
                                    placeholder="Add MOvies/Tv Series preferences ..."
                                />
                                {this.state.film.entry.length > 63 && (
                                    <Label color="red" pointing>
                                        Maximum 63 characters are allowed only
                                    </Label>
                                )}
                            </Form.Field>

                            <Form.Field>
                                <Button
                                    color="blue"
                                    name="film"
                                    onClick={this.addLink2}
                                >
                                    Add
                                </Button>
                            </Form.Field>
                        </Form>

                        <LinkList
                            data={this.state.film.array}
                            handleUpdateDelete={this.handleUpdateDelete2}
                            name="film"
                        />
                    </Segment>
                </Segment>

                <Segment basic>
                    <Segment attached="top">
                        <span>
                            <h3>Games You Play</h3>
                        </span>
                    </Segment>
                    <Segment textAlign="left" attached="bottom">
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    onChange={this.handleChange2}
                                    value={this.state.game.entry}
                                    name="game"
                                    placeholder="Add Your Games that u play ..."
                                />
                                {this.state.game.entry.length > 63 && (
                                    <Label color="red" pointing>
                                        Maximum 63 characters are allowed only
                                    </Label>
                                )}
                            </Form.Field>

                            <Form.Field>
                                <Button
                                    color="blue"
                                    name="game"
                                    onClick={this.addLink2}
                                >
                                    Add
                                </Button>
                            </Form.Field>
                        </Form>

                        <LinkList
                            data={this.state.game.array}
                            handleUpdateDelete={this.handleUpdateDelete2}
                            name="game"
                        />
                    </Segment>
                </Segment>

                <Segment basic>
                    <Segment attached="top">
                        <span>
                            <h3>Tell Us Your Hobbies</h3>
                        </span>
                    </Segment>
                    <Segment textAlign="left" attached="bottom">
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    onChange={this.handleChange2}
                                    value={this.state.hobbies.entry}
                                    name="hobbies"
                                    placeholder="Add Your Hobbies..."
                                />
                                {this.state.hobbies.entry.length > 63 && (
                                    <Label color="red" pointing>
                                        Maximum 63 characters are allowed only
                                    </Label>
                                )}
                            </Form.Field>

                            <Form.Field>
                                <Button
                                    color="blue"
                                    name="hobbies"
                                    onClick={this.addLink2}
                                >
                                    Add
                                </Button>
                            </Form.Field>
                        </Form>

                        <LinkList
                            data={this.state.hobbies.array}
                            handleUpdateDelete={this.handleUpdateDelete2}
                            name="hobbies"
                        />
                    </Segment>
                </Segment>

                <Form>
                    <Form.Dropdown
                        placeholder="Select tech Skill"
                        fluid
                        multiple
                        selection
                        search
                        label="Tech Skills:"
                        options={ll}
                        onChange={(event, { value }) => {
                            this.state.skills = value
                        }}
                    />
                    <Form.Field required>
                        <label>Normie Image:</label>
                        <input
                            type="file"
                            onChange={this.fileChange}
                            name={"uploadedFileN"}
                        />
                    </Form.Field>
                    <Form.Field required>
                        <label>Dank Image:</label>
                        <input
                            type="file"
                            onChange={this.fileChange}
                            name={"uploadedFileD"}
                        />
                    </Form.Field>

                    <Button type="submit" onClick={this.handlePost}>
                        Add Project
                    </Button>
                </Form>
            </div>
        )
    }
}
export default AddMemberDetails
