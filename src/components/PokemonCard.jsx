import PropTypes from 'prop-types'
import '../../src/App.css'
import colors from './colors'

function PokemonCard({ pokemon }) {
    return (
        (
            <figure style={{backgroundColor: colors[pokemon.type]}}>
                {
                    pokemon.imgSrc ? <img className="pokemon-img" src={pokemon.imgSrc} alt={pokemon.name}/> 
                    :
                    <p>???</p>
                }
                <figcaption>{pokemon.name} </figcaption>
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