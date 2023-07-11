import Pagination from "./Pagination";
import Result from "./Result";
import { useState } from "react";
export default function ResultList({ respostaData }) {
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
      <div>
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
          />
        </div>
      </div>
    </>
  );
}
