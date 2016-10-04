import React from 'react'
import Type from './Type'

const TypeList = ({info, activeSubPokeType, onClick}) => {
  // Ensures TypeList will only have 3 Types in each row on UI
  let typeArraysHolder = [], tempArray = []
  info.map((element, idx) => {
    tempArray.push(element)
    if (idx % 3 === 2 || idx === info.length - 1) {
      typeArraysHolder.push(tempArray)
      tempArray = []
    }
  })

  return (
    <ul className="table">
    {
      typeArraysHolder.map((arr, arrIdx) => (
        <div className="table-row" key={arrIdx}>
          {
            arr.map((type, idx) => (
              <Type
                name={type.name}
                onClick={() => onClick(type.name)}
                activeSubPokeType={activeSubPokeType}
                key={idx + (3 * arrIdx)}
              />
            ))
          }
        </div>
      ))
    }
    </ul>
  )
}

TypeList.propTypes = {
  info: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  activeSubPokeType: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}

export default TypeList
