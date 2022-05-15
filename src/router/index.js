import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@views/home/index';
import Detail from '@views/detail/index';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/detail" element={<Detail />}></Route>
      </Routes>
    </HashRouter>
  )
};

export default Router;