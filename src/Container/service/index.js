import { connect } from "react-redux";
import App from "../../App";
import * as actions from "./weather.action";

const mapStateToProps = (state) => {
  return {
    weeklyData: state.weeklyData,
    activeScreen: state.activeScreen,
    selectedData: state.selectedData,    
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    updateWeatherDetails: (payload) => dispatch(actions.updateWeatherDetails(payload)),
    loadWeatherDetails: () => dispatch(actions.loadWeatherDetails()),
    getSelectedDayDetails: (id) => dispatch(actions.getSelectedDayDetails(id)),
  }    
};
const MainPage = connect(mapStateToProps, mapDispachToProps)(App);
export default MainPage;
