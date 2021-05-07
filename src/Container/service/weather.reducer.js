import { LOAD_WEATHER_DETAILS, SELECTED_DAY_DETAILS, UPDATE_WEATHER_DETAILS } from "../constants/action-types";

const initialState = {
  weeklyData: [],
  activeScreen: 'WEEK_REPORT',
  selectedData: null,
};

function WeatherReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_WEATHER_DETAILS:
      return {
        ...state,
        
        activeScreen: 'WEEK_REPORT',
      }
    case UPDATE_WEATHER_DETAILS:
      return {
        ...state,
        weeklyData: action.payload,
        activeScreen: 'WEEK_REPORT',
      }
    case SELECTED_DAY_DETAILS:
      return {
        ...state,
        selectedData: state.weeklyData?.weekDays?.find((d) => d.id === action.id),
        activeScreen: 'DAY_REPORT',
      }

    default:
      return {
        ...state,
      };
  }
};

export default WeatherReducer;
