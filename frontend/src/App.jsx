import './App.css'

function App() {

  const Pokemons = [
    { nome: "Charmander", id: 4 },
    { nome: "Vulpix", id: 37 },
    { nome: "Pikachu", id: 25 },
    { nome: "Bulbasaur", id: 1 },
    { nome: "Squirtle", id: 7 },
    { nome: "Kingdra", id: 230 },
    { nome: "Dragonite", id: 149 },
    { nome: "Eevee", id: 133 },
    { nome: "Haunter", id: 93 },
    { nome: "Diglet", id: 50 }
  ];

  return (
    <>
      <h1>Pokemons</h1>
      <div className="card">
        <ul>
          {Pokemons.map((item => (
            <li key={item.id}>
              <a target="_blank" href={"/" + item.id} > {item.nome}</a>
            </li>
          )))}
        </ul>
      </div>

    </>
  )
}

export default App
