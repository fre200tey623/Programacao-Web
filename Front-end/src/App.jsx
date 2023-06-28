import Button from "./components/Button";
import Result from "./components/Result";
import { info, question } from "./constrants";
import { useState } from "react";
import { api } from "./services/api";
import Loading from "./components/Loading";

function App() {
  //const [description, setDescription] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  /*Quantidade maxima de dados a ser mostrado*/
  const pageSize = 17;

  const lastPageIndex = currentPage * pageSize;
  const firstPageIndex = lastPageIndex - pageSize;

  const [respostaData, setRespostaData] = useState([]);

  const records = respostaData?.declaracoes?.slice(
    firstPageIndex,
    lastPageIndex
  );
  const total = Math.ceil(respostaData?.declaracoes?.length / pageSize);
  const numbers = Array.from({ length: total }, (_, i) => i + 1);
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
  function changePage(number) {
    setCurrentPage(number);
  }

  return (
    <div className='bg-cyan-100 h-full w-full flex justify-center px-4'>
      <div className='max-w-5xl w-full'>
        <div className='flex flex-col md:flex-row pt-5 md:pt-14 justify-center'>
          {/* Titulo da pagina */}
          <h1 className='text-2xl md:text-3xl font-semibold'>
            {info[0].title}
          </h1>
          <div className='flex'>
            <h2 className='text-2xl md:text-3xl'> &#128230; </h2>
            <h2 className='text-2xl md:text-3xl'> &#9992; </h2>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-6 py-8 justify-center'>
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
          <div className='bg-white rounded-md md:max-w-[500px] w-full px-2 pt-2 min-h-screen relative pb-14'>
            <div className='grid gap-2'>
              {/* Resultado da descricao obtida a partir de qual botao foi clicado */}
              {!isLoading &&
                records?.map((valor, index) => (
                  <div
                    key={index}
                    className=' grid grid-cols-3 border rounded-md gap-6'
                  >
                    <Result
                      key={index}
                      paisOrigem={valor.pais_origem}
                      mes={valor.mes}
                      count={valor.count}
                      seguro={valor.valor_seguro}
                    />
                  </div>
                ))}
              {isLoading && (
                <div className=' flex gap-4 flex-col'>
                  {question.map((_, index) => (
                    <Loading />
                  ))}
                </div>
              )}
            </div>

            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <nav>
                <ul className='flex gap-2'>
                  {numbers.map((number, index) => (
                    <button
                      key={index}
                      className={`${
                        currentPage === number
                          ? "flex items-center justify-center bg-emerald-400 w-6 rounded-full"
                          : ""
                      }`}
                    >
                      <li
                        onClick={() => changePage(number)}
                        className='flex items-center justify-center'
                      >
                        {number}
                      </li>
                    </button>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
