import { checkPokeTypeFetch } from '../actions/actionCreators'
import { connect } from 'react-redux'
import TypeHolder from '../components/TypeHolder'

const mapStateToProps = (state) => ({
  pokeType: state.activePokeType,
  fetching: state.fetching,
  activeSubPokeType: state.activeSubPokeType.name
})

const mapDispatchToProps = (dispatch) => ({
  onTypeClick: (typeName) => {
    dispatch(checkPokeTypeFetch(typeName, true))
  }
})

const PopulatedTypeHolder = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeHolder)

export default PopulatedTypeHolder
