import { useState } from "react";

export default function SelectBar({question,getDescription,visivel,setVisivel,}) {
  return (
    <>
      <select
        className='outline-none w-full bg-transparent'
        onChange={(event) => {
          if (event.target.value != "") {
            getDescription(event.target.value);
            setVisivel(false);
          }
        }}
      >
        {visivel && <option value=''>Selecione uma pergunta</option>}
        {question.map((valor) => (
          <option value={valor.id}>{valor.name}</option>
        ))}
      </select>
    </>
  );
}
