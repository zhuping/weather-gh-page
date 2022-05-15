import { Link } from 'react-router-dom';
import * as dayjs from 'dayjs';
import { weekCN } from '@utils/time';
import useLocation from '@hooks/useLocation';
import useWeather from '@hooks/useWeather';

import './index.moudle.scss';

function Home() {
  const { city, location } = useLocation();
  const { now } = useWeather(city);

  function getClassName() {
    return 'icon-sun'
  }

  return (
    <div className="weather-home">
      <div className={`weather-logo ${getClassName()}`}></div>
      <div className="location">
        <div className="location-top">{location}</div>
        <div className="location-mid">
          <div className="left">
            <p className="temp">
              <em className="num">{now.temp}</em>
              <sup className="unit">&#8451;</sup>
            </p>
            <p className="date">{weekCN(now.obsTime)},&nbsp;<i className="time">{dayjs(now.obsTime).format('h a')}</i></p>
          </div>
          <div className="right">
            <ul className="weather">
              <li className="item red">{now.text}</li>
            </ul>
          </div>
        </div>
        <Link to={`/detail?id=${city}`} className="btn-link">详情</Link>
      </div>
      <div className="quota">
        <ul>
          <li className='quota-item'>
            <span className="txt rain">降水量</span>
            <span className="val">{now.precip}mm</span>
          </li>
          <li className='quota-item'>
            <span className="txt humidity">湿度</span>
            <span className="val">{now.humidity}%</span>
          </li>
          <li className='quota-item'>
            <span className="txt wind">风速</span>
            <span className="val">{now.windSpeed}km/h</span>
          </li>
        </ul>
      </div>
      <div className="tab-bar">
        <ul>
          <li className="tab-item">
            <i className="icon home"></i>Home
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;