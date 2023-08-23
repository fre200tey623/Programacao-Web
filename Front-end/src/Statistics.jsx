import React, { useEffect, useState, useRef } from "react"
import { api } from "./services/api"
import PopBar from "./components/PopBar"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import randomColor from "randomcolor";
import { FiHome } from "react-icons/fi";
import { rotas } from "./constrants";
import { useNavigate } from "react-router-dom";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import Maps from "./components/Maps";
import Loading from "./components/Loading";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


export default function Statistics() {
    const [locais, setLocais] = useState([])
    const [latidesLongetudes, setLatitudeLongetude] = useState([{ latitude: null, longitude: null }])
    const [locais2, setLocais2] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const [nomeUsuario, setNomeUsuario] = useState('');
    const mapRef = useRef();
    const position = [-10.925597695267575, -37.10298056931967]
    const defaultZoom = 8;




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

    useEffect(() => {

        const latitudeLongitudeArray = locais2?.map(valor => ({
            latitude: valor.latitude,
            longitude: valor.longitude
        }));

        setLatitudeLongetude(latitudeLongitudeArray);

    }, [locais2])


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
    const DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
      });
      
      L.Marker.prototype.options.icon = DefaultIcon;

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
            </div>
            <div className="flex flex-row-reverse flex-col lg:flex-row gap-8 lg:mt-12 items-center">
            <div className="flex-col gap-6 items-center ">
                <div className="flex justify-center">
                    <h2 className="text-xl font-semibold">Representação Grafica</h2>
                </div>
            <div style={{ width: 400 }} className="mt-10">
                    <Pie data={userData} />
                </div>
            </div>
            <div className="flex-col gap-6 items-center ">
                <div className="flex justify-center">
                    <h2 className="text-xl font-semibold">Mapa</h2>
                </div>
                <div>
                <MapContainer ref={mapRef} center={position} zoom={13} scrollWheelZoom={false} style={{ width: "600px", height: "400px"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}></Marker>
                    {latidesLongetudes?.map((valor, index) => (
                        valor.latitude !== null && (
                            <Marker
                                key={index}
                                position={[valor.latitude, valor.longitude]}
                            >

                            </Marker>
                        )
                    ))}
                </MapContainer>

                </div>
            </div>
            </div>


        </div>

    )




}