import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { rotas } from './constrants';
import Cadastro from './Cadastro';
import React,{useState} from 'react';
import Statistics from './Statistics';
import Layoult from './Layoult';
import { themeLight, themeDark } from './constrants';


const App = () => {

  const [token,setToken] = useState("");
  const [NomeUsuario,setNomeUsuario] = useState("")
  const [theme, setTheme] = useState(themeLight);

  return (
    <Router>
      <Layoult theme={theme} setTheme={setTheme}>
      <Routes>
          <Route path={rotas[0].destino} element={<Login setToken={setToken} setNomeUsuario={setNomeUsuario}/>} />
          <Route path={rotas[2].destino} element={<Cadastro />} />
          { localStorage.getItem('token') != ""?<Route path={rotas[1].destino} element={<Home nomeUsuario = {NomeUsuario} theme={theme}/>}/>:null}
          <Route path={rotas[3].destino} element={<Statistics nomeUsuario={NomeUsuario} theme={theme}/>}/>
      </Routes>
      </Layoult>
    </Router>
  );
};

export default App;
