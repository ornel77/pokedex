function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
    const handlePrecedingClick = () => {
        setPokemonIndex(pokemonIndex - 1)
    }

    const handleNextClick = () => {
        setPokemonIndex(pokemonIndex + 1)
    }
    
    if(pokemonList[pokemonIndex].name === 'pikachu') {
        setTimeout(() => {
            alert('"pika pikachu !!!"')
        }, 500);
    }

    return (
        <div>
            {
                pokemonIndex > 0 && <button onClick={handlePrecedingClick} >Précedent</button>
            }
            {
                pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextClick} >Suivant</button>
            }
        </div>
        
    )
}

export default NavBar     
