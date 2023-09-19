import { useNavigate, useNavigation } from "react-router-dom";
import Button from "./components/Button";
import Placeholder from "./components/Placeholder";
import { rotas } from "./constrants";
import imagemFundo from "./assets/images/5215745.png";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./assets/images/loading.png";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'


export default function Login({ setToken, setNomeUsuario }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [pais, setPais] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [visivel,setVisivel] = useState(false)

  useEffect(() => {
    api
      .get("https://ipapi.co/json")
      .then((response) => {
        setLatitude(response.data.latitude),
        setLongitude(response.data.longitude),
        setPais(response.data.country_name),
        setCidade(response.data.city),
        setEstado(response.data.region);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function entrarVisitante(){
    localStorage.setItem("token", setToken );
        localStorage.setItem("nomeUsuario", "Visitante");

        {setToken("Visitante");}
        {setNomeUsuario("Visitante");}

        navigate("/home");
  }

  function handleClick() {
    setIsLoading(true);
    api
      .post("usuario/login", {
        email: email,
        senha: senha,
        local: {
          latitude: latitude,
          longitude: longitude,
          pais: pais,
          cidade: cidade,
          estado: estado,
        },
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("nomeUsuario", response.data.data.nome);

        {setToken(response.data.data.token);}
        {setNomeUsuario(response.data.data.nome);}

        setIsLoading(false);
        navigate("/home");
      })
      .catch(function(error) {
        alert("Email ou Senha esta incorreto")
        console.log(error)
        setIsLoading(false);
      });
  }

  function mudarVisibilidade(){
    setVisivel(!visivel)
  }

  return (
    <div className='h-screen w-full flex justify-center items-center '>
      <div className=' flex gap-16  rounded-lg px-12 h-3/4 mx-0 md:mx-4'>
        <div className='flex flex-col h-12 gap-10 pt-10 min-h-[350px] border border-gray-400 rounded-3xl min-w-[360px] mt-20'>
          <div className='flex justify-center '>
            <h1 className='text-4xl font-semibold'>Login</h1>
          </div>
          <div className='flex flex-col gap-3 mx-12'>
            <div className='flex flex-col gap-3'>
              <Placeholder
                type={"text"}
                placeholder={"email"}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="flex border border-gray-400 rounded-xl justify-between pr-2 bg-white">
                <Placeholder
                  type={visivel? "text":"password"}
                  placeholder={"senha"}
                  onChange={(event) => setSenha(event.target.value)}
                  className="password w-full"
                />
                <button onClick={mudarVisibilidade}>{visivel?<AiOutlineEye className="text-black"/>:<AiOutlineEyeInvisible className="text-black"/>}</button>
              </div>
              <Button
                name={isLoading ? "Autenticando" : "Confirmar"}
                onClick={handleClick}
                isLoading={isLoading}
                src={Loading}
                className={"animate-spin h-4 w-4"}
                cor={"bg-emerald-300"}
              />
            </div>
            <div className='flex justify-center text-sm'>
              <p>
                Ainda não possui conta{" "}
                <Link
                  to={"/cadastro"}
                  className='text-emerald-600 hover:text-emerald-300'
                >
                  <u>Cadastre agora</u>
                </Link>
              </p>
            </div>
            <div className="flex justify-center ">
              <button  onClick={entrarVisitante}><u className="text-sm text-emerald-600 hover:text-emerald-300">Entrar como visitante</u></button>
            </div>
          </div>
        </div>
        <div className='hidden lg:block'>
          <img src={imagemFundo} className='h-full py-6 max-h-[560px]' />
        </div>
      </div>
    </div>
  );
}
