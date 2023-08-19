import React, { useEffect, useState } from "react"
import { api } from "./services/api"
import PopBar from "./components/PopBar"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import randomColor from "randomcolor";
import { FiHome } from "react-icons/fi";
import { rotas } from "./constrants";
import { useNavigate } from "react-router-dom";
//import Loading from "./components/Loading";

export default function Statistics() {

    const [locais, setLocais] = useState([])
    const [locais2, setLocais2] = useState()
    //const [isLoading,setIsLoading] = useState(false)

    const navigate = useNavigate()

    const [nomeUsuario, setNomeUsuario] = useState('');

    useEffect(() => {
        const storedNomeUsuario = localStorage.getItem('nomeUsuario');
        setNomeUsuario(storedNomeUsuario);

    }, []);


    useEffect(() => {
        api.get("local/agrupado")
            .then((response) => {
                setLocais(response.data.data.local)
            })
            .catch((error) => {
                console.log(error)           
            })
        api.get("local")
            .then((response) => {
                setLocais2(response.data.data.local)
                
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    const [userData, setUserData] = useState({

        labels: locais.map((data) => data.cidade),
        datasets: [
            {
                data: locais.map((data) => parseInt(data.count)),
            },
        ],
    });
   
    useEffect(() => {

        const uniqueDataValues = locais.length;
        const generatedColors = randomColor({ count: uniqueDataValues });
        setUserData({
            labels: locais.map((data) => data.cidade),
            datasets: [
                {
                    data: locais.map((data) => parseInt(data.count)),
                    backgroundColor: generatedColors,
                },
            ],
        });
    }, [locais]);

    return (
        <div className="flex justify-center items-center flex-col gap-6 relative">
            <div className=""><PopBar nome={nomeUsuario} campo={"Home"} icon={<FiHome />} onClick={() => navigate(rotas[1].sub_destino)} /></div>
            <div className="pt-16">
                <div className="flex justify-center flex-col items-center gap-2">
                    <div>
                        <h1 className="text-3xl font-semibold">&#128202; Estatísticas de Acesso</h1>
                    </div>
                    <p className="text-xl font-semibold">Numeros de acessos: {locais2?.length}</p>
                </div>

                 <div style={{ width: 400 }} className="mt-10">
                    <Pie data={userData} />
                </div>


            </div>


        </div>

    )
}