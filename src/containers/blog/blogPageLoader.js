import { connect } from "react-redux"
import { requestData } from "../../actions/apiCalls"

import Blog from "../../components/blog/blog-page"

const mapStateToProps = state => {
    return {
        apiData: state.apiData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestData: url => {
            dispatch(requestData(url))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blog)
