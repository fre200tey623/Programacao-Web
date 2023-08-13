import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { rotas } from './constrants';
import Cadastro from './Cadastro';
import React,{useState} from 'react';
import Statistics from './Statistics';

const App = () => {

  const [token,setToken] = useState("");
  const [NomeUsurio,setNomeUsurio] = useState("")

  return (
    <Router>
      <Routes>
        <Route path={rotas[0].destino} element={<Login setToken={setToken} setNomeUsurio={setNomeUsurio}/>} />
        <Route path={rotas[2].destino} element={<Cadastro />} />
        { token != ""?<Route path={rotas[1].destino} element={<Home nomeUsuario = {NomeUsurio}/>}/>:null}
        <Route path={rotas[3].destino} element={<Statistics />}/>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
