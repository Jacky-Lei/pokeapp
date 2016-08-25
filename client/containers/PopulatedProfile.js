import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = (state) => {
  console.log(state.pokemon)
  return {
    pokemon: state.pokemon
    // pokemonTypeInfo: state.pokemonTypeInfo
    // can't destructure with just state.selectedPokemon, need to put in key
  }
}

const PopulatedProfile = connect(
  mapStateToProps
)(Profile)

export default PopulatedProfile
