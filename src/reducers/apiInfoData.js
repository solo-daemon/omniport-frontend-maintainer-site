import {
    RECEIVE_INFO_LOCATION_DATA,
    RECEIVE_INFO_CONTACT_DATA,
    RECEIVE_INFO_SOCIAL_DATA,
    RECEIVE_FOOTER_DATA,
    ERROR_OCCURED,
} from "../actions/apiInfoCall"

const apiInfoData = (
    state = {
        locationData: null,
        socialData: null,
        contactData: null,
        footerData: null,
        locationUrl: "",
        socialUrl: "",
        contactUrl: "",
        footerUrl: "",
        locationLoaded: false,
        socialLoaded: false,
        contactLoaded: false,
        footerLoaded: false,
    },
    action
) => {
    switch (action.type) {
        case RECEIVE_INFO_LOCATION_DATA:
            return {
                ...state,
                locationData: action.locationData,
                locationUrl: action.locationUrl,
                locationLoaded: true,
            }
        case RECEIVE_INFO_CONTACT_DATA:
            return {
                ...state,
                contactData: action.contactData,
                contactUrl: action.contactUrl,
                contactLoaded: true,
            }
        case RECEIVE_INFO_SOCIAL_DATA:
            return {
                ...state,
                socialData: action.socialData,
                socialUrl: action.socialUrl,
                socialLoaded: true,
            }
        case RECEIVE_FOOTER_DATA:
            return {
                ...state,
                footerData: action.footerData,
                footerUrl: action.footerUrl,
                footerLoaded: true,
            }
        case ERROR_OCCURED:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}

export default apiInfoData
