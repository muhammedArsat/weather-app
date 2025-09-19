import React, { createContext, useEffect, useState } from 'react'
import { fetchLocations, fetchLocationWeather } from './WeatherApis';

const WeatherContext = createContext();
const WeatherProvider = ({children}) => {

    const [location, setLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
      if(!location){
        setIndex(-1);
      }
    },[location])
    const fetchWeatherDetails = async()=>{
      if(!location || !location.latitude || !location.longitude) return;
      try{
        const res = await fetchLocationWeather(location.latitude, location.longitude);
        if(res){
          const time = res.hourly.time;
          

          const now = new Date();
          const currHour = now.toISOString().slice(0,13)+":00";
          setIndex(time.indexOf(currHour));
          setWeatherData(res)
          console.log(res);
        }
      }catch(err){

      }
    }
  return (
    <WeatherContext.Provider value={{index,setIndex,location, setLocation, fetchWeatherDetails, weatherData,setWeatherData}}>
      {children}
    </WeatherContext.Provider>
  )
}

export {WeatherProvider};
export default WeatherContext;
