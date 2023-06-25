import React from "react";

export default function Button({ onClick, name }) {
  return (
    <button
      className='bg-emerald-300 hover:bg-emerald-400 rounded-md md:max-w-lg px-2 py-2 font-semibold h-full min-h-[48px]'
      onClick={onClick}
    >
      {name}
    </button>
  );
}
