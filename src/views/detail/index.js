import { useSearchParams } from 'react-router-dom';
import useLocation from '@hooks/useLocation';
import useWeather from '@hooks/useWeather';
import { getWeatherCls } from '@utils/class';
// import useTemp from '@hooks/useTemp';

import style from './index.moudle.scss';

function Detail() {
  const [ params ] = useSearchParams();
  const id = params.get('id');

  const { location } = useLocation();
  const { now } = useWeather(id);

  return (
    <>
      <div className="weather-detail">
        <div className={`weather-logo ${getWeatherCls(now.text)}`}></div>
        <div className="location">{location}</div>
        <div className="temp">
          <em className="num">{now.temp}</em>
          <sup className="unit">&#8451;</sup>
        </div>
        <div className="quota">
          <ul>
            <li className="quota-item rain">
              <i className="icon"></i>
              <span className="val">{now.precip}mm</span>
            </li>
            <li className="quota-item humidity">
              <i className="icon"></i>
              <span className="val">{now.humidity}%</span>
            </li>
            <li className="quota-item wind">
              <i className="icon"></i>
              <span className="val">{now.windSpeed}km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Detail;