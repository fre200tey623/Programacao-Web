import React from "react";

export default function Button({ onClick, name }) {
  return (
    <button className=' bg-emerald-300 hover:bg-emerald-400 rounded-md md:max-w-lg h-auto px-2 py-2 font-semibold ' onClick={onClick}>
      {name}
    </button>
  );
}
