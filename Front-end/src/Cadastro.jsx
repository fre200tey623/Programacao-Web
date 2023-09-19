import { Link,useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Placeholder from "./components/Placeholder";
import { rotas } from "./constrants";
import imagemFundo from "./assets/images/5215745.png";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'

function Cadastro(){
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [visivel,setVisivel] = useState(false)
    const navigate = useNavigate()

    function handleClick(){
      setIsLoading(true);
      api.post("usuario/signup",{
        email: email,
        senha: senha,
        nome: nome
      })
      .then(function() {
        setIsLoading(false);
        navigate("/")

      })
      .catch(function(error) {
        alert("Não foi possivel criar o usuario")
        console.log(error)
      });
    }

    function mudarVisibilidade(){
      setVisivel(!visivel)
    }
  
    return (
        <div className='h-screen w-full flex justify-center items-center  '>
          <div className=' flex gap-16 rounded-lg px-12 h-3/4  mx-0 md:mx-4'>
            <div className="flex flex-col h-12 gap-10 pt-10 min-h-[350px] border border-gray-400 rounded-3xl min-w-[360px] mt-20">
              <div className='flex justify-center '>
                <h1 className='text-4xl font-semibold'>Cadastro</h1>
              </div>
              <div className='flex flex-col gap-3 mx-12'>
                <div className='flex flex-col gap-3'>
                <Placeholder type={"text"} placeholder={"nome"} onChange={(event)=>setNome(event.target.value)}/>
                <Placeholder type={"text"} placeholder={"usuario"} onChange={(event)=>setEmail(event.target.value)}/>
                <div className="flex border border-gray-400 rounded-xl justify-between pr-2">
                <Placeholder
                  type={visivel? "text":"password"}
                  placeholder={"senha"}
                  onChange={(event) => setSenha(event.target.value)}
                  className="password w-full"
                />
                <button onClick={mudarVisibilidade}>{visivel?<AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button>
              </div>
                
                <Button name={isLoading ? "Autenticando" : "Confirmar"}
                onClick={handleClick}
                isLoading={isLoading}
                src={Loading}
                className={"animate-spin h-4 w-4"}
                cor={"bg-emerald-300"}/>
                  
                </div>
                <div className="flex justify-center text-sm">
                <p>
                    Já possui conta? {" "}
                  <Link to={'/'} className='text-emerald-600 hover:text-emerald-300'>
                    <u>Faça Login</u>
                  </Link>
                </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block ">
              <img src={imagemFundo} className='h-full py-6 max-h-[560px]' />
            </div>
          </div>
        </div>
      );
}

export default Cadastro