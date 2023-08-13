import { useState } from "react"
import { api } from "./services/api"
import PopBar from "./components/PopBar"


export default function Statistics({staticsJSON}){
    const [latitude,setLatitude] = useState("")
    const [longetude,setLongetude] = useState("")
    const [pais,setPais] = useState("")
    const [cidade,setCidade] = useState("")
    const [estado,setEstado] = useState("")

    // api.get("https://ipapi.co/json")
    // .then((response) => {
    //     //console.log(response.data);
    //     setLatitude(response.data.latitude),
    //     setLongetude(response.data.longitude),
    //     setPais(response.data.country_name),
    //     setCidade(response.data.city),
    //     setEstado(response.data.region)
    //   }).catch((error)=>{
    //     console.log(error)})

    // api.post("usuario/login"),{
    //     email: "teste",
    //     senha: "teste@teste",
    //     localidade: {
    //         latitude:latitude,
    //         longetude:longetude,
    //         pais: pais,
    //         cidade: cidade,
    //         estado: estado 
    //     }
    // }.then((response)=>{
    //     console.log(response)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    return (
        <><h1>{staticsJSON}</h1>
        <h1>Ola Mundo</h1>
        <p>{latitude}</p>
        <p>{longetude}</p>
        <p>{pais}</p>
        <p>{cidade}</p>
        <p>{estado}</p>
        <h1><PopBar/></h1>
        </>
        
    )
}