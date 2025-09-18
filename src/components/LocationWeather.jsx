import React from 'react'
import WeatherBg from '../assets/bg-today-large.svg'
import Sun from '../assets/icon-sunny.webp';
import Rainy from '../assets/icon-rain.webp';
import Snow from '../assets/icon-snow.webp';
import Storm from '../assets/icon-storm.webp';

const LocationWeather = () => {
    const climateIcons = [Sun,Rainy,Snow,Storm]
  return (
    <div className=' basis-3/4 md:px-10 flex justify-between items-center relative md:h-[300px] rounded-lg '
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
