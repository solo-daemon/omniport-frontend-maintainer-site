import React, { Component } from "react"
import { Loader } from "semantic-ui-react"

import MainSection from "./sections/header/main-section"
import ProjectSection from "./sections/project/project-section"
import BlogSection from "./sections/blog/blog-section"
import InfoSection from "./sections/info/info-section"
import FooterSection from "./sections/footer/footer-section"

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const URL1 = "location"
        const URL2 = "contact"
        const URL3 = "social"
        this.props.requestSocialData(URL3)
        this.props.requestLocationData(URL1)
        this.props.requestContactData(URL2)
    }

    render() {
        console.log(this.props.apiLocationData)
        if (
            this.props.apiLocationData.loaded &&
            this.props.apiContactData.loaded &&
            this.props.apiSocialData.loaded
        ) {
            return (
                <div>
                    <MainSection />
                    <ProjectSection />
                    <BlogSection />
                    {this.props.apiLocationData &&
                        this.props.apiContactData &&
                        this.props.apiSocialData && (
                            <InfoSection
                                location={this.props.apiLocationData.data}
                                contact={this.props.apiContactData.data}
                                social={this.props.apiSocialData.data}
                            />
                        )}
                    <FooterSection />
                </div>
            )
        } else {
            return <Loader active size="large" />
        }
    }
}

export default MainPage
