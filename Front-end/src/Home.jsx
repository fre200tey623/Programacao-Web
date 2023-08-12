import { info, question } from "./constrants";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Title } from "./components/Title";
import { api } from "./services/api";
import SelectBar from "./components/SelectBar";
import ResultList from "./components/ResultList";

function Home() {
  const [visivel, setVisivel] = useState(true);
  const [respostaData, setRespostaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [valorFiltro, setValorFiltro] = useState("");
  const [valorDescription,setValorDescripton] = useState("")
  const [selecionado, setSelecionado] = useState("1");
  const [questaoSelecionada,setQuestaoSelecionada] = useState({possuiFiltro:false})

  useEffect(()=>{
    getDescription(valorDescription);
  },[valorFiltro,valorDescription])

  function getDescription() {
    if(valorDescription!=""){
      setIsLoading(true);
    api
      .post("declaracao/"+valorDescription+valorFiltro,{})
      .then((response) => {
        setRespostaData(response.data.data);
      })
      .catch((error) => console.error(error.response))
      .finally(() => setIsLoading(false));
    }
  }


  return (
    <div className='h-full w-full flex justify-center px-4 bg-stone-50'>
      <div className='max-w-5xl w-full'>
        <div className='flex flex-col pt-5 md:pt-14 justify-center w-full'>
          <Title title={info[0].title} />

          <div className='h-12 border  rounded-xl flex justify-center px-2 mb-2 bg-stone-50 border-stone-900'>
            <SelectBar
              question={question}
              getDescription={setValorDescripton}
              visivel={visivel}
              setVisivel={setVisivel}
              setQuestaoSelecionada={setQuestaoSelecionada}
            />
          </div>

          <div className='rounded-md w-full pt-2 relative min-h-screen'>
            <div className='grid gap-2'>
              {/* Resultado da descricao obtida a partir de qual botao foi clicado */}
              {!isLoading && <ResultList respostaData={respostaData} visivel={visivel} setValorFiltro={setValorFiltro} botaoVisivel={questaoSelecionada.possuiFiltro} setSelecionado={setSelecionado} selecionado={selecionado}/>}

              {isLoading && (
                <div className=' flex gap-4 flex-col'>
                  {question.map((_, index) => (
                    <Loading key={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
