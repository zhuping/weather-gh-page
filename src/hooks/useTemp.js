import { get24HourWeather } from '@api/weather';
import React, { useEffect, useState } from 'react';

const useWeather = (id) => {
  const [ isError, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const [ temps, setTemps ] = useState([]);

  useEffect(() => {
    setLoading(true);
    get24HourWeather(id).then(data => {
      // debugger
    }).catch(() => {
      setError('Fetch temp data error.');
    }).finally(() => {
      setLoading(false);
    })
  }, ['id']);

  return {
    isError,
    isLoading,
  }
}

export default useWeather;