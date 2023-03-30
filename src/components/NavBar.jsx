function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
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
