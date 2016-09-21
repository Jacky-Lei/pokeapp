import React from 'react'

const Type = ({name, activeSubPokeType, onClick}) => {
  const classType = (activeSubPokeType === name) ? `type-${name}-active bold-uppercase` : `type-${name}`

  return (
    <li onClick={onClick} className={`cell type ${classType} text-align-center`}>
      {name}
    </li>
  )
}

Type.propTypes = {
  name: React.PropTypes.string.isRequired,
  activeSubPokeType: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default Type
