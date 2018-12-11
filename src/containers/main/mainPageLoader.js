import { connect } from "react-redux"
import { requestInfoData } from "../../actions/apiInfoCall"

import Main from "../../components/main/main-page"

const mapStateToProps = state => {
    return {
        apiInfoData: state.apiInfoData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestInfoData: (locationUrl, socialUrl, contactUrl) => {
            dispatch(requestInfoData(locationUrl, socialUrl, contactUrl))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
