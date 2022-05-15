import { getWeatherByCity } from '@api/weather';
import React, { useEffect, useState } from 'react';

const useWeather = (id = '') => {
  const [ isError, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const [ now, setNow ] = useState({
    temp: '-',
    text: '',
    obsTime: Date.now(),
    humidity: 0,
    windSpeed: 0,
    precip: 0.0
  });

  useEffect(() => {
    if (id) {
      setLoading(true);
      getWeatherByCity(id).then(data => {
        const { temp, text, obsTime, humidity, windSpeed, precip } = data.now;
        setNow({
          temp,
          text,
          obsTime,
          humidity,
          windSpeed,
          precip
        });
      }).catch(() => {
        setError('Fetch weather data error.');
      }).finally(() => {
        setLoading(false);
      })
    }
  }, [id]);

  return {
    isError,
    isLoading,
    now
  }
}

export default useWeather;