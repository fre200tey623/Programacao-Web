import axios from "axios"
import { useEffect, useState } from "react"
import { FiLogOut,FiMap } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function PopBar({nome}){
    let sigla = /\w{1}/.exec(nome)[0]
    const [visivel,setVisivel] = useState(false)
    const navigate = useNavigate()

    function handleClick(){
        setVisivel(!visivel)
    }

    function sair(){
        navigate("/")
    }

    return(
        <>
            <div className="absolute right-0 z-[400] mt-2 mr-2">
                <div className=" border w-fit rounded-md px-1 py-1 drop-shadow-sm bg-white">
                    <div >
                    <button onClick={handleClick} className="flex gap-2 items-center ">
                        <p className="font-medium">Ola, {nome}</p>
                        <p className="bg-emerald-400 w-8 h-8 rounded-full items-center justify-center flex">{sigla.toUpperCase()}</p>
                    </button>
                    </div>
                    {visivel && 
                    <div className={`flex flex-col items-start pt-3 text-sm gap-1`}>
                        <div className="flex gap-2">
                            <FiMap/>
                            <button onClick={()=>navigate("/statistics")}>Estatisticas</button>
                        </div>
                        <div className="flex gap-2">
                            <FiLogOut/>
                            <button onClick={sair}>Sair</button>    
                        </div> 
                    </div>
                }
                </div>
                
                
            </div>
        </>
    )
}