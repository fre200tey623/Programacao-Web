import React from "react";

export default function Result({ paisOrigem, mes, count,seguro }) {
  return (
    <>
      {paisOrigem && <p className='pl-2'>{paisOrigem}</p>}
      {mes && <p className=''>{mes}</p>}
      {count && <p className=''>{count}</p>}
      {seguro && <p className=''>{seguro}</p>}
    </>
  );
}
