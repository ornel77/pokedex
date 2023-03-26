function NavBar({pokemonIndex, setPokemonIndex, pokemonListLength}) {
    const handlePrecedingClick = () => {
        setPokemonIndex(pokemonIndex - 1)
    }

    const handleNextClick = () => {
        setPokemonIndex(pokemonIndex + 1)
    }
    return (
        <div>
            {
                pokemonIndex > 0 && <button onClick={handlePrecedingClick} >Précedent</button>
            }
            {
                pokemonIndex < pokemonListLength - 1 && <button onClick={handleNextClick} >Suivant</button>
            }
        </div>
        
    )
}

export default NavBar     
