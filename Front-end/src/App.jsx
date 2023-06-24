import Button from "./components/Button";
import Result from "./components/Result";
import { info, question } from "./constrants";
import { useState,useEffect } from "react";
import { api } from "./services/api";

function App() {
  //const [description, setDescription] = useState("");
  const [respostaData, setRespostaData] = useState([])


  function getDescription( description ){
    api.get(description) 
    .then(response => {
        setRespostaData(response.data.data)
    })
    .catch(error => console.error(error.response))
  }

  return (
    <div className='bg-cyan-100 h-full w-full flex justify-center px-4'>
      <div>
        <div className='flex flex-col md:flex-row pt-14  items-center'>
          {/* Titulo da pagina */}
          <h1 className='text-2xl md:text-3xl font-semibold'>
            {info[0].title}
          </h1>
          <div className="flex">
          <h2 className='text-2xl md:text-3xl'> &#128230; </h2>
          <h2 className='text-2xl md:text-3xl'> &#9992; </h2>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-12 py-8 justify-center '>
          <div className='flex flex-col gap-3'>
            {/* Botões referente as perguntas escolhidas*/}
            {question.map((valor) => (
              <Button
                key={valor.id}
                name={valor.name}
                onClick={() => getDescription(valor.description[0])}
              />
            ))}
          </div>
          <div className="bg-white rounded-md md:w-1/2 w-full pt-2 pl-4 min-h-screen">
            {/* Resultado da descricao obtida a partir de qual botao foi clicado */}
            {respostaData
              ?.declaracoes?.map((valor,index) => (
                <div key={index} className="flex justify-between">
                  <Result key={index} id={valor._id} paisOrigem={valor.pais_origem} mes={valor.mes} count={valor.count}/>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
