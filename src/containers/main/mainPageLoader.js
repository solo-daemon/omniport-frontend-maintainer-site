import { connect } from "react-redux"
import { requestInfoData } from "../../actions/apiInfoCall"

import App from "../../components/app"

const mapStateToProps = state => {
    return {
        apiInfoData: state.apiInfoData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        requestInfoData: (locationUrl, socialUrl, contactUrl, footerUrl) => {
            dispatch(
                requestInfoData(locationUrl, socialUrl, contactUrl, footerUrl)
            )
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
