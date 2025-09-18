// for fetching Weather Details
// https://api.open-meteo.com/v1/forecast?latitude=11.3410&longitude=77.7172&hourly=temperature_2m,precipitation,precipitation_probability,relativehumidity_2m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,winddirection_10m_dominant&forecast_days=7&timezone=auto

import axios from "axios";

// for searching locations
// https://geocoding-api.open-meteo.com/v1/search?name=Ber&count=5&language=en&format=json

export const fetchLocations = async (location) => {
  try {
    const res =
      await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json
`);
    return res.data;
  } catch (err) {}
};

export const fetchLocationWeather = async (lat, long) => {
  try {
    const res = await axios.get(`    
 https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,precipitation,precipitation_probability,relativehumidity_2m,winddirection_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,winddirection_10m_dominant&forecast_days=7&timezone=auto`);
    return res.data;
  } catch (err) {}
};
