import React from 'react'
import SearchableSearchBar from '../containers/SearchableSearchBar'
import PopulatedProfile from '../containers/PopulatedProfile'
import PopulatedTypeHolder from '../containers/PopulatedTypeHolder'

const Main = () => (
    <div>
      <SearchableSearchBar />
      <PopulatedProfile />
      <PopulatedTypeHolder />
    </div>
)

export default Main;
