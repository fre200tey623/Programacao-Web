export default function Placeholder({placeholder,type,onChange}){
    return(
        <>
            <input type={type} placeholder={placeholder} className="border outline-none py-1 pl-2" onChange={onChange}></input>
        </>
    )
}