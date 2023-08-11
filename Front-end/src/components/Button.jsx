import React from "react";

export default function Button({ onClick, name, selecionado,src, className,isLoading,cor }) {
  return (
    <div>
      <button
      className={`${isLoading ?"flex justify-center gap-2":""} ${cor} hover:bg-emerald-400 rounded-xl w-full py-1 border text-sm ${
        selecionado ? "bg-emerald-300" : ""
      } outline-none border`}
      onClick={onClick}
    >
      {name}
      {isLoading &&
      <img src={src} className={className}></img>}
    </button>
    </div>
  );
}
