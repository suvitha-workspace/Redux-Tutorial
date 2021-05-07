import { createStore } from "redux";
import WeatherReducer from "../service/weather.reducer";

const store = createStore(WeatherReducer);

export default store;
