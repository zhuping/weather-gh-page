import { useSearchParams } from 'react-router-dom';
import useTemp from '@hooks/useTemp';

import style from './index.moudle.scss';

function Detail() {
  const [ params ] = useSearchParams();
  const id = params.get('id');

  const { temps } = useTemp(id);

  return (
    <>
      <div className="weather-detail">
        <div className="weather-logo icon-sun"></div>
        <div className="location">杭州市,浙江省</div>
        <div className="temp">
          <em className="num">13</em>
          <sup className="unit">&#8451;</sup>
        </div>
        <div className="quota">
          <ul>
            <li className="quota-item rain">
              <i className="icon"></i>
              <span className="val">6%</span>
            </li>
            <li className="quota-item humidity">
              <i className="icon"></i>
              <span className="val">6%</span>
            </li>
            <li className="quota-item wind">
              <i className="icon"></i>
              <span className="val">19km/h</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Detail;