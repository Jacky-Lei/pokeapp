import React, { Component } from 'react';
// you have to import react as long as it's a component
// need to use class for instance for this, can't use extends Component because extends doesn't have autobinds

// class SearchBar extends Component
const Profile = React.createClass({
    // componentWillUpdate () {
    //
    // },

    render() {
      console.log(this.props)
      console.log(this.props.pokemon)
      var number = ""
      var weight = ""
      var height = ""
      var pokeType = ""
      var name = ""
      if (this.props.pokemon.number) {
         var {number, weight, height, pokeType, name} = this.props.pokemon
      }

      var description = ""

      if (this.props.pokemon.description) {
         var {description} = this.props.pokemon
      }

      return (
        <div>
          <section className="clear row">
          <div className="col-xs-12 col-lg-5 profile-image-holder">
          <img src="http://veekun.com/dex/media/pokemon/global-link/143.png" alt="" />
          </div>
          <div className="attributes col-xs-12 col-lg-7">
          <p className="profile-num">#{number}</p>
          <p className="profile-name">{name}</p>
          <p className="profile-type type type-normal">Normal</p>
          <p className="weight">Weight: {weight/10} kg</p>
          <p>Height: {height/10} m</p>
          </div>
          </section>
          <section>
          <p className="clear description">{description}</p>
          </section>
        </div>
      )
    }
})

{/* <p className='awesome'>name: {name}</p>
<p>number: {number}</p>
<p>average weight: {weight/10} kg</p>
<p>average height: {height/10} m</p>
<p>type: {pokeType}</p>
<p>description: {description}</p> */}

{/* {this.props.selectedPokemon.name}
{this.props.selectedPokemon.height}
{this.props.selectedPokemon.weight} */}
{/* {this.props.pokeType.damage_relations.double_damage_from[0].name} */}


export default Profile;
