import React from "react";

export default function Result({ paisOrigem, mes, count,media }) {
  return (
    <>
      {paisOrigem && <p className='pl-2'>{paisOrigem}</p>}
      {mes && <p className=''>{mes}</p>}
      {count && <p className=''>{count}</p>}
      {media && <p className=''>{media}</p>}
    </>
  );
}
