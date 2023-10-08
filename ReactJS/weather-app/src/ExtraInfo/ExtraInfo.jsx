import { useContext } from "react"
import { WeatherContext } from "../WeatherProvider/WeatherProvider"
import {WiHumidity, WiStrongWind, WiSunrise, WiSunset} from "react-icons/wi"
import { WindDirectiontext } from "./WindDirectionText";

export const ExtraInfo = () => {
    const {humidiy, speed, deg, sunset, sunrise} = useContext(WeatherContext);

    return (
        <div className="extra-info">
            {/* 추가 정보 컨테이너 내부 item wrapper */}
            <div className="extra-info-item">
                {/* 실제 아이템들 */}
                <WiSunrise style={{fontSize: "50px", color: "#ff7500"}} />
                <p className="extra-info-text">
                    {
                        new Date(sunrise * 1000).toLocaleString("en-us", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })
                    }{""}
                    <br />
                    일출
                </p>
            </div>
            <div className="extra-info-item">
                <WiSunset style={{ fontSize: "50px", color: "#ff7500" }} />
                <p className="extra-info-text">
                    {
                        new Date(sunset * 1000).toLocaleString('en-us', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true,
                        })
                    }
                </p>
            </div>
            <div className="extra-info-item">
                <WiHumidity style={{fontSize: "50px", color: "#0095ff"}} />
                <p className="extra-info-text">
                    {`${humidiy}%`}
                    <br />
                    습도
                </p>
            </div>
            <div className="extra-info-item">
                <WiStrongWind style={{fontSize: "50px", color: "#2bc7ad"}}/>
                <p className="extra-info-text">
                    {`${speed}m/s`} (<WindDirectiontext deg={deg}/>)
                    {/* todo : windDirectionText */}
                    <br />
                    바람
                </p>
            </div>
        </div> 
    )
}