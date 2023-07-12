import Button from "./Button"
import { buttonsName } from "../constrants"
import { useEffect, useState } from "react";

export default function ButtonList({setValorFiltro,setSelecionado,selecionado}){
    
    function getFiltro(valorId,valorFiltro){
      setSelecionado(valorId)
      setValorFiltro(valorFiltro)
    }


    return(
        <>
        {buttonsName.map((valor, id) => (
              <Button
                selecionado={selecionado === valor.id}
                onClick={() => getFiltro(valor.id,valor.filtro)}
                name={valor.name}
                key={valor.id}
              ></Button>
            ))}
        </>
    )
}