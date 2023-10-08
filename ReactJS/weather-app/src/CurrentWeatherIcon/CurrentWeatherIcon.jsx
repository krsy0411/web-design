import {WiDayThunderstorm, WiDaySnow, WiDayCloudy, WiDaySunny, WiDust, WiDayRain, WiDaySprinkle, WiNa} from "react-icons/wi"

export const CurrentWeatherIcon = ({weatherState, ...props}) => {

    switch(weatherState) {
        case 'Thunderstrom':
            return <WiDayThunderstorm {...props}/>;
        case 'Snow':
            return <WiDaySnow {...props} />
        case 'Clouds':
            return <WiDayCloudy {...props} />
        case 'Clear':
            return <WiDaySunny {...props} />
        case 'Haze':
            return <WiDust {...props} />
        case 'Mist':
            return <WiDust {...props} />
        case 'Smoke':
            return <WiDust {...props} />
        case 'Dust':
            return <WiDust {...props} />
        case 'Fog':
            return <WiDust {...props} />
        case 'Sand':
            return <WiDust {...props} />
        case 'Ash':
            return <WiDust {...props} />
        case 'Squall':
            return <WiDust {...props} />
        case 'Tornado':
            return <WiDust {...props} />
        case 'Rain':
            return <WiDayRain {...props} />
        case 'Drizzle':
            return <WiDaySprinkle {...props} />
        default:
            return <WiNa />
    }
}