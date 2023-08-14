export default function Placeholder({placeholder,type,onChange}){
    return(
        <>
            <input type={type} placeholder={placeholder} className="border border-gray-400 outline-none py-1 pl-2 rounded-xl" onChange={onChange}></input>
        </>
    )
}