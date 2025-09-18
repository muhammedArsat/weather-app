import React from 'react'
import WeatherBg from '../assets/bg-today-large.svg'
import { climateIcons } from '../constants/constants'

const LocationWeather = () => {
    
  return (
    <div className=' basis-3/4 md:px-10 flex justify-between items-center relative md:min-h-[300px] rounded-lg grow '
    style={{
        backgroundImage:`url(${WeatherBg})`,
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}
    >
    
    <div>
        <h2>Berlin, Germany</h2>
        <p>Tuesday, Aug 6, 2005</p>
    </div>
      
    <div className='flex justify-center items-center'>
        <img src={climateIcons[0]} alt="" className='w-20 h-20' />
        <span className='text-6xl font-heading '>20&deg;</span>
    </div>
    </div>
  )
}

export default LocationWeather
