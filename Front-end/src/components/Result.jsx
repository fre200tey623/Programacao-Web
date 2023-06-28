import React from "react";

export default function Result({ paisOrigem, mes, count,seguro,truncado, media }) {
  return (
    <>
      {paisOrigem && <p className='pl-2'>{paisOrigem}</p>}
      {truncado && <p className=''>{truncado}</p>}
      {mes && <p className=''>{mes}</p>}
      {count && <p className=''>{count}</p>}
      {media && <p className=''>{media}</p>}
      {seguro && <p className=''>{seguro}</p>}
    </>
  );
}
