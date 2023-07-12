import Pagination from "./Pagination";
import ButtonList from "./ButtonList";
import Result from "./Result";
import { useEffect, useState } from "react";
export default function ResultList({ respostaData,visivel,setValorFiltro,botaoVisivel,setSelecionado,selecionado}) {
  const [currentPage, setCurrentPage] = useState(1);
  

  const pageSize = 17;
  const lastPageIndex = currentPage * pageSize;
  const firstPageIndex = lastPageIndex - pageSize;

  const records = respostaData?.declaracoes?.slice(
    firstPageIndex,
    lastPageIndex
  );

  return (
    <>
      <div className="flex flex-col">
      <div className='grid grid-cols-5 justify-between pt-2 pb-4 gap-1 md:gap-3'>
      {(visivel !== true && botaoVisivel) && <ButtonList setValorFiltro={setValorFiltro} setSelecionado={setSelecionado} selecionado={selecionado}/>}
      </div>
        <div className='flex flex-col gap-3 mb-20'>
          {records?.map((valor, index) => (
            <div
              key={index}
              className=' grid grid-cols-3 border rounded-md gap-6 h-auto min-h-[44px] items-center '
            >
              <Result
                key={index}
                paisOrigem={valor.pais_origem}
                mes={valor.mes}
                count={valor.count}
                media={valor.media}
              />
            </div>
          ))}
        </div>

        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            respostaData={respostaData}
            pageSize={pageSize}
          />
        </div>
      </div>
    </>
  );
}
