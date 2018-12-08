import React, { Component } from "react"

import MainSection from "./sections/header/main-section"
import ProjectSection from "./sections/project/project-section"
import BlogSection from "./sections/blog/blog-section"

class MainPage extends Component {
    render() {
        return (
            <div>
                <MainSection />
                <ProjectSection />
                <BlogSection />
            </div>
        )
    }
}

export default MainPage
