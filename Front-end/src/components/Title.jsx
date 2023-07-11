export function Title( {title}){
    return(
        <div className='flex flex-wrap pb-12'>
        <h1 className='text-2xl md:text-3xl font-semibold'>
          {title}
        </h1>
        <div className='flex'>
          <h2 className='text-2xl md:text-3xl'> &#128230; </h2>
          <h2 className='text-2xl md:text-3xl'> &#9992; </h2>
        </div>
      </div>
    )
}