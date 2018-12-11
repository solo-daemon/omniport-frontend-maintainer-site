import { connect } from "react-redux"
import { requestLocationData } from "../../actions/apiLocationCall"
import { requestContactData } from "../../actions/apiContactCall"
import { requestSocialData } from "../../actions/apiSocialCall"

import Main from "../../components/main/main-page"

const mapStateToProps = state => {
    return {
        apiLocationData: state.apiLocationData,
        apiContactData: state.apiContactData,
        apiSocialData: state.apiSocialData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestLocationData: url => {
            dispatch(requestLocationData(url))
        },
        requestContactData: url => {
            dispatch(requestContactData(url))
        },
        requestSocialData: url => {
            dispatch(requestSocialData(url))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
