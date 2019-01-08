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
import styles from "../../css/team/hobbies-card.css"
import dev from "../../css/team/tech-skills-card.css"

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

const TechSkillsCard = ({ coverIcon, array, message }) => {
    return (
        <Card raised>
            <Reveal animated="move up" stylename="styles.revealHeight">
                <Reveal.Content visible styleName="styles.reveal">
                    <Segment basic padded styleName="styles.visible">
                        <Icon name={coverIcon} size="huge" />
                    </Segment>
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Segment basic padded>
                        <Header as="h1">{message}</Header>
                        <List>
                            {array.map(info => {
                                var label = ""
                                var newArray = _.map(ll, function(item) {
                                    if (item.value == info) {
                                        label = item.label
                                    }
                                })
                                console.log(label.className)
                                return (
                                    <List.Item>
                                        <span>
                                            <i className={label.className} />{" "}
                                            {info}
                                        </span>
                                    </List.Item>
                                )
                            })}
                        </List>
                    </Segment>
                </Reveal.Content>
            </Reveal>
        </Card>
    )
}
export default TechSkillsCard
