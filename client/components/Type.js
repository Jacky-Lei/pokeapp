import React from 'react'

const Type = ({onClick, name, activeSubPokeType}) => {
  let classType = (activeSubPokeType === name) ? `type-${name}-active bold-uppercase` : `type-${name}`

  return (
    <li onClick={onClick} className={`cell type ${classType} text-align-center`}>
      {name}
    </li>
  )
}

export default Type
