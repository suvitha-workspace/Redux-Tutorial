import logo from './logo.svg';
import './App.css';
import { WeatherResponse } from "./Components/Modal/WeatherResponse";
import WeatherReport from './Components/Section/WeatherReport'

function App(props) {
  if (props.weeklyData && props.weeklyData.length === 0) {
    console.log(`props.weeklydata is null`);
    props.updateWeatherDetails(WeatherResponse);
  }
  return (
    <div>
      <WeatherReport {...props} />
    </div>
  );
}

export default App;
