import { info, question } from "./constrants";
import { useState } from "react";
import Loading from "./components/Loading";
import { Title } from "./components/Title";
import { api } from "./services/api";
import SelectBar from "./components/SelectBar";
import ButtonList from "./components/ButtonList";
import ResultList from "./components/ResultList";

function App() {
  const [visivel, setVisivel] = useState(true);
  const [respostaData, setRespostaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getDescription(description) {
    setIsLoading(true);
    api
      .get(description)
      .then((response) => {
        setRespostaData(response.data.data);
      })
      .catch((error) => console.error(error.response))
      .finally(() => setIsLoading(false));
  }

  return (
    <div className='h-full w-full flex justify-center px-4 bg-stone-50'>
      <div className='max-w-5xl w-full'>
        <div className='flex flex-col pt-5 md:pt-14 justify-center w-full'>
          <Title title={info[0].title} />

          <div className='h-12 border  rounded-xl flex justify-center px-2 mb-2 bg-stone-50'>
            <SelectBar
              question={question}
              getDescription={getDescription}
              visivel={visivel}
              setVisivel={setVisivel}
            />
          </div>

          <div className='grid grid-cols-5 justify-between pt-2 pb-4 gap-1 md:gap-3'>
            <ButtonList />
          </div>

          <div className='rounded-md w-full pt-2 relative min-h-screen'>
            <div className='grid gap-2'>
              {/* Resultado da descricao obtida a partir de qual botao foi clicado */}
              {!isLoading && <ResultList respostaData={respostaData} />}

              {isLoading && (
                <div className=' flex gap-4 flex-col'>
                  {question.map((_, index) => (
                    <Loading />
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

export default App;
