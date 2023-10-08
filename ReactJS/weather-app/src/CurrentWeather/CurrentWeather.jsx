import { useContext } from "react"
import { CurrentWeatherIcon } from "../CurrentWeatherIcon/CurrentWeatherIcon"
import { WeatherContext } from "../WeatherProvider/WeatherProvider"

export const CurrentWeather = () => {
    // WeatherContext 내에 존재하는 상태를 사용
    const {name, temp, weatherState} = useContext(WeatherContext);
    return (
        <div className="weather">
            {name}&nbsp;/
            <CurrentWeatherIcon weatherState={weatherState}/>
            <span>{temp}&deg;</span>
        </div>
    )
}