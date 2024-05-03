import React from 'react'

const PokemonAbility = ({ abilityName }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">PAblo ability</div>
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility
