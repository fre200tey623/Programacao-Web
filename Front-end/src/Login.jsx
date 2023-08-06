import { Link } from "react-router-dom";
import Button from "./components/Button";
import Placeholder from "./components/Placeholder";
import { rotas } from "./constrants";
import imagemFundo from "./assets/images/5215745.jpg";
export default function Login() {
  return (
    <div className='h-screen w-full flex justify-center items-center  bg-emerald-200 '>
      <div className=' flex gap-16 bg-white rounded-lg px-12 py-6 h-3/4 drop-shadow-lg'>
        <div className="flex flex-col h-full gap-20 pt-10">
          <div className='flex justify-center '>
            <h1 className='text-4xl'>Login</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <Placeholder type={"text"} placeholder={"usuario"} />
              <Placeholder type={"password"} placeholder={"senha"} />
              <Link to={rotas[1].sub_destino}>
                <Button name={"Confirmar"} />
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
