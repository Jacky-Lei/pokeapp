import React, { Component } from 'react'
import ClickedType from '../containers/ClickedType'

const TypeList = ({info, onClick}) => (
  // the connect component's onclick name will be more descripitive but presentational doesn't care, it's just a click
  <ul>
    {
      info.map(function (type, idx) {
        // onclick details taken care of here
      return (<ClickedType key={idx} name={type.name} onClick={() => onClick(type.name)}/>)
    })
    }
  </ul>
)

export default TypeList
