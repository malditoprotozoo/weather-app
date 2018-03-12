import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  <div>
  <Location city ={'Santiago'} />
  <WeatherData />
  <WeatherTemperature />
  <WeatherExtraInfo />
  </div>
  )


export default WeatherLocation;