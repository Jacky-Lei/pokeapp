import Type from '../components/Type'

const mapStateToProps = function (state) {
  miniPokemon: state.sidePokemonTypeInfo.pokemon
}
const mapDispatchToProps = function (dispatch) {
  onMiniPokemonClick: function () {
    dispatch(reducer)
  }
}

const ClickedType = connect(
  mapStateToProps,
  mapDispatchToProps
)(Type)

export default ClickedType
