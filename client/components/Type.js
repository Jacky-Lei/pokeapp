import React, { Component } from 'react'
import MiniPokemon from './MiniPokemon'

// class Type extends React.Component{
//   clickHandler (event) {
//     debugger;
//   }
//   render () {
//     const classType = `cell type type-${this.props.name}`
//     return (
//       <li
//       onClick={this.clickHandler}
//       className={classType}
//       >
//       {this.props.name}
//       </li>
//     )
//   }
// }

// const Type = React.createClass({
//   clickHandler: function (event) {
//     debugger;
//   },
//   render () {
//     const classType = `cell type type-${this.props.name}`
//     return (
//       <li
//       onClick={this.clickHandler}
//       className={classType}
//       >
//       {this.props.name}
//       </li>
//     )
//   }
// })

const Type = ({onClick, name, activeSubPokeType}) => {
  if (activeSubPokeType === name) {
    var classType = `cell type type-${name}-active`
  } else {
    var classType = `cell type type-${name}`
  }
  return (
    <li
    onClick={onClick}
    className={classType}
    >
    {name}
    </li>
  )
}


export default Type
