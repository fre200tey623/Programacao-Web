import { useEffect } from "react";

export default function Pagination({currentPage,setCurrentPage,pageSize,respostaData}) {
  const total = Math.ceil(respostaData?.declaracoes?.length / pageSize);
  const numbers = Array.from({ length: total }, (_, i) => i + 1);

  function changePage(number) {
    setCurrentPage(number);
  }

  
  return (
    <>
      <nav>
        <ul className='flex gap-2'>
          {numbers.map((number, index) => (
            <a
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
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
}
