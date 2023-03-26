import PropTypes from 'prop-types'

function PokemonCard({ pokemon }) {
    return (
        (
            <figure>
                {
                    pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}/> 
                    :
                    <p>???</p>
                }
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