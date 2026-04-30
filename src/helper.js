const API_URL="https://api.openweathermap.org/data/2.5/weather";
let getWeatherInfo = async (city) => {
    try {
        let res = await fetch(`${API_URL}?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        let jsonRes = await res.json();
        let result = {
            city: city.toUpperCase(),
            temp: jsonRes.main.temp,
            tempMax: jsonRes.main.temp_max,
            tempMin: jsonRes.main.temp_min,
            feelsLike: jsonRes.main.feels_like,
            humidity: jsonRes.main.humidity,
            weather: jsonRes.weather[0].description
        };
        return(result);
    } catch (error) {
        throw error;
    }
}

export { getWeatherInfo };