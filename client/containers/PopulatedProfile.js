import { connect } from 'react-redux'
import Profile from '../components/Profile'

const mapStateToProps = (state) => {
  return {
    pokemon: state.activePokemon,
    fetching: state.fetching
    // pokeType: state.pokeType
    // can't destructure with just state.selectedPokemon, need to put in key
  }
}

const PopulatedProfile = connect(
  mapStateToProps
)(Profile)

export default PopulatedProfile
