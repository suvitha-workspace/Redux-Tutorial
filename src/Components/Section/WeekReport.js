import './week.css';
import { WiDaySunnyOvercast, WiDayLightWind, WiDayThunderstorm, WiDaySunny, WiGaleWarning, WiDirectionRight, WiWindy } from "weather-icons-react";


function WeekReport(props) {
    const handleClick = (id) => {
        props.getSelectedDayDetails(id);
    }
    const renderWeatherIcon = (range) => {
        switch (true) {
            case range <= 200:
                return <WiDayThunderstorm size={50} color='#ebdb00' />;
            case range >= 200 && range < 300:
                return <WiDayLightWind size={50} color='#ebdb00'></WiDayLightWind>
            case range >= 300 && range < 400:
                return <WiDaySunnyOvercast size={50} color='#ebdb00' />;
            default:
                return <WiDaySunny size={50} color='#ebdb00' />
        }
    }
    const renderWeatherDesc = (range) => {
        switch (true) {
            case range <= 200:
                return "Isolated T-Storms";
            case range >= 200 && range < 300:
                return "Partly Cloudy";
            case range >= 300 && range < 400:
                return "Mostly Sunny";
            default:
                return "Sunny"
        }
    }
    return (
        <>
            <div className="container">
                <div className="weekHeader">
                    <div className="weekHeader1">Weather Report</div>
                    <div className="weekHeader2"> - Chennai, Tamilnadu</div>
                </div>
                <ul className="weekUl">
                    {props?.weeklyData?.weekDays?.map((data) => (
                        <li className="weekList" onClick={() => { handleClick(data.id) }}>
                            <div className="columnDiv">{data.title}</div>
                            <div className="columnDiv bold">{data.tempMax}/{data.tempMin}</div>
                            <div className="columnDiv1">{renderWeatherIcon(data.rangeId)} {renderWeatherDesc(data.rangeId)}</div>
                            <div className="columnDiv">
                                <WiGaleWarning size={25} color="#1b4de4"></WiGaleWarning>{data.probPrecitation}
                            </div>
                            <div className="columnDiv2">
                                <WiWindy size={25} color="#1b4de4"></WiWindy>
                                {data.wind}
                            </div>
                            <div className='columnDiv'><WiDirectionRight size={40} color="#1b4de4"></WiDirectionRight></div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default WeekReport;