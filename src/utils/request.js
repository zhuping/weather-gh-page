import axios from 'axios';

const defaultOption = {
  key: 'bda0b03289354b9ea8daed690d083ace'
};

const service = axios.create({
  // baseURL: 'https://api.heweather.net/s6/weather',
  // withCredentials: true,
  timeout: 60000,
});

const err = (error) => {
  return Promise.reject(error);
}

service.interceptors.response.use((response) => {
  const { code } = response.data;
  if (code === '200') {
    return response.data;
  } else {
    err();
  }
}, err)

function makeGet() {
  return function(url, option) {
    const opt = Object.assign({}, option, defaultOption);

    return service.request({
      url,
      method: 'get',
      params: {
        ...opt
      }
    });
  }
}

function makePost() {
  return function(url, option) {
    const opt = Object.assign({}, option, defaultOption);

    return service.request({
      url,
      method: 'post',
      data: {
        ...opt
      }
    });
  }
}

export default {
  get: makeGet(),
  post: makePost(),
}