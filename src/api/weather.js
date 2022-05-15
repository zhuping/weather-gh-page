import axios from '@utils/request';

export function getLocationByCity(cityName) {
  return axios.get('https://geoapi.qweather.com/v2/city/lookup', {
    location: cityName
  })
}

export function getWeatherByCity(cityCode) {
  return axios.get('https://devapi.qweather.com/v7/weather/now', {
    location: cityCode
  });
}

export function get24HourWeather(cityCode) {
  return axios.get('https://devapi.qweather.com/v7/weather/3d', {
    location: cityCode
  })
}