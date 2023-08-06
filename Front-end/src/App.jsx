import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { rotas } from './constrants';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={rotas[0].destino} element={<Login />} />
        <Route path={rotas[1].destino} element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
