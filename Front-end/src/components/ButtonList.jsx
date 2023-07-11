import Button from "./Button"
import { buttonsName } from "../constrants"
import { useState } from "react";

export default function ButtonList(){
    const [selecionado, setSelecionado] = useState("1");
    return(
        <>
        {buttonsName.map((valor, id) => (
              <Button
                selecionado={selecionado === valor.id}
                onClick={() => setSelecionado(valor.id)}
                name={valor.name}
                key={valor.id}
              ></Button>
            ))}
        </>
    )
}