export default function Loading() {
  return (
    <div className='grid grid-cols-5 gap-6 animate-pulse h-12 pt-2 px-2 border rounded-md'>
      <div className='h-2 col-span-2 bg-slate-300 rounded-full'></div>
      <div className='h-2 bg-slate-300 rounded-full'></div>
      <div className='h-2 bg-slate-300 rounded-full'></div>
      <div className='h-2 bg-slate-300 rounded-full'></div>
    </div>
  );
}
