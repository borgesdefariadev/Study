import './styles.css';

export function Home() {

  return (
    <div className="container">
    <h1>Lista da reunião</h1>
    <input type="text" placeholder="Digite o nome..." />
    <button type="button">Adicionar membro</button>
    <Card />
    </div>

    
  )

}


