import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { getWeatherInfo } from './helper'

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "KOLKATA",
        temp: 25,
        tempMax: 27,
        tempMin: 23,
        feelsLike: 30,
        humidity: 78,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    useEffect(() => {
        async function getFirstInfo() {
           let firstInfo =  await getWeatherInfo("Kolkata");
           setWeatherInfo(firstInfo);
        };
        getFirstInfo();
    }, []);

    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <br />
            <InfoBox info={weatherInfo} />
        </div>
    )
}