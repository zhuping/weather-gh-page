import * as dayjs from 'dayjs';

export function weekCN(date) {
  const MAP_CN = {
    'Sunday': '周日',
    'Monday': '周一',
    'Tuesday': '周二',
    'Wednesday': '周三',
    'Thursday': '周四',
    'Friday': '周五',
    'Saturday': '周六'
  };

  return MAP_CN[dayjs(date).format('dddd')];
}