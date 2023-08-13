import React,{ useEffect, useState } from "react"
import { api } from "./services/api"
import PopBar from "./components/PopBar"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import randomColor from "randomcolor";
import { FiHome } from "react-icons/fi";
import { rotas } from "./constrants";
import { useNavigate } from "react-router-dom";

export default function Statistics(){

    const [locais,setLocais] = useState([])
    const [locais2,setLocais2] = useState()
    const [latitude,setLatitude] = useState("")
    const [longetude,setLongetude] = useState("")
    const [pais,setPais] = useState("")
    const [cidade,setCidade] = useState("")
    const [estado,setEstado] = useState("")
    const navigate = useNavigate()

    const [nomeUsuario, setNomeUsuario] = useState('');

    useEffect(() => {
      // Recupera o nome do usuário do localStorage
      const storedNomeUsuario = localStorage.getItem('nomeUsuario');
      setNomeUsuario(storedNomeUsuario);
      

    }, []);


      useEffect(()=>{
        api.get("local/agrupado")
    .then((response)=>{
       //console.log(response.data.data.local)
        setLocais(response.data.data.local)
    })
    .catch((error)=>{
        console.log(error)
    })
    api.get("local")
    .then((response)=>{
       //console.log(response.data.data.local)
        setLocais2(response.data.data.local)
    })
    .catch((error)=>{
        console.log(error)
    })

    },[])


    //console.log(locais.map((data)=>parseInt(data.pais)))


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
    const [userData, setUserData] = useState({
        labels: locais.map((data)=>data.estado),
         datasets: [
          {
             data: locais.map((data)=>parseInt(data.estado)),
           },
         ],
      });

      useEffect(() => {

        const uniqueDataValues = locais.length;
        const generatedColors = randomColor({ count: uniqueDataValues});

        setUserData({
          labels: locais.map((data) => parseInt(data.estado)),
          datasets: [
            {
              data: locais.map((data) => parseInt(data.estado)),
              backgroundColor: generatedColors,
            },
          ],
        });
      }, [locais]);

    return (
        <div className="flex justify-center items-center flex-col gap-6 relative">
        <div className=""><PopBar nome={nomeUsuario} campo={"Home"} icon={<FiHome/>} onClick={()=>navigate(rotas[1].sub_destino)}/></div>
        <div className="pt-16">
        <div className="flex justify-center flex-col items-center gap-1"> 
        <div>
            <h1 className="text-3xl font-semibold">&#128202; Estatísticas de Acesso</h1>
        </div>
        <p className="text-xl font-semibold">Numeros de acessos: {locais2?.length}</p>
        </div>
        


        
      <div style={{ width: 400 }}>
        <Pie data={userData}/>
      </div>
      <p>{latitude}</p>
        <p>{longetude}</p>
        <p>{pais}</p>
        <p>{cidade}</p>
        <p>{estado}</p>
        </div>
        

        </div>
        
    )
}