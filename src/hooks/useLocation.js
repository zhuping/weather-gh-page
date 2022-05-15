import { getLocationByCity } from '@api/weather';
import React, { useEffect, useState } from 'react';

const useLocation = () => {
  const [ isError, setError ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const [ city, setCity ] = useState();
  const [ location, setLocation ] = useState('-');

  useEffect(() => {
    setLoading(true);
    getLocationByCity('hangzhou').then(data => {
      const { location } = data;
      const { id, name, adm2, adm1 } = location[3];  // 默认选区余杭区
      setCity(id);
      setLocation(`${name}区,${adm2}市,${adm1}`);
    }).catch(() => {
      setError('There is no such location.');
    }).finally(() => {
      setLoading(false);
    })
  }, ['city']);

  return {
    isError,
    isLoading,
    city,
    location
  };
}

export default useLocation;