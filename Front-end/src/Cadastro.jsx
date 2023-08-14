import { Link,useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Placeholder from "./components/Placeholder";
import { rotas } from "./constrants";
import imagemFundo from "./assets/images/5215745.jpg";
import { api } from "./services/api";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

function Cadastro(){
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    function handleClick(){
      setIsLoading(true);
      api.post("usuario/signup",{
        email: email,
        senha: senha,
        nome: nome
      })
      .then(function (response) {
        setIsLoading(false);
        navigate("/")

      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    return (
        <div className='h-screen w-full flex justify-center items-center  '>
          <div className=' flex gap-16 bg-white rounded-lg px-12 py-6 h-3/4  mx-0 md:mx-4'>
            <div className="flex flex-col h-full gap-10 pt-10 border border-gray-400 rounded-3xl min-w-[360px]">
              <div className='flex justify-center '>
                <h1 className='text-4xl'>Cadastro</h1>
              </div>
              <div className='flex flex-col gap-3 mx-12'>
                <div className='flex flex-col gap-3'>
                <Placeholder type={"text"} placeholder={"nome"} onChange={(event)=>setNome(event.target.value)}/>
                <Placeholder type={"text"} placeholder={"usuario"} onChange={(event)=>setEmail(event.target.value)}/>
                <Placeholder type={"password"} placeholder={"senha"} onChange={(event)=>setSenha(event.target.value)}/>
                
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
            <div className="hidden md:block">
              <img src={imagemFundo} className='h-full py-6' />
            </div>
          </div>
        </div>
      );
}

export default Cadastro