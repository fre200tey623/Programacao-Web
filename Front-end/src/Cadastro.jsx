import { Link,useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Placeholder from "./components/Placeholder";
import { rotas } from "./constrants";
import imagemFundo from "./assets/images/5215745.jpg";
import { api } from "./services/api";
import { useEffect, useState } from "react";

function Cadastro(){
    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const navigate = useNavigate()

    function handleClick(){
      //setIsLoading(true);
      api.post("usuario/signup",{
        email: email,
        senha: senha,
        nome: nome
      })
      .then(function (response) {
        console.log(response.data);
        //{setToken(response.data.data.token)};
        //setIsLoading(false);
        navigate("/")

      })
      .catch(function (error) {
        console.log(error);
        //setIsLoading(false);
      });
    }
  
    return (
        <div className='h-screen w-full flex justify-center items-center  bg-emerald-200 '>
          <div className=' flex gap-16 bg-white rounded-lg px-12 py-6 h-3/4 drop-shadow-lg mx-0 md:mx-4'>
            <div className="flex flex-col h-full gap-10 pt-10 min-w-[278px]">
              <div className='flex justify-center '>
                <h1 className='text-4xl'>Cadastro</h1>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-3'>
                <Placeholder type={"text"} placeholder={"Nome"} onChange={(event)=>setNome(event.target.value)}/>
                <Placeholder type={"text"} placeholder={"Usuario"} onChange={(event)=>setEmail(event.target.value)}/>
                <Placeholder type={"password"} placeholder={"senha"} onChange={(event)=>setSenha(event.target.value)}/>
                
                <Button name={"Confirmar"} onClick={handleClick}/>
                  
                </div>
                <div className="flex justify-center">
                <p>
                    Já possui conta? {" "}
                  <Link
                    to={'/'}
                    className='text-emerald-600 hover:text-emerald-300'
                  >
                    Faça Login
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