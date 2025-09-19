import React, { useContext } from 'react'
import WeatherBg from '../assets/bg-today-large.svg'
import { climateIcons } from '../constants/constants'
import WeatherContext from '../WeatherContext'
import { getTodayDate } from '../Utility'

const LocationWeather = () => {
    const {weatherData,location,index} = useContext(WeatherContext);
  return (
    <div className='w-full md:basis-3/4 md:px-10 flex flex-col  justify-evenly md:flex-row md:justify-between  md:items-center relative min-h-[300px] px-2 md:min-h-[300px] rounded-lg grow '
    style={{
        backgroundImage:`url(${WeatherBg})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}
    >
    
    <div>
        <h2>{location?.name}</h2>
        <p>{getTodayDate()}</p>
    </div>
      
    <div className='flex justify-center items-center'>
        <img src={climateIcons[0]} alt="" className='w-20 h-20' />
        <span className='text-6xl font-heading '>{weatherData?.hourly?.temperature_2m?.[index] ?? "--"}&deg;</span>
    </div>
    </div>
  )
}

export default LocationWeather
