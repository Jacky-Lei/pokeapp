import React, { Component } from 'react'
import TypeList from './TypeList'
// const TypeHolder = React.createClass({
//
//     render() {
//       return (
//         <div>
//           <TypeList info={this.props.pokemonTypeInfo.weakAgainst} onClick={this.props.onTypeClick} />
//           {/* To Typelist, it only cares about info, it doesn't know if it's weak or strong */}
//           <TypeList info={this.props.pokemonTypeInfo.strongAgainst} onClick={this.props.onTypeClick} />
//         </div>
//       )
//     }
// })

const TypeHolder = ({pokemonTypeInfo, onTypeClick}) => (
  <div>
    weakAgainst: <TypeList info={pokemonTypeInfo.weakAgainst} onClick={onTypeClick} />
    strongAgainst: <TypeList info={pokemonTypeInfo.strongAgainst} onClick={onTypeClick} />
  </div>
)

export default TypeHolder
