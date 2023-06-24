import React from "react";

export default function Result({paisOrigem,mes,count}){
    return(
        <>
            <p>{paisOrigem}</p>
            <p>{mes}</p>
            <p>{count}</p>
        </>
    )
}