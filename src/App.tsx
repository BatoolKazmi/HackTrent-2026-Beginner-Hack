import { useState, useEffect } from "react";

function App() {
  const [pokemonData, setPokemonData] = useState([]); // [1,2,3,4,5,6,7,8,9,10]
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(apiUrl);
      let data = await response.json();

      setPokemonData(data.results);
    }
    fetchData();
  }, []);

  console.log(pokemonData);

  return (
    <>
      <h1>Pokemon application :D</h1>
      <ul>
        {pokemonData.map((pokemon: { name: string }) => (
          <li
            className="underline text-green-800 text-9xl text-center border-2 border-black"
            key={pokemon.name}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
