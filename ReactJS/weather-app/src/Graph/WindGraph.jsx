import { useContext } from "react";
import { WeatherContext } from "../WeatherProvider/WeatherProvider"
import { LineChart } from "recharts";

const LineGraph = ({num}) => {
    const {hourly} = useContext(WeatherContext);

    return (
        <LineChart
            width={960}
            height={200}
            data={hourly?.slice(num*12, (num+1)*12).map(({dt, temp, weather})=> ({
                dt,
                temp,
                weather: weather[0].main,
            }))}
            margin={{
                top: 30,
                right: 30,
                left: 30,
                bottom: 10,
            }}
        >

        </LineChart>
    )
}