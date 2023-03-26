import PropTypes from 'prop-types'
import { useState } from 'react';

function PokemonCard({ pokemonList }) {
    const [ pokemonIndex, setPokemonIndex ] = useState(0)

    const handlePrecedingClick = () => {
        setPokemonIndex(pokemonIndex - 1)
    }

    const handleNextClick = () => {
        setPokemonIndex(pokemonIndex + 1)
    }

    // const [ pokemon ]= pokemonList
    // console.log(pokemonList[pokemonIndex].imgSrc)

    return (
        (
            <figure>
                {
                    pokemonList[pokemonIndex].imgSrc ? <img src={pokemonList[pokemonIndex].imgSrc} alt={pokemonList[pokemonIndex].name}/> 
                    :
                    <p>???</p>
                }
                <button className="precedent" onClick={handlePrecedingClick} >Précedent</button>
                <button className="next" onClick={handleNextClick} >Suivant</button>
            </figure>
        ) 
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })
}

export default PokemonCard     