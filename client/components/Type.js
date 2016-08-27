import React, { Component } from 'react'
import MiniPokemon from './MiniPokemon'
// const Type = React.createClass({
//   handleClick (e) {
//     e.preventDefault()
//     this.props.onTypeClick(this.props.name)
//   },
//   render() {
//     return (
//       <li onClick={handleClick}>
//         {this.props.name}
//       </li>
//     )
//   }
// })

const Type = ({onClick, name, onMiniPokemonClick, miniPokemon}) => (
  <li
    onClick={onClick}
  >
    {name}
    <ul>
      {miniPokemonArr.map(function (pokemon, idx) {
        return (<MiniPokemon onClick={onMiniPokemonClick} name={pokemon.name}/>)
      })}
    </ul>
  </li>
)

export default Type
