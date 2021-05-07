import { LOAD_WEATHER_DETAILS, SELECTED_DAY_DETAILS, UPDATE_WEATHER_DETAILS } from "../constants/action-types";


export function loadWeatherDetails(response) {
    return {
        type: LOAD_WEATHER_DETAILS,
        response
    };
}

export function updateWeatherDetails(payload) {
    return {
        type: UPDATE_WEATHER_DETAILS,
        payload
    }
}

export function getSelectedDayDetails(id) {
    return {
        type: SELECTED_DAY_DETAILS,
        id
    }
}