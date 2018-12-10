import { connect } from "react-redux"
import { requestData } from "../../actions/apiCalls"

import Project from "../../components/projects/projects-page"

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
)(Project)
