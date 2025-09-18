import React, { useContext, useState } from 'react'
import { climateIcons } from '../constants/constants'
import WeatherContext from '../WeatherContext'
const DailyForecast = () => {
    const days = [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Monday"
    ]

    const {weatherData} = useContext(WeatherContext);
  return (
    <div className='flex flex-col space-y-4 p-2'>
      <h3>Daily Forecast</h3>
      <div className='grid grid-cols-2 md:grid-cols-7 gap-3'>
        {days.map((day,idx)=>{
            return(
                <div key={idx} className='flex min-h-[150px] flex-col justify-between items-center bg-neutral-700 rounded-lg p-2'>
                <p>{day}</p>
                <img src={climateIcons[0]} alt="climate icon" className='w-10 h-10' />
                <div className='flex justify-between items-center w-full'>
                    <span className='font-body'>20&deg;C</span>
                    <span className='font-body'>14&deg;C</span>
                </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default DailyForecast
