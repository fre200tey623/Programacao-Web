import { Link } from "react-router-dom";
import Button from "./components/Button";
import Placeholder from "./components/Placeholder";
import { rotas } from "./constrants";
import imagemFundo from "./assets/images/5215745.jpg";
import { api } from "./services/api";
import { useEffect, useState } from "react";
export default function Login() {
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")


    function handleClick(){
    
      api.post("usuario/login",{
        email: email,
        senha: senha
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  


  return (
    <div className='h-screen w-full flex justify-center items-center  bg-emerald-200 '>
      <div className=' flex gap-16 bg-white rounded-lg px-12 py-6 h-3/4 drop-shadow-lg mx-0 md:mx-4'>
        <div className="flex flex-col h-full gap-20 pt-10">
          <div className='flex justify-center '>
            <h1 className='text-4xl'>Login</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <Placeholder type={"text"} placeholder={"usuario"} onChange={(event)=>setEmail(event.target.value)}/>
              <Placeholder type={"password"} placeholder={"senha"} onChange={(event)=>setSenha(event.target.value)}/>
              <Link>
                <Button name={"Confirmar"} onClick={()=>handleClick}/>
              </Link>
            </div>
            <p>
              Ainda não possui conta,{" "}
              <a
                href='https://www.google.com'
                target='_blank'
                className='text-emerald-600 hover:text-emerald-300'
              >
                cadastre agora
              </a>
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={imagemFundo} className='h-full py-6' />
        </div>
      </div>
    </div>
  );
}
