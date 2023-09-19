export default function Placeholder({placeholder,type,onChange,className}){
    return(
        <>
            <input type={type} placeholder={placeholder} className={`border border-gray-400 outline-none py-1 pl-2 rounded-xl ${className} text-slate-950`} onChange={onChange}></input>
        </>
    )
}