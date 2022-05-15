import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@views/home/index';
import Detail from '@views/detail/index';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/detail" element={<Detail />}></Route>
        {/* <Route exact path="*" element={<Detail />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
};

export default Router;