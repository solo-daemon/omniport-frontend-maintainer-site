import { connect } from "react-redux"
import { requestBlogData } from "../../actions/apiBlogCall"

import Blog from "../../components/blog/blog-page"

const mapStateToProps = state => {
    return {
        apiBlogData: state.apiBlogData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestBlogData: url => {
            dispatch(requestBlogData(url))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)
