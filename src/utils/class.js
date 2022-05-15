import * as dayjs from 'dayjs';

export function getWeatherCls(keyWord) {
  const hour = dayjs(Date.now()).format('HH');

  let defaultCls = 'icon-sun';
  return hour > 18 || hour < 6
    ? `${defaultCls}-night`
    : `${defaultCls}-day`;
}