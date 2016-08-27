import React, { Component } from 'react'
import Type from './Type'
// const TypeList = React.createClass({
//     render() {
//       return (
//         <div>
//           <ul>
//             this.props.info.forEach(function (type) {
//               return (<li><Type name={type.name}/></li>)
//             })
//           </ul>
//
//         </div>
//       )
//     }
// })

const TypeList = ({info, onClick}) => (
  // the connect component's onclick name will be more descripitive but presentational doesn't care, it's just a click
  <ul>
    {
      info.map(function (type, idx) {
        // onclick details taken care of here
      return (<Type key={idx} name={type.name} onClick={() => onClick(type.name)}/>)
    })
    }
  </ul>
)


export default TypeList
