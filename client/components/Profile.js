import React, { Component } from 'react';
// you have to import react as long as it's a component
// need to use class for instance for this, can't use extends Component because extends doesn't have autobinds

// class SearchBar extends Component
const Profile = React.createClass({
    // componentWillUpdate () {
    //
    // },
    render() {
      console.log(this.props.pokemon)
      var number = ""
      var weight = ""
      var height = ""
      var type = ""
      var tester = {number: 1, weight:2, height:3, type:4}
      if (this.props.pokemon.number) {
         var {number, weight, height, type} = this.props.pokemon
      }

      var description = ""

      if (this.props.pokemon.description) {
         var {description} = this.props.pokemon
      }

      return (
        <div>
          <p>number: {number}</p>
          <p>average weight: {weight} lbs</p>
          <p>average height: {height} ft</p>
          <p>type: {type}</p>
          <p>description: {description}</p>

          {/* {this.props.selectedPokemon.name}
          {this.props.selectedPokemon.height}
          {this.props.selectedPokemon.weight} */}
          {/* {this.props.pokemonTypeInfo.damage_relations.double_damage_from[0].name} */}
        </div>
      )
    }
})

export default Profile;
