import axios from "axios"

export const RECEIVE_INFO_LOCATION_DATA = "RECEIVE_INFO_LOCATION_DATA"
export const RECEIVE_INFO_CONTACT_DATA = "RECEIVE_INFO_CONTACT_DATA"
export const RECEIVE_INFO_SOCIAL_DATA = "RECEIVE_INFO_SOCIAL_DATA"
export const RECEIVE_FOOTER_DATA = "RECEIVE_FOOTER_DATA"

export const ERROR_OCCURED = "ERROR_OCCURED"

const API_URL = "/api/maintainer_site/"

const requestInfoData = (locationUrl, contactUrl, socialUrl) => {
    return dispatch => {
        axios
            .all([
                axios.get(`${API_URL}${locationUrl}`),
                axios.get(`${API_URL}${contactUrl}`),
                axios.get(`${API_URL}${socialUrl}`),
                axios.get(`${API_URL}${footerUrl}`),
            ])
            .then(
                axios.spread(
                    (locationRes, contactRes, socialRes, footerRes, error) => {
                        dispatch(
                            receiveInfoLocationData(locationUrl, locationRes)
                        ),
                            dispatch(
                                receiveInfoContactData(contactUrl, contactRes)
                            ),
                            dispatch(
                                receiveInfoSocialData(socialUrl, socialRes)
                            ),
                            dispatch(receiveFooterData(footerUrl, footerRes)),
                            dispatch(
                                errorOccured(
                                    error,
                                    locationUrl,
                                    contactUrl,
                                    socialUrl
                                )
                            )
                    }
                )
            )
    }
}

const receiveInfoLocationData = (locactionUrl, locationJson) => ({
    type: RECEIVE_INFO_LOCATION_DATA,
    locationData: locationJson.data,
    locactionUrl,
})

const receiveInfoSocialData = (socialUrl, socialJson) => ({
    type: RECEIVE_INFO_SOCIAL_DATA,
    socialData: socialJson.data,
    socialUrl,
})

const receiveInfoContactData = (contactUrl, contactJson) => ({
    type: RECEIVE_INFO_CONTACT_DATA,
    contactData: contactJson.data,
    contactUrl,
})

const receiveFooterData = (footerUrl, footerJson) => ({
    type: RECEIVE_INFO_CONTACT_DATA,
    footerData: footerJson.data,
    footerUrl,
})

const errorOccured = (error, locactionUrl, contactUrl, socialUrl) => ({
    type: ERROR_OCCURED,
    locactionUrl,
    contactUrl,
    socialUrl,
    error,
})

export { requestInfoData }
