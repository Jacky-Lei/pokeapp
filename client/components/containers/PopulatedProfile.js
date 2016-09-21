import { connect } from 'react-redux'
import Profile from '../presentational/Profile'

const mapStateToProps = (state) => ({
  pokemon: state.activePokemon,
  fetching: state.fetching
})

const PopulatedProfile = connect(
  mapStateToProps
)(Profile)

export default PopulatedProfile
