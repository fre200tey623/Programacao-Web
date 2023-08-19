import { useNavigate, useNavigation } from "react-router-dom";
import Button from "./components/Button";
import Placeholder from "./components/Placeholder";
import { rotas } from "./constrants";
import imagemFundo from "./assets/images/5215745.jpg";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./assets/images/loading.png";
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
      .catch(function() {
        alert("Email ou Senha esta incorreto")
        setIsLoading(false);
      });
  }

  return (
    <div className='h-screen w-full flex justify-center items-center '>
      <div className=' flex gap-16 bg-white rounded-lg px-12 py-6 h-3/4 mx-0 md:mx-4'>
        <div className='flex flex-col h-12 gap-10 pt-10 min-h-[450px] border border-gray-400 rounded-3xl min-w-[360px] mt-20'>
          <div className='flex justify-center '>
            <h1 className='text-4xl font-semibold text-gray-800'>Login</h1>
          </div>
          <div className='flex flex-col gap-3 mx-12'>
            <div className='flex flex-col gap-3'>
              <Placeholder
                type={"text"}
                placeholder={"usuario"}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Placeholder
                type={"password"}
                placeholder={"senha"}
                onChange={(event) => setSenha(event.target.value)}
              />
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
          </div>
        </div>
        <div className='hidden lg:block'>
          <img src={imagemFundo} className='h-full py-6 max-h-[560px]' />
        </div>
      </div>
    </div>
  );
}
