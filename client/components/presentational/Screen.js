import React from 'react'
import Profile from './Profile'
import TypeHolder from './TypeHolder'
import PokeList from './PokeList'

const Screen = props => (
  <article className="screen clearfix">
    <Profile {...props} />
    <TypeHolder {...props} />
    <PokeList {...props} />
  </article>
)

export default Screen
