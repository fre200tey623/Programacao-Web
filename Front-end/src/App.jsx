import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { rotas } from './constrants';
import Cadastro from './Cadastro';
import React,{useState} from 'react';

const App = () => {

  const [token,setToken] = useState("");

  return (
    <Router>
      <Routes>
        <Route path={rotas[0].destino} element={<Login setToken={setToken} />} />
        <Route path={rotas[2].destino} element={<Cadastro />} />
        { token != ""?<Route path={rotas[1].destino} element={<Home />}/>:null}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
