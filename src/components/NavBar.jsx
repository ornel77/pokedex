function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {

    // console.log(pokemonList.indexOf(pokemonList.filter(pokemon => pokemon.name == "charmander")))
    // const handlePrecedingClick = () => {
    //     setPokemonIndex(pokemonIndex - 1)
    // }

    // const handleNextClick = () => {
    //     setPokemonIndex(pokemonIndex + 1)
    // }
    return (
        <div>
            {pokemonList.map(pokemon => (
            <button key={pokemon.name}>{pokemon.name}</button>
            ))}
        </div>
        
    )
}

export default NavBar     
