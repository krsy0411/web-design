import { CurrentWeather } from "./CurrentWeather/CurrentWeather"
import { ExtraInfo } from "./ExtraInfo/ExtraInfo"
import { TempInfo } from "./TempInfo/TempInfo"
import { WeatherTab } from "./WeatherTab/WeatherTab"

export const WeatherApp = () => {
    return (
        <div className="container">
            <CurrentWeather />
            <TempInfo />
            <ExtraInfo />
            <WeatherTab />
        </div>
    )
}