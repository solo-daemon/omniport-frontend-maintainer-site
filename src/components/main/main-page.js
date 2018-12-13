import React, { Component } from "react"
import { Loader } from "semantic-ui-react"

import MainSection from "./sections/header/main-section"
import ProjectSection from "./sections/project/project-section"
import BlogSection from "./sections/blog/blog-section"
import InfoSection from "./sections/info/info-section"

class MainPage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // const URL1 = "location"
        // const URL2 = "contact"
        // const URL3 = "social"
        // this.props.requestInfoData(URL1, URL2, URL3)
    }

    render() {
        console.log(this.props.apiInfoData)
        // if (
        //     this.props.apiInfoData.locationLoaded &&
        //     this.props.apiInfoData.contactLoaded &&
        //     this.props.apiInfoData.socialLoaded
        // ) {
        return (
            <div>
                <MainSection />
                <ProjectSection />
                <BlogSection />
                <InfoSection />
            </div>
        )
        // } else {
        //     return <Loader active size="large" />
        // }
    }
}

export default MainPage
