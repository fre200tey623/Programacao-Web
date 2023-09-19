import React,{useState} from "react"
import { themeLight, themeDark } from './constrants';
import {BsFillMoonFill,BsSun} from 'react-icons/bs'
export default function Layoult({children,setTheme,theme}){
    
    function mudarTema(){
        {setTheme(theme === themeLight ? themeDark : themeLight)}
    }

    return(
        <div style={{backgroundColor: theme.backgroundColor, color: theme.textColor }} className="relative">
            <div className="absolute top-2 left-2 z-[400]">
            <button onClick={mudarTema} >{theme === themeLight?<BsSun className="w-6 h-auto"/>:<BsFillMoonFill className="w-6 h-auto"/>}</button>
            </div>
            {children}
        </div>
    )
}