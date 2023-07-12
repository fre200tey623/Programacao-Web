import React from "react";

export default function Button({ onClick, name, selecionado }) {
  return (
    <button
      className={`hover:bg-emerald-300 rounded-xl w-full py-1 border text-sm ${
        selecionado ? "bg-emerald-300" : ""
      } outline-none border`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
