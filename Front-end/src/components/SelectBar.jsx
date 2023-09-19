export default function SelectBar({question,getDescription,visivel,setVisivel,setQuestaoSelecionada}) {
  return (
      <>
      <select
        className='outline-none w-full bg-transparent'
        onChange={(event) => {
          if (event.target.value != "") {
            getDescription(event.target.value);
            setVisivel(false);
            setQuestaoSelecionada(question[event.target.value-1]);
            
          }
        }}
      >
        {visivel && <option value=''>Selecione uma pergunta</option>}
        {question.map((valor) => (
          <option className="text-red-950" key={valor.id} value={valor.id}>{valor.name}</option>
        ))}
      </select>
      
    </>
  );
}
