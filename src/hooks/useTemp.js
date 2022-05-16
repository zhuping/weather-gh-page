import { get24HourWeather } from '@api/weather';
import React, { useEffect, useState } from 'react';
import * as dayjs from 'dayjs';

const useTemp = (id) => {
  const [ isError, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const [ temps, setTemps ] = useState([]);

  useEffect(() => {
    if (id) {
      setLoading(true);
      get24HourWeather(id).then(data => {
        const { hourly } = data;
        const arr = hourly.map(item => {
          const { fxTime, temp } = item;
          return {
            fxTime: dayjs(fxTime).format('H a'),
            temp: Number(temp)
          }
        });
        setTemps(arr);
      }).catch(() => {
        setError('Fetch temp data error.');
      }).finally(() => {
        setLoading(false);
      })
    }
  }, [id]);

  return {
    isError,
    isLoading,
    temps
  }
}

export default useTemp;