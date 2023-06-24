import Button from "./components/Button";
import Result from "./components/Result";
import { info, question } from "./constrants";
import { useState } from "react";

function App() {
  const [description, setDescription] = useState("");

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
                onClick={() => setDescription(valor.id)}
              />
            ))}
          </div>
          <div className="bg-white rounded-md md:w-1/2 w-full pt-2 pl-4 min-h-screen ">
            {/* Resultado da descricao obtida a partir de qual botao foi clicado */}
            {question
              .filter((elemento) => elemento.id === description)
              .map((valor) => (
                <div key={valor.id}>
                  {valor.description.map((description) => (
                    <Result key={valor.id} description={description} />
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
