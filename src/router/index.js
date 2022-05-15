import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@views/home/index';
import Detail from '@views/detail/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/weather-gh-page" element={<Home />}></Route>
        <Route exact path="/weather-gh-page/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;