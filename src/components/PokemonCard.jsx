import pokemonImg from './pokemon.png';

function PokemonCard() {
    return (
        <figure>
            <img src={pokemonImg} alt="bulbazor"/>
            <figcaption>Bulbazor</figcaption>
        </figure>
    )
}

export default PokemonCard     