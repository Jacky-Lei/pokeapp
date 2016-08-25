import React, { Component } from 'react';
// you have to import react as long as it's a component
// need to use class for instance for this, can't use extends Component

// class SearchBar extends Component
const Profile = React.createClass({
    render() {
      console.log(this.props.pokemon)
      var pokemonId = "";
      if (this.props.pokemon.number) {
        pokemonId = this.props.pokemon.number
      }
      console.log(pokemonId)
      return (
        <div>
          {pokemonId}
          {/* {this.props.selectedPokemon.name}
          {this.props.selectedPokemon.height}
          {this.props.selectedPokemon.weight} */}
          {/* {this.props.pokemonTypeInfo.damage_relations.double_damage_from[0].name} */}
        </div>
      )
    }
})

export default Profile;
